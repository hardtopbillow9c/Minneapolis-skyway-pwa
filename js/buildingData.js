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

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { buildingData, getCurrentStatus };
}