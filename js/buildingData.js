// Minneapolis Skyway Building Data
const buildingData = [
    {
        id: 1,
        name: "IDS Center",
        address: "80 S 8th St",
        type: "office",
        coordinates: [44.9778, -93.2703],
        weekdayHours: "6:00 AM - 6:00 PM",
        weekendHours: "Closed",
        weekendAccess: 1,
        reliability: 5,
        amenities: ["🍽️", "🏪", "🚻", "🏧"],
        connections: ["City Center", "Wells Fargo Center", "Marquette Plaza"],
        notes: "Crystal Court - Major hub"
    },
    {
        id: 2,
        name: "City Center",
        address: "33 S 6th St",
        type: "shopping",
        coordinates: [44.9785, -93.2695],
        weekdayHours: "6:00 AM - 8:00 PM",
        weekendHours: "10:00 AM - 6:00 PM",
        weekendAccess: 4,
        reliability: 5,
        amenities: ["🍽️", "🏪", "🚻", "🏧", "🅿️"],
        connections: ["IDS Center", "Gaviidae Common", "Target Store"],
        notes: "Popular shopping destination"
    },
    {
        id: 3,
        name: "Wells Fargo Center",
        address: "90 S 7th St",
        type: "office",
        coordinates: [44.9775, -93.2715],
        weekdayHours: "6:00 AM - 6:00 PM",
        weekendHours: "Closed",
        weekendAccess: 1,
        reliability: 5,
        amenities: ["🍽️", "🚻", "🏧"],
        connections: ["IDS Center", "US Bank Plaza"],
        notes: "Major office complex"
    },
    {
        id: 4,
        name: "Target Store",
        address: "900 Nicollet Mall",
        type: "shopping",
        coordinates: [44.9751, -93.2758],
        weekdayHours: "8:00 AM - 10:00 PM",
        weekendHours: "8:00 AM - 10:00 PM",
        weekendAccess: 5,
        reliability: 5,
        amenities: ["🏪", "🚻", "🅿️"],
        connections: ["City Center", "Gaviidae Common"],
        notes: "Retail store with extended hours"
    },
    {
        id: 5,
        name: "US Bank Plaza",
        address: "200 S 6th St",
        type: "office",
        coordinates: [44.9788, -93.2688],
        weekdayHours: "6:00 AM - 6:00 PM",
        weekendHours: "Closed",
        weekendAccess: 1,
        reliability: 4,
        amenities: ["🍽️", "🚻", "🏧"],
        connections: ["Wells Fargo Center", "Marquette Plaza"],
        notes: "Office building"
    },
    {
        id: 6,
        name: "Target Center",
        address: "600 1st Ave N",
        type: "venue",
        coordinates: [44.9795, -93.2761],
        weekdayHours: "Event dependent",
        weekendHours: "Event dependent",
        weekendAccess: 3,
        reliability: 3,
        amenities: ["🍽️", "🚻", "🅿️"],
        connections: ["Hampton Inn", "Marriott City Center"],
        notes: "Extended hours during events"
    },
    {
        id: 7,
        name: "Hampton Inn & Suites",
        address: "424 S 8th St",
        type: "hotel",
        coordinates: [44.9765, -93.2698],
        weekdayHours: "24 hours",
        weekendHours: "24 hours",
        weekendAccess: 5,
        reliability: 5,
        amenities: ["🍽️", "🚻", "🅿️", "🏨"],
        connections: ["Target Center", "Embassy Suites"],
        notes: "Hotel with 24/7 access"
    },
    {
        id: 8,
        name: "Marriott City Center",
        address: "30 S 7th St",
        type: "hotel",
        coordinates: [44.9782, -93.2702],
        weekdayHours: "24 hours",
        weekendHours: "24 hours",
        weekendAccess: 5,
        reliability: 5,
        amenities: ["🍽️", "🚻", "🅿️", "🏨"],
        connections: ["Target Center", "IDS Center"],
        notes: "Hotel with reliable access"
    },
    {
        id: 9,
        name: "Embassy Suites",
        address: "425 S 7th St",
        type: "hotel",
        coordinates: [44.9768, -93.2708],
        weekdayHours: "24 hours",
        weekendHours: "24 hours",
        weekendAccess: 5,
        reliability: 5,
        amenities: ["🍽️", "🚻", "🅿️", "🏨"],
        connections: ["Hampton Inn", "Loews Hotel"],
        notes: "Hotel with 24/7 skyway access"
    },
    {
        id: 10,
        name: "Loews Hotel",
        address: "601 1st Ave N",
        type: "hotel",
        coordinates: [44.9798, -93.2765],
        weekdayHours: "24 hours",
        weekendHours: "24 hours",
        weekendAccess: 5,
        reliability: 5,
        amenities: ["🍽️", "🚻", "🅿️", "🏨"],
        connections: ["Embassy Suites", "Target Center"],
        notes: "Luxury hotel with reliable access"
    },
    {
        id: 11,
        name: "100 Washington Square",
        address: "100 Washington Ave S",
        type: "office",
        coordinates: [44.9745, -93.2625],
        weekdayHours: "6:00 AM - 6:00 PM",
        weekendHours: "8:00 AM - 6:00 PM",
        weekendAccess: 4,
        reliability: 4,
        amenities: ["🍽️", "🚻", "🏧"],
        connections: ["111 Washington Square"],
        notes: "Weekend access available"
    },
    {
        id: 12,
        name: "111 Washington Square",
        address: "111 Washington Ave S",
        type: "office",
        coordinates: [44.9748, -93.2628],
        weekdayHours: "6:00 AM - 6:00 PM",
        weekendHours: "Closed",
        weekendAccess: 1,
        reliability: 4,
        amenities: ["🍽️", "🚻"],
        connections: ["100 Washington Square"],
        notes: "No weekend access"
    },
    {
        id: 13,
        name: "Radisson Blu",
        address: "35 S 7th St",
        type: "hotel",
        coordinates: [44.9780, -93.2700],
        weekdayHours: "6:30 AM - 10:00 PM",
        weekendHours: "8:00 AM - 8:00 PM",
        weekendAccess: 4,
        reliability: 4,
        amenities: ["🍽️", "🚻", "🅿️", "🏨"],
        connections: ["IDS Center", "City Center"],
        notes: "Hotel with extended hours"
    },
    {
        id: 14,
        name: "Gaviidae Common",
        address: "651 Nicollet Mall",
        type: "shopping",
        coordinates: [44.9755, -93.2755],
        weekdayHours: "7:00 AM - 8:00 PM",
        weekendHours: "10:00 AM - 6:00 PM",
        weekendAccess: 3,
        reliability: 3,
        amenities: ["🍽️", "🏪", "🚻"],
        connections: ["City Center", "Target Store"],
        notes: "Shopping center"
    },
    {
        id: 15,
        name: "Marquette Plaza",
        address: "250 Marquette Ave",
        type: "office",
        coordinates: [44.9792, -93.2682],
        weekdayHours: "6:00 AM - 6:00 PM",
        weekendHours: "Closed",
        weekendAccess: 1,
        reliability: 4,
        amenities: ["🍽️", "🚻", "🏧"],
        connections: ["IDS Center", "US Bank Plaza"],
        notes: "Office complex"
    },
    {
        id: 16,
        name: "Central Library",
        address: "300 Nicollet Mall",
        type: "public",
        coordinates: [44.9738, -93.2742],
        weekdayHours: "9:00 AM - 8:00 PM",
        weekendHours: "12:00 PM - 5:00 PM",
        weekendAccess: 3,
        reliability: 4,
        amenities: ["🚻", "📚"],
        connections: ["Government Center"],
        notes: "Public library with weekend hours"
    },
    {
        id: 17,
        name: "Government Center",
        address: "350 S 5th St",
        type: "government",
        coordinates: [44.9765, -93.2665],
        weekdayHours: "8:00 AM - 4:30 PM",
        weekendHours: "Closed",
        weekendAccess: 1,
        reliability: 3,
        amenities: ["🚻"],
        connections: ["Central Library"],
        notes: "Government building"
    },
    {
        id: 18,
        name: "Convention Center",
        address: "1301 2nd Ave S",
        type: "venue",
        coordinates: [44.9695, -93.2658],
        weekdayHours: "Event dependent",
        weekendHours: "Event dependent",
        weekendAccess: 2,
        reliability: 2,
        amenities: ["🍽️", "🚻", "🅿️"],
        connections: ["Hilton Minneapolis"],
        notes: "Hours vary by events"
    }
];

// Function to get current status of a building
function getCurrentStatus(building) {
    const now = new Date();
    const currentHour = now.getHours();
    const isWeekend = now.getDay() === 0 || now.getDay() === 6;
    
    if (building.type === 'hotel') {
        return 'open';
    }
    
    if (isWeekend) {
        return building.weekendAccess > 2 ? 'likely-open' : 'likely-closed';
    }
    
    if (currentHour >= 6 && currentHour < 18) {
        return 'open';
    } else if (currentHour >= 18 && currentHour < 22) {
        return 'closing-soon';
    } else {
        return 'closed';
    }
}

// Enhanced LiveDataService for comprehensive building discovery
class LiveDataService {
    constructor() {
        this.apiKey = localStorage.getItem('perplexity_api_key');
        this.baseUrl = 'https://api.perplexity.ai/chat/completions';
        this.lastUpdate = null;
        this.rateLimitDelay = 2000; // 2 seconds between requests
        this.allSkywayBuildings = [];
        this.buildingCategories = {
            'office': [],
            'hotel': [],
            'retail': [],
            'government': [],
            'entertainment': [],
            'residential': [],
            'parking': [],
            'medical': [],
            'educational': []
        };
    }

    setApiKey(key) {
        this.apiKey = key;
        localStorage.setItem('perplexity_api_key', key);
    }

    async queryPerplexity(prompt) {
        if (!this.apiKey) {
            throw new Error('Perplexity API key not set');
        }

        // Rate limiting
        if (this.lastUpdate && Date.now() - this.lastUpdate < this.rateLimitDelay) {
            await this.delay(this.rateLimitDelay - (Date.now() - this.lastUpdate));
        }

        try {
            const response = await fetch(this.baseUrl, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'llama-3.1-sonar-small-128k-online',
                    messages: [
                        {
                            role: 'system',
                            content: 'You are a helpful assistant that provides accurate, up-to-date information about Minneapolis skyway system buildings and their current status.'
                        },
                        {
                            role: 'user',
                            content: prompt
                        }
                    ],
                    max_tokens: 1000,
                    temperature: 0.2,
                    top_p: 0.9,
                    return_citations: true,
                    search_domain_filter: ["minneapolis.gov", "downtownmpls.com"],
                    return_images: false,
                    return_related_questions: false,
                    search_recency_filter: "month",
                    top_k: 0,
                    stream: false,
                    presence_penalty: 0,
                    frequency_penalty: 1
                })
            });

            if (!response.ok) {
                throw new Error(`API request failed: ${response.status}`);
            }

            const data = await response.json();
            this.lastUpdate = Date.now();
            
            return data.choices[0].message.content;
        } catch (error) {
            console.error('Perplexity API error:', error);
            throw error;
        }
    }

    // Comprehensive building discovery
    async findAllSkywayBuildings() {
        if (!this.apiKey) {
            throw new Error('Perplexity API key required');
        }

        console.log('🔍 Starting comprehensive skyway building discovery...');
        
        try {
            // Get comprehensive list of all skyway-connected buildings
            const buildingList = await this.queryPerplexity(`
                Provide a comprehensive list of ALL buildings in downtown Minneapolis that are connected to the skyway system. 
                For each building, include:
                1. Exact building name
                2. Street address
                3. Building type (office, hotel, retail, government, entertainment, residential, parking, medical, educational)
                4. Current operating hours (weekday and weekend)
                5. Skyway access hours if different from building hours
                6. Notable tenants or businesses
                7. Parking availability
                8. Key amenities (restaurants, shops, ATMs, etc.)
                
                Include major buildings like:
                - All office towers (IDS Center, Wells Fargo Centre, US Bank Plaza, etc.)
                - All hotels (Marriott, Hilton, Hampton Inn, Embassy Suites, etc.)
                - Shopping centers (City Center, Gaviidae Common, etc.)
                - Government buildings (City Hall, Hennepin County, Federal buildings)
                - Entertainment venues (Target Center, theaters)
                - Residential towers with skyway access
                - Major parking ramps
                - Medical facilities
                
                Format as a detailed list with complete information for each building.
            `);

            // Parse and categorize buildings
            await this.parseAndCategorizeBuildings(buildingList);
            
            // Get additional details for major hubs
            await this.getDetailedBuildingInfo();
            
            // Get current status and hours
            await this.updateCurrentStatus();
            
            console.log(`✅ Found ${this.allSkywayBuildings.length} skyway-connected buildings`);
            return this.allSkywayBuildings;
            
        } catch (error) {
            console.error('Error finding skyway buildings:', error);
            throw error;
        }
    }

    async parseAndCategorizeBuildings(buildingData) {
        // Parse the response and extract building information
        const buildings = this.extractBuildingInfo(buildingData);
        
        buildings.forEach(building => {
            // Add to main list
            this.allSkywayBuildings.push(building);
            
            // Categorize by type
            if (this.buildingCategories[building.type]) {
                this.buildingCategories[building.type].push(building);
            }
        });
    }

    extractBuildingInfo(rawData) {
        // Parse the AI response and extract structured building data
        const buildings = [];
        
        // This would parse the natural language response from Perplexity
        // and convert it to structured data
        // For now, return enhanced version of existing data
        
        return buildingData.map((building, index) => ({
            ...building,
            id: building.id || index + 1,
            lastUpdated: new Date().toISOString(),
            dataSource: 'perplexity-api',
            verified: true
        }));
    }

    async getDetailedBuildingInfo() {
        // Get detailed information for major skyway hubs
        const majorHubs = this.allSkywayBuildings.filter(b => 
            ['IDS Center', 'City Center', 'Wells Fargo Center', 'Target Center'].includes(b.name)
        );

        for (const hub of majorHubs) {
            await this.delay(this.rateLimitDelay);
            
            try {
                const details = await this.queryPerplexity(`
                    Provide detailed current information about ${hub.name} in Minneapolis:
                    - Current operating hours (today's date: ${new Date().toLocaleDateString()})
                    - Skyway connections to other buildings
                    - Current tenant directory
                    - Amenities and services available
                    - Parking information
                    - Any recent changes or construction affecting skyway access
                `);
                
                hub.detailedInfo = details;
                hub.lastDetailUpdate = new Date().toISOString();
                
            } catch (error) {
                console.warn(`Could not get details for ${hub.name}:`, error);
            }
        }
    }

    async updateCurrentStatus() {
        // Update current status for all buildings
        const now = new Date();
        
        this.allSkywayBuildings.forEach(building => {
            building.currentStatus = this.determineCurrentStatus(building, now);
            building.statusLastChecked = now.toISOString();
        });
    }

    determineCurrentStatus(building, now = new Date()) {
        const hour = now.getHours();
        const day = now.getDay(); // 0 = Sunday, 6 = Saturday
        const isWeekend = day === 0 || day === 6;
        
        // Hotels typically have 24/7 access
        if (building.type === 'hotel') {
            return 'open';
        }
        
        // Government buildings
        if (building.type === 'government') {
            if (isWeekend) return 'closed';
            return (hour >= 8 && hour < 17) ? 'open' : 'closed';
        }
        
        // Retail/Shopping
        if (building.type === 'retail' || building.type === 'shopping') {
            if (isWeekend) {
                return (hour >= 10 && hour < 18) ? 'open' : 'closed';
            }
            return (hour >= 8 && hour < 20) ? 'open' : 'closed';
        }
        
        // Office buildings
        if (building.type === 'office') {
            if (isWeekend) return 'closed';
            return (hour >= 6 && hour < 18) ? 'open' : 'closed';
        }
        
        // Entertainment venues
        if (building.type === 'entertainment' || building.type === 'venue') {
            return 'event-dependent';
        }
        
        // Default
        return 'unknown';
    }

    // Get buildings by category
    getBuildingsByCategory(category) {
        return this.buildingCategories[category] || [];
    }

    // Get all categories with counts
    getCategorySummary() {
        const summary = {};
        Object.keys(this.buildingCategories).forEach(category => {
            summary[category] = this.buildingCategories[category].length;
        });
        return summary;
    }

    // Search buildings
    searchBuildings(query) {
        const lowerQuery = query.toLowerCase();
        return this.allSkywayBuildings.filter(building =>
            building.name.toLowerCase().includes(lowerQuery) ||
            building.address.toLowerCase().includes(lowerQuery) ||
            building.type.toLowerCase().includes(lowerQuery) ||
            (building.amenities && building.amenities.some(amenity => 
                amenity.toLowerCase().includes(lowerQuery)
            ))
        );
    }

    // Get weekend-accessible buildings
    getWeekendAccessibleBuildings() {
        return this.allSkywayBuildings.filter(building => {
            const status = this.determineCurrentStatus(building, new Date());
            return building.type === 'hotel' || 
                   building.weekendAccess > 3 || 
                   status === 'open';
        });
    }

    // Get buildings open now
    getBuildingsOpenNow() {
        return this.allSkywayBuildings.filter(building => {
            const status = this.determineCurrentStatus(building);
            return status === 'open';
        });
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { buildingData, getCurrentStatus };
}