// Building Directory functionality
class BuildingDirectory {
    constructor(buildingData) {
        this.buildings = buildingData;
        this.filteredBuildings = [...buildingData];
        this.currentFilter = 'all';
        this.currentSort = 'name';
    }

    // Filter buildings by category
    filterBuildings(category) {
        this.currentFilter = category;
        
        switch (category) {
            case 'all':
                this.filteredBuildings = [...this.buildings];
                break;
            case 'weekend-friendly':
                this.filteredBuildings = this.buildings.filter(b => 
                    ['excellent-weekend', 'good-weekend'].includes(b.status)
                );
                break;
            case 'hotels':
                this.filteredBuildings = this.buildings.filter(b => b.type === 'hotel');
                break;
            case 'shopping':
                this.filteredBuildings = this.buildings.filter(b => 
                    b.type === 'shopping' || b.type === 'retail'
                );
                break;
            case 'offices':
                this.filteredBuildings = this.buildings.filter(b => b.type === 'office');
                break;
            case 'major-hubs':
                this.filteredBuildings = this.buildings.filter(b => 
                    b.status === 'major-hub' || b.status === 'popular-entry'
                );
                break;
            default:
                this.filteredBuildings = [...this.buildings];
        }
        
        this.sortBuildings(this.currentSort);
        return this.filteredBuildings;
    }

    // Sort buildings
    sortBuildings(sortBy) {
        this.currentSort = sortBy;
        
        this.filteredBuildings.sort((a, b) => {
            switch (sortBy) {
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'type':
                    return a.type.localeCompare(b.type);
                case 'reliability':
                    const reliabilityOrder = { 'very-high': 4, 'high': 3, 'medium': 2, 'low': 1, 'event-dependent': 0 };
                    return (reliabilityOrder[b.reliability] || 0) - (reliabilityOrder[a.reliability] || 0);
                case 'weekend-access':
                    const weekendOrder = { 'excellent-weekend': 4, 'good-weekend': 3, 'popular-entry': 2, 'weekday-only': 1, 'event-dependent': 0 };
                    return (weekendOrder[b.status] || 0) - (weekendOrder[a.status] || 0);
                default:
                    return a.name.localeCompare(b.name);
            }
        });
        
        return this.filteredBuildings;
    }

    // Search buildings
    searchBuildings(query) {
        if (!query.trim()) {
            return this.filterBuildings(this.currentFilter);
        }
        
        const lowerQuery = query.toLowerCase();
        this.filteredBuildings = this.buildings.filter(building =>
            building.name.toLowerCase().includes(lowerQuery) ||
            building.address.toLowerCase().includes(lowerQuery) ||
            building.description.toLowerCase().includes(lowerQuery) ||
            building.type.toLowerCase().includes(lowerQuery)
        );
        
        return this.filteredBuildings;
    }

    // Get building status icon and color
    getBuildingStatusInfo(building) {
        const status = getCurrentStatus(building);
        return {
            status: status,
            icon: getStatusIcon(status),
            color: getStatusColor(status),
            text: this.getStatusText(status)
        };
    }

    getStatusText(status) {
        switch (status) {
            case 'likely-open': return 'Likely Open';
            case 'likely-closed': return 'Likely Closed';
            case 'unknown': return 'Check Hours';
            default: return 'Unknown';
        }
    }

    // Get weekend access rating
    getWeekendRating(building) {
        switch (building.status) {
            case 'excellent-weekend': return { rating: 5, text: 'Excellent' };
            case 'good-weekend': return { rating: 4, text: 'Good' };
            case 'popular-entry': return { rating: 3, text: 'Limited' };
            case 'weekday-only': return { rating: 1, text: 'Weekday Only' };
            case 'event-dependent': return { rating: 2, text: 'Event Dependent' };
            default: return { rating: 2, text: 'Unknown' };
        }
    }

    // Generate building card HTML
    generateBuildingCard(building) {
        const statusInfo = this.getBuildingStatusInfo(building);
        const weekendRating = this.getWeekendRating(building);
        
        return `
            <div class="building-card" data-building-id="${building.id}">
                <div class="building-header">
                    <h3 class="building-name">${building.name}</h3>
                    <div class="building-status" style="color: ${statusInfo.color}">
                        ${statusInfo.icon} ${statusInfo.text}
                    </div>
                </div>
                
                <div class="building-info">
                    <p class="building-address">${building.address}</p>
                    <p class="building-type">${this.formatType(building.type)}</p>
                </div>
                
                <div class="building-hours">
                    <div class="hours-row">
                        <span class="hours-label">Weekdays:</span>
                        <span class="hours-value">${building.weekdayHours}</span>
                    </div>
                    <div class="hours-row">
                        <span class="hours-label">Weekends:</span>
                        <span class="hours-value">${building.weekendHours}</span>
                    </div>
                </div>
                
                <div class="building-meta">
                    <div class="weekend-rating">
                        <span class="rating-label">Weekend Access:</span>
                        <div class="rating-stars">
                            ${this.generateStars(weekendRating.rating)}
                        </div>
                        <span class="rating-text">${weekendRating.text}</span>
                    </div>
                    
                    <div class="reliability">
                        <span class="reliability-label">Reliability:</span>
                        <span class="reliability-value">${this.formatReliability(building.reliability)}</span>
                    </div>
                </div>
                
                <div class="building-amenities">
                    ${building.amenities.map(amenity => 
                        `<span class="amenity-tag">${this.formatAmenity(amenity)}</span>`
                    ).join('')}
                </div>
                
                <div class="building-description">
                    <p>${building.description}</p>
                </div>
                
                <div class="building-actions">
                    <button class="btn-secondary" onclick="showBuildingConnections('${building.id}')">
                        View Connections
                    </button>
                    <button class="btn-primary" onclick="showBuildingOnMap('${building.id}')">
                        Show on Map
                    </button>
                </div>
            </div>
        `;
    }

    formatType(type) {
        const typeMap = {
            'office': 'Office Building',
            'shopping': 'Shopping Center',
            'retail': 'Retail Store',
            'hotel': 'Hotel',
            'government': 'Government',
            'arena': 'Sports Arena',
            'convention': 'Convention Center',
            'library': 'Library'
        };
        return typeMap[type] || type;
    }

    formatReliability(reliability) {
        const reliabilityMap = {
            'very-high': 'Very High',
            'high': 'High',
            'medium': 'Medium',
            'low': 'Low',
            'event-dependent': 'Event Dependent'
        };
        return reliabilityMap[reliability] || reliability;
    }

    formatAmenity(amenity) {
        const amenityMap = {
            'restaurants': '🍽️ Restaurants',
            'shops': '🛍️ Shops',
            'shopping': '🛍️ Shopping',
            'atm': '🏧 ATM',
            'food-court': '🍔 Food Court',
            'restrooms': '🚻 Restrooms',
            'banking': '🏦 Banking',
            'pharmacy': '💊 Pharmacy',
            'starbucks': '☕ Starbucks',
            'hotel': '🏨 Hotel',
            'restaurant': '🍽️ Restaurant',
            'parking': '🅿️ Parking',
            'fitness': '💪 Fitness',
            'government-services': '🏛️ Gov Services',
            'arena': '🏀 Arena',
            'concessions': '🍿 Concessions',
            'convention-space': '🏢 Convention Space',
            'library': '📚 Library',
            'wifi': '📶 WiFi',
            'offices': '🏢 Offices'
        };
        return amenityMap[amenity] || amenity;
    }

    generateStars(rating) {
        const maxStars = 5;
        let stars = '';
        for (let i = 1; i <= maxStars; i++) {
            if (i <= rating) {
                stars += '⭐';
            } else {
                stars += '☆';
            }
        }
        return stars;
    }
}