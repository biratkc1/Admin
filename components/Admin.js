import React, { useRef, useEffect, useState } from "react";
import AdminStyle from "./styles/AdminStyle";
//intialize map and add data layer
import { addDataLayer } from "./map/addDataLayer";
import { initializeMap } from "./map/initializeMap";
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
//fetch sample api data
import useSWR from "swr";
import { fetcher } from "../library/fetcher";
// View vehicles and pass map props so "locate" button flys-to the vehicle
import VehicleList from "./VehicleList";

function Admin(props) {
  const [pageIsMounted, setPageIsMounted] = useState(false);
  const [Map, setMap] = useState();

  const { data, error } = useSWR("/api/vehicleLocation", fetcher);

  if (error) {
    console.error(error);
  }

  mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

  useEffect(() => {
    setPageIsMounted(true);

    let map = new mapboxgl.Map({
      container: "my-map",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [-84.38633, 33.753746],
      zoom: 12.5,
      pitch: 45,
    });

    initializeMap(mapboxgl, map);
    setMap(map);
  }, []);

  useEffect(() => {
    if (pageIsMounted && data) {
      Map.on("load", function () {
        addDataLayer(Map, data);
      });
    }
  }, [pageIsMounted, setMap, data, Map]);

  return (
    <AdminStyle>
      <div className="vehicles-container">
        <VehicleList map={Map} />
      </div>
      <div className="map-container">
        <div className="map" id="my-map" />
      </div>
    </AdminStyle>
  );
}

export default Admin;
