export function addDataLayer(map, data) {
  
  map.addSource("vehicle_list", {
    type: "geojson",
    data: data,
  });

  map.addLayer({
    id: "vehicle-location",
    type: "circle",
    source: "vehicle_list",
    paint: {
      "circle-radius": ["step", ["get", "event_count"], 20, 100, 30, 750, 40],
      "circle-color": "white",
      "circle-opacity": 0.75,
      "circle-stroke-width": 8,
      "circle-stroke-color": "#fff",
      "circle-stroke-opacity": 0.5,
    },
  });
}