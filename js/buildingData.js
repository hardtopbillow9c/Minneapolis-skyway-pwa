// Building data for Minneapolis Skyway System
const buildingData = [
    {
        id: 'ids-center',
        name: 'IDS Center',
        address: '80 S 8th St',
        type: 'office',
        weekdayHours: '6:00 AM - 6:00 PM',
        weekendHours: 'Limited',
        status: 'major-hub',
        description: 'Crystal Court - Major skyway hub',
        connections: ['wells-fargo', 'city-center', 'marquette-plaza'],
        amenities: ['restaurants', 'shops', 'atm'],
        reliability: 'high'
    },
    {
        id: 'city-center',
        name: 'City Center',
        address: '33 S 6th St',
        type: 'shopping',
        weekdayHours: '6:00 AM - 8:00 PM',
        weekendHours: '10:00 AM - 6:00 PM',
        status: 'popular-entry',
        description: 'Shopping center with good weekend access',
        connections: ['ids-center', 'gaviidae-common', 'target-store'],
        amenities: ['shopping', 'food-court', 'restrooms'],
        reliability: 'high'
    },
    {
        id: 'wells-fargo-center',
        name: 'Wells Fargo Center',
        address: '90 S 7th St',
        type: 'office',
        weekdayHours: '6:00 AM - 6:00 PM',
        weekendHours: 'Closed',
        status: 'popular-entry',
        description: 'Major office building, weekday access only',
        connections: ['ids-center', 'us-bank-plaza'],
        amenities: ['restaurants', 'banking'],
        reliability: 'medium'
    },
    {
        id: 'target-store',
        name: 'Target Store',
        address: '900 Nicollet Mall',
        type: 'retail',
        weekdayHours: '8:00 AM - 10:00 PM',
        weekendHours: '8:00 AM - 10:00 PM',
        status: 'excellent-weekend',
        description: 'Reliable weekend access, connects to Nicollet Mall',
        connections: ['city-center', 'gaviidae-common'],
        amenities: ['shopping', 'pharmacy', 'starbucks'],
        reliability: 'very-high'
    },
    {
        id: 'us-bank-plaza',
        name: 'US Bank Plaza',
        address: '200 S 6th St',
        type: 'office',
        weekdayHours: '6:00 AM - 6:00 PM',
        weekendHours: 'Limited',
        status: 'popular-entry',
        description: 'Major office complex',
        connections: ['wells-fargo-center', 'capella-tower'],
        amenities: ['restaurants', 'banking'],
        reliability: 'medium'
    },
    {
        id: 'target-center',
        name: 'Target Center',
        address: '600 1st Ave N',
        type: 'arena',
        weekdayHours: '6:00 AM - 6:00 PM',
        weekendHours: 'Event Days Only',
        status: 'event-dependent',
        description: 'Extended hours during Timberwolves/Lynx games',
        connections: ['parking-ramps', 'marriott-city-center'],
        amenities: ['arena', 'concessions'],
        reliability: 'event-dependent'
    },
    {
        id: 'marriott-city-center',
        name: 'Marriott City Center',
        address: '30 S 7th St',
        type: 'hotel',
        weekdayHours: '24 hours',
        weekendHours: '24 hours',
        status: 'excellent-weekend',
        description: 'Hotel with 24/7 access',
        connections: ['target-center', 'city-center'],
        amenities: ['hotel', 'restaurant', 'parking'],
        reliability: 'very-high'
    },
    {
        id: 'radisson-blu',
        name: 'Radisson Blu',
        address: '35 S 7th St',
        type: 'hotel',
        weekdayHours: '6:30 AM - 10:00 PM',
        weekendHours: '8:00 AM - 8:00 PM',
        status: 'good-weekend',
        description: 'Hotel with extended hours',
        connections: ['marriott-city-center', 'city-center'],
        amenities: ['hotel', 'restaurant', 'fitness'],
        reliability: 'high'
    },
    {
        id: 'government-center',
        name: 'Government Center',
        address: '300 S 4th St',
        type: 'government',
        weekdayHours: '7:00 AM - 5:00 PM',
        weekendHours: 'Closed',
        status: 'weekday-only',
        description: 'Government offices, weekday access only',
        connections: ['hennepin-county', 'courthouse'],
        amenities: ['government-services'],
        reliability: 'low'
    },
    {
        id: 'convention-center',
        name: 'Minneapolis Convention Center',
        address: '1301 2nd Ave S',
        type: 'convention',
        weekdayHours: '6:00 AM - 6:00 PM',
        weekendHours: 'Event Dependent',
        status: 'event-dependent',
        description: 'Access varies by events and conferences',
        connections: ['hilton-minneapolis', 'parking-ramps'],
        amenities: ['convention-space', 'restaurants'],
        reliability: 'medium'
    },
    {
        id: 'central-library',
        name: 'Central Library',
        address: '300 Nicollet Mall',
        type: 'library',
        weekdayHours: '9:00 AM - 8:00 PM',
        weekendHours: '12:00 PM - 5:00 PM',
        status: 'good-weekend',
        description: 'Public library with weekend hours',
        connections: ['government-center', 'nicollet-mall'],
        amenities: ['library', 'wifi', 'restrooms'],
        reliability: 'high'
    },
    {
        id: '100-washington-square',
        name: '100 Washington Square',
        address: '100 Washington Ave S',
        type: 'office',
        weekdayHours: '6:00 AM - 6:00 PM',
        weekendHours: '8:00 AM - 6:00 PM',
        status: 'excellent-weekend',
        description: 'Rare weekend access for office building',
        connections: ['111-washington-square', 'mill-district'],
        amenities: ['offices', 'parking'],
        reliability: 'high'
    },
    {
        id: '111-washington-square',
        name: '111 Washington Square',
        address: '111 Washington Ave S',
        type: 'office',
        weekdayHours: '6:00 AM - 6:00 PM',
        weekendHours: 'Closed',
        status: 'weekday-only',
        description: 'Standard office building hours',
        connections: ['100-washington-square', 'mill-district'],
        amenities: ['offices'],
        reliability: 'medium'
    }
];

// Route data for common paths
const routeData = [
    {
        id: 'ids-to-target-center',
        name: 'IDS Center to Target Center',
        from: 'ids-center',
        to: 'target-center',
        segments: ['ids-center', 'city-center', 'marriott-city-center', 'target-center'],
        estimatedTime: '8-12 minutes',
        difficulty: 'easy',
        weekendViability: 'limited',
        notes: 'Check Target Center event schedule for weekend access'
    },
    {
        id: 'government-to-ids',
        name: 'Government Center to IDS Center',
        from: 'government-center',
        to: 'ids-center',
        segments: ['government-center', 'central-library', 'city-center', 'ids-center'],
        estimatedTime: '6-10 minutes',
        difficulty: 'easy',
        weekendViability: 'good',
        notes: 'Library provides good weekend connection'
    },
    {
        id: 'convention-center-loop',
        name: 'Convention Center Area',
        from: 'convention-center',
        to: 'ids-center',
        segments: ['convention-center', 'hilton-minneapolis', 'city-center', 'ids-center'],
        estimatedTime: '10-15 minutes',
        difficulty: 'moderate',
        weekendViability: 'event-dependent',
        notes: 'Varies greatly based on convention center events'
    }
];

// Status calculation functions
function getCurrentStatus(building) {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay(); // 0 = Sunday, 6 = Saturday
    const isWeekend = day === 0 || day === 6;
    
    if (building.type === 'hotel') {
        return 'likely-open';
    }
    
    if (isWeekend) {
        if (building.status === 'excellent-weekend' || building.status === 'good-weekend') {
            return hour >= 8 && hour <= 18 ? 'likely-open' : 'likely-closed';
        }
        return 'likely-closed';
    }
    
    // Weekday logic
    if (hour >= 6 && hour <= 18) {
        return 'likely-open';
    } else if (hour >= 19 && hour <= 22 && building.type === 'hotel') {
        return 'likely-open';
    }
    
    return 'likely-closed';
}

function getStatusColor(status) {
    switch (status) {
        case 'likely-open': return '#4caf50';
        case 'likely-closed': return '#f44336';
        case 'unknown': return '#ff9800';
        default: return '#9e9e9e';
    }
}

function getStatusIcon(status) {
    switch (status) {
        case 'likely-open': return '🟢';
        case 'likely-closed': return '🔴';
        case 'unknown': return '🟡';
        default: return '⚪';
    }
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { buildingData, routeData, getCurrentStatus, getStatusColor, getStatusIcon };
}