// Route planning functionality
class RoutePlanner {
    constructor(buildingData, routeData) {
        this.buildings = buildingData;
        this.routes = routeData;
        this.buildingMap = new Map();
        
        // Create building lookup map
        this.buildings.forEach(building => {
            this.buildingMap.set(building.id, building);
        });
    }
    
    // Find direct routes between two buildings
    findRoute(fromId, toId) {
        // Check for predefined routes first
        const directRoute = this.routes.find(route => 
            (route.from === fromId && route.to === toId) ||
            (route.from === toId && route.to === fromId)
        );
        
        if (directRoute) {
            return this.enhanceRoute(directRoute);
        }
        
        // Simple pathfinding for connected buildings
        const fromBuilding = this.buildingMap.get(fromId);
        const toBuilding = this.buildingMap.get(toId);
        
        if (!fromBuilding || !toBuilding) {
            return null;
        }
        
        // Check if buildings are directly connected
        if (fromBuilding.connections.includes(toId)) {
            return {
                id: `${fromId}-to-${toId}`,
                name: `${fromBuilding.name} to ${toBuilding.name}`,
                from: fromId,
                to: toId,
                segments: [fromId, toId],
                estimatedTime: '3-5 minutes',
                difficulty: 'easy',
                weekendViability: this.assessWeekendViability([fromBuilding, toBuilding]),
                notes: 'Direct connection'
            };
        }
        
        // Simple two-hop pathfinding
        for (const intermediateId of fromBuilding.connections) {
            const intermediate = this.buildingMap.get(intermediateId);
            if (intermediate && intermediate.connections.includes(toId)) {
                return {
                    id: `${fromId}-via-${intermediateId}-to-${toId}`,
                    name: `${fromBuilding.name} to ${toBuilding.name}`,
                    from: fromId,
                    to: toId,
                    segments: [fromId, intermediateId, toId],
                    estimatedTime: '5-8 minutes',
                    difficulty: 'easy',
                    weekendViability: this.assessWeekendViability([fromBuilding, intermediate, toBuilding]),
                    notes: `Via ${intermediate.name}`
                };
            }
        }
        
        return null;
    }
    
    // Enhance route with current status information
    enhanceRoute(route) {
        const enhancedRoute = { ...route };
        const buildings = route.segments.map(id => this.buildingMap.get(id));
        
        enhancedRoute.currentStatus = this.assessRouteStatus(buildings);
        enhancedRoute.buildings = buildings;
        enhancedRoute.warnings = this.generateWarnings(buildings);
        
        return enhancedRoute;
    }
    
    // Assess current route status
    assessRouteStatus(buildings) {
        const statuses = buildings.map(building => getCurrentStatus(building));
        
        if (statuses.every(status => status === 'likely-open')) {
            return 'good';
        } else if (statuses.some(status => status === 'likely-closed')) {
            return 'problematic';
        } else {
            return 'uncertain';
        }
    }
    
    // Generate route warnings
    generateWarnings(buildings) {
        const warnings = [];
        const now = new Date();
        const day = now.getDay();
        const isWeekend = day === 0 || day === 6;
        
        if (isWeekend) {
            const weekendProblems = buildings.filter(b => 
                b.status === 'weekday-only' || b.reliability === 'low'
            );
            if (weekendProblems.length > 0) {
                warnings.push(`Weekend access limited: ${weekendProblems.map(b => b.name).join(', ')}`);
            }
        }
        
        const eventDependent = buildings.filter(b => b.status === 'event-dependent');
        if (eventDependent.length > 0) {
            warnings.push(`Check event schedules: ${eventDependent.map(b => b.name).join(', ')}`);
        }
        
        return warnings;
    }
    
    // Assess weekend viability for a set of buildings
    assessWeekendViability(buildings) {
        const weekendStatuses = buildings.map(b => b.status);
        
        if (weekendStatuses.every(status => 
            ['excellent-weekend', 'good-weekend'].includes(status)
        )) {
            return 'good';
        } else if (weekendStatuses.some(status => status === 'weekday-only')) {
            return 'poor';
        } else {
            return 'limited';
        }
    }
    
    // Get popular routes
    getPopularRoutes() {
        return this.routes.filter(route => 
            ['ids-to-target-center', 'government-to-ids'].includes(route.id)
        );
    }
    
    // Search buildings by name
    searchBuildings(query) {
        const lowerQuery = query.toLowerCase();
        return this.buildings.filter(building =>
            building.name.toLowerCase().includes(lowerQuery) ||
            building.address.toLowerCase().includes(lowerQuery) ||
            building.description.toLowerCase().includes(lowerQuery)
        );
    }
    
    // Get buildings by status
    getBuildingsByStatus(status) {
        return this.buildings.filter(building => building.status === status);
    }
    
    // Get weekend-friendly buildings
    getWeekendFriendlyBuildings() {
        return this.buildings.filter(building => 
            ['excellent-weekend', 'good-weekend'].includes(building.status)
        );
    }
}