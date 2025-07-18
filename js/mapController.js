// Map Controller for Minneapolis Skyway System
class MapController {
    constructor(buildingData) {
        this.buildings = buildingData;
        this.map = null;
        this.markers = new Map();
        this.connections = new Map();
        this.isMapInitialized = false;
    }

    // Initialize the map
    async initializeMap(containerId = 'map') {
        try {
            // Create map container if it doesn't exist
            let mapContainer = document.getElementById(containerId);
            if (!mapContainer) {
                mapContainer = document.createElement('div');
                mapContainer.id = containerId;
                mapContainer.style.height = '400px';
                mapContainer.style.width = '100%';
                mapContainer.style.borderRadius = '12px';
                mapContainer.style.overflow = 'hidden';
            }

            // Initialize Leaflet map centered on downtown Minneapolis
            this.map = L.map(containerId).setView([44.9778, -93.2703], 16);

            // Add OpenStreetMap tiles
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors',
                maxZoom: 19
            }).addTo(this.map);

            // Add building markers
            this.addBuildingMarkers();
            
            // Add skyway connections
            this.addSkywayConnections();

            this.isMapInitialized = true;
            return true;
        } catch (error) {
            console.error('Failed to initialize map:', error);
            return false;
        }
    }

    // Add markers for all buildings
    addBuildingMarkers() {
        this.buildings.forEach(building => {
            if (building.coordinates) {
                const marker = this.createBuildingMarker(building);
                this.markers.set(building.id, marker);
            }
        });
    }

    // Create a marker for a specific building
    createBuildingMarker(building) {
        const statusInfo = this.getBuildingStatusInfo(building);
        
        // Create custom icon based on building type and status
        const iconHtml = this.createMarkerIcon(building, statusInfo);
        
        const customIcon = L.divIcon({
            html: iconHtml,
            className: 'custom-marker',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });

        const marker = L.marker([building.coordinates.lat, building.coordinates.lng], {
            icon: customIcon
        }).addTo(this.map);

        // Create popup content
        const popupContent = this.createPopupContent(building, statusInfo);
        marker.bindPopup(popupContent, {
            maxWidth: 300,
            className: 'building-popup'
        });

        return marker;
    }

    createMarkerIcon(building, statusInfo) {
        const typeIcons = {
            'office': '🏢',
            'shopping': '🛍️',
            'retail': '🛍️',
            'hotel': '🏨',
            'government': '🏛️',
            'arena': '🏀',
            'convention': '🏢',
            'library': '📚'
        };

        const icon = typeIcons[building.type] || '🏢';
        const statusColor = statusInfo.color;

        return `
            <div class="marker-icon" style="
                background-color: ${statusColor};
                border: 2px solid white;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            ">
                ${icon}
            </div>
        `;
    }

    createPopupContent(building, statusInfo) {
        return `
            <div class="map-popup">
                <h4>${building.name}</h4>
                <p class="popup-address">${building.address}</p>
                <div class="popup-status" style="color: ${statusInfo.color}">
                    ${statusInfo.icon} ${statusInfo.text}
                </div>
                <div class="popup-hours">
                    <strong>Hours:</strong><br>
                    Weekdays: ${building.weekdayHours}<br>
                    Weekends: ${building.weekendHours}
                </div>
                <div class="popup-actions">
                    <button onclick="showBuildingDetails('${building.id}')" class="popup-btn">
                        View Details
                    </button>
                </div>
            </div>
        `;
    }

    // Add skyway connections as lines on the map
    addSkywayConnections() {
        const processedConnections = new Set();

        this.buildings.forEach(building => {
            if (building.connections && building.coordinates) {
                building.connections.forEach(connectionId => {
                    const connectionKey = [building.id, connectionId].sort().join('-');
                    
                    if (!processedConnections.has(connectionKey)) {
                        const connectedBuilding = this.buildings.find(b => b.id === connectionId);
                        
                        if (connectedBuilding && connectedBuilding.coordinates) {
                            this.drawConnection(building, connectedBuilding);
                            processedConnections.add(connectionKey);
                        }
                    }
                });
            }
        });
    }

    drawConnection(building1, building2) {
        const latlngs = [
            [building1.coordinates.lat, building1.coordinates.lng],
            [building2.coordinates.lat, building2.coordinates.lng]
        ];

        const connection = L.polyline(latlngs, {
            color: '#667eea',
            weight: 3,
            opacity: 0.7,
            dashArray: '5, 5'
        }).addTo(this.map);

        // Add connection info popup
        const midpoint = [
            (building1.coordinates.lat + building2.coordinates.lat) / 2,
            (building1.coordinates.lng + building2.coordinates.lng) / 2
        ];

        connection.bindPopup(`
            <div class="connection-popup">
                <strong>Skyway Connection</strong><br>
                ${building1.name} ↔ ${building2.name}
            </div>
        `);

        const connectionKey = [building1.id, building2.id].sort().join('-');
        this.connections.set(connectionKey, connection);
    }

    // Highlight a specific building on the map
    highlightBuilding(buildingId) {
        const marker = this.markers.get(buildingId);
        if (marker) {
            // Center map on building
            const building = this.buildings.find(b => b.id === buildingId);
            if (building && building.coordinates) {
                this.map.setView([building.coordinates.lat, building.coordinates.lng], 17);
                
                // Open popup
                marker.openPopup();
                
                // Add temporary highlight effect
                const highlightCircle = L.circle([building.coordinates.lat, building.coordinates.lng], {
                    color: '#ff6b6b',
                    fillColor: '#ff6b6b',
                    fillOpacity: 0.2,
                    radius: 50
                }).addTo(this.map);

                // Remove highlight after 3 seconds
                setTimeout(() => {
                    this.map.removeLayer(highlightCircle);
                }, 3000);
            }
        }
    }

    // Filter markers based on criteria
    filterMarkers(filterFn) {
        this.markers.forEach((marker, buildingId) => {
            const building = this.buildings.find(b => b.id === buildingId);
            if (building) {
                if (filterFn(building)) {
                    marker.addTo(this.map);
                } else {
                    this.map.removeLayer(marker);
                }
            }
        });
    }

    // Show only weekend-friendly buildings
    showWeekendFriendly() {
        this.filterMarkers(building => 
            ['excellent-weekend', 'good-weekend'].includes(building.status)
        );
    }

    // Show all buildings
    showAllBuildings() {
        this.markers.forEach(marker => {
            marker.addTo(this.map);
        });
    }

    // Get building status info (reuse from buildingData.js)
    getBuildingStatusInfo(building) {
        const status = getCurrentStatus(building);
        return {
            status: status,
            icon: getStatusIcon(status),
            color: getStatusColor(status)
        };
    }

    // Resize map (useful when container size changes)
    resizeMap() {
        if (this.map) {
            setTimeout(() => {
                this.map.invalidateSize();
            }, 100);
        }
    }
}