import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import styles from "./modules/MapComponent.module.css";

const MapComponent = () => {
  const mapContainerRef = useRef(null);
  const directionsContainerRef = useRef(null);
  const mapRef = useRef(null);
  const directionsRef = useRef(null);
  const [userLocation, setUserLocation] = useState(null);
  const [geocoderRef, setGeocoderRef] = useState(null);
  const [hospitalName, setHospitalName] = useState(null);
  const [showMap, setShowMap] = useState(true); // State to control map visibility, initialized to true

  useEffect(() => {
    if (showMap) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-79.4512, 43.6568],
        zoom: 13,
      });

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude, latitude } = position.coords;
          setUserLocation([longitude, latitude]);
          mapRef.current.setCenter([longitude, latitude]);
        },
        (error) => {
          console.error("Error getting geolocation: ", error);
        }
      );

      return () => mapRef.current.remove();
    }
  }, [showMap]);

  useEffect(() => {
    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: "metric",
      profile: "mapbox/driving",
      controls: { inputs: false },
    });

    if (directionsContainerRef.current) {
      directionsContainerRef.current.appendChild(
        directions.onAdd(mapRef.current)
      );
    }
    directionsRef.current = directions;

    if (userLocation) {
      directions.setOrigin(userLocation);
    }

    return () => {
      if (directionsContainerRef.current) {
        directionsContainerRef.current.innerHTML = "";
      }
    };
  }, [userLocation]);

  useEffect(() => {
    if (userLocation) {
      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        placeholder: "Search for a hospital",
        proximity: { longitude: userLocation[0], latitude: userLocation[1] },
      });
      if (mapRef.current) {
        mapRef.current.addControl(geocoder);
      }
      setGeocoderRef(geocoder);

      geocoder.on("result", (event) => {
        const { result } = event;
        setHospitalName(result.place_name);
        directionsRef.current.setDestination(result.geometry.coordinates);
      });

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
      <div className={styles.container}>
        <h2>Click the button for directions</h2>
        <button
          className={styles.button}
          type="button"
          onClick={triggerGeocoder}
        >
          Find Nearest Hospital
        </button>

        {hospitalName && (
          <p className={styles.hospitalName}>
            <strong>Nearest Hospital:</strong> {hospitalName}
          </p>
        )}
        <div
          ref={directionsContainerRef}
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        />
        {showMap && (
          <div
            ref={mapContainerRef}
            style={{ width: "50%", height: "200px", visibility: "hidden" }}
          />
        )}
      </div>
    </>
  );
};

export default MapComponent;
