import React from 'react';
import { RMap, RMarker } from 'maplibre-react-components';
import 'maplibre-gl/dist/maplibre-gl.css'; // Don't forget the CSS!

export default function App() {


    // This handler triggers whenever style data changes (e.g., when the style first loads)

    const handleStyleData = (e) => {

        const map = e.target; // Extract the core mapLibre instance

        const layers = map.getStyle().layers;

        layers.forEach((layer) => {

            // Isolate label layers with a text-field layout property

            if (layer.type === 'symbol' && layer.layout && layer.layout['text-field']) {

                map.setLayoutProperty(layer.id, 'text-field', [

                    'coalesce',

                    ['get', 'name:en'], // Force English names

                    ['get', 'name']     // Fallback to local name if English isn't available

                ]);

            }

        });

    };




    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <RMap
                mapStyle="https://tiles.stadiamaps.com/styles/outdoors.json"
                // Initial viewport; NOTE: coordinates are in longitude, latitude order,
                // NOT latitude, longitude as is commonly written!
                initialCenter={[24.750592, 59.44435]}
                initialZoom={15}
                onStyleData={handleStyleData}
            >
                <RMarker longitude={24.750592} latitude={59.44435} />
            </RMap>
        </div>
    );
}