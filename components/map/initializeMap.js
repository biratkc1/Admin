import ReactDOM from 'react-dom'
import { useState } from 'react';
import InfoModalStyle from "../styles/InfoModalStyle";


export function initializeMap(mapboxgl, map) {
    map.on("click", "data", function (e) {
      var features = map.queryRenderedFeatures(e.point, {
        layers: ["data"],
      });
      var clusterId = features[0].properties.vehicle_location;
      map
        .getSource("vehicle_list")
        .getClusterExpansionZoom(clusterId, function (err, zoom) {
          if (err) return;
          map.easeTo({
            center: features[0].geometry.coordinates,
            zoom: zoom,
          });
        });
    });
    

    map.on("click", "vehicle-location", function (e) {
      var coordinates = e.features[0].geometry.coordinates.slice();
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(e.features[0].properties.generatedDescription)
        .addTo(map);
    });
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );
  
    map.on("mouseenter", "vehicle-location", function () {
      map.getCanvas().style.cursor = "pointer";
    });
    map.on("mouseleave", "vehicle-location", function () {
      map.getCanvas().style.cursor = "";
    });
}