import React, { useEffect, useState } from "react";
//import axios from "axios";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import countries from "./../data/countries.json";

function MyMap() {
  const [place, setPlace] = useState("");
  const [message, setMessage] = useState(""); // State to store the message

  const getMessage = async (clickedCountryName) => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        placeChosen:  clickedCountryName , // Use the clickedCountryName
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch("http://localhost:5000/generate", options);
      const data = await response.json();
      setMessage(data.choices[0].message.content); // Update the message state
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    //console.log(place);
    // Call getMessage() when place changes, with a callback
    if (place) {
      console.log(place)
      getMessage(place);
    }
  }, [place]);

  const countryStyle = {
    fillColor: "pink",
    fillOpacity: 0.3,
    color: "black",
    weight: 0.7,
  };

  const onEachCountry = (country, layer) => {
    const countryName = country.properties.ADMIN;
    layer.bindPopup(countryName);
    layer.on("mouseover", function (e) {
      this.openPopup(e.latlng);
      e.target.setStyle({
        fillColor: "yellow",
        fillOpacity: 1,
        color: "black",
        weight: 2,
      });
    });
    layer.on("mouseout", function (e) {
      this.closePopup();
      e.target.setStyle({
        fillColor: "pink",
        fillOpacity: 0.3,
        color: "black",
        weight: 0.7,
      });
    });
    layer.on("click", function (e) {
      const clickedCountryName = country.properties.ADMIN;
      //console.log("Clicked country:", clickedCountryName);
      setPlace(clickedCountryName);
    });
  };

  return (
    <div>
      <MapContainer
        style={{ height: "90vh" }}
        zoom={1.5}
        center={[39.9334, 32.8597]}
        scrollWheelZoom={false}
      >
        <GeoJSON
          data={countries.features}
          style={countryStyle}
          onEachFeature={onEachCountry}
        />
      </MapContainer>
      {message && <p>{message}</p>}
    </div>
  );
}

export default MyMap;
