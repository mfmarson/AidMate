import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWZtYXJzb24iLCJhIjoiY2x5cDFmM3plMGduZTJtbjZpb2V4M3YzeSJ9.SO2X7mVFKUcjkGBYodWGVA";

const MapComponent = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const directionsRef = useRef(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-79.4512, 43.6568], // Default center
      zoom: 13,
    });

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: "metric",
      profile: "mapbox/driving",
      controls: { inputs: false },
    });
    mapRef.current.addControl(directions, "top-left");
    directionsRef.current = directions;

    // Get the user's current position using the Geolocation API
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { longitude, latitude } = position.coords;
        setUserLocation([longitude, latitude]);
        mapRef.current.setCenter([longitude, latitude]);
        directions.setOrigin([longitude, latitude]); // Automatically set the user's location as the starting point
      },
      (error) => {
        console.error("Error getting geolocation: ", error);
      }
    );

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      placeholder: "Search for a hospital",
      proximity: userLocation
        ? { longitude: userLocation[0], latitude: userLocation[1] }
        : undefined,
    });
    mapRef.current.addControl(geocoder);

    geocoder.on("result", (event) => {
      const { result } = event;
      directions.setDestination(result.geometry.coordinates);
    });

    return () => mapRef.current.remove();
  }, [userLocation]);

  return (
    <div>
      <h1>Find Nearest Hospital and Get Directions</h1>{" "}
      <div ref={mapContainerRef} style={{ width: "100%", height: "600px" }} />{" "}
    </div>
  );
};

export default MapComponent;
