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
  const [geocoderRef, setGeocoderRef] = useState(null);
  const [hospitalName, setHospitalName] = useState(null);

  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-79.4512, 43.6568],
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

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { longitude, latitude } = position.coords;
        setUserLocation([longitude, latitude]);
        mapRef.current.setCenter([longitude, latitude]);
        directions.setOrigin([longitude, latitude]);
      },
      (error) => {
        console.error("Error getting geolocation: ", error);
      }
    );

    return () => mapRef.current.remove();
  }, []);

  useEffect(() => {
    if (userLocation) {
      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        placeholder: "Search for a hospital",
        proximity: { longitude: userLocation[0], latitude: userLocation[1] },
      });
      mapRef.current.addControl(geocoder);
      setGeocoderRef(geocoder);

      geocoder.on("result", (event) => {
        const { result } = event;
        setHospitalName(result.place_name);
        directionsRef.current.setDestination(result.geometry.coordinates);
      });

      // Hide the input box but keep the dropdown functionality
      const inputElement = document.querySelector(
        ".mapboxgl-ctrl-geocoder--input"
      );
      if (inputElement) {
        inputElement.style.display = "none";
      }
    }
  }, [userLocation]);

  const triggerGeocoder = () => {
    if (geocoderRef) {
      geocoderRef.query("hospital");
    }
  };

  return (
    <>
      <button type="button" onClick={triggerGeocoder}>
        Find Nearest Hospital
      </button>
      <h1>Find the Nearest Hospital</h1>
      <p>Click the button to find the nearest hospital and see directions</p>
      {hospitalName && (
        <p>
          <strong>Nearest Hospital:</strong> {hospitalName}
        </p>
      )}
      <div ref={mapContainerRef} style={{ width: "100%", height: "600px" }} />
    </>
  );
};

export default MapComponent;
