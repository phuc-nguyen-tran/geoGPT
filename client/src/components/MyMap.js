import React, { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import countries from "./../data/countries.json";
import { Icon } from "leaflet";

function MyMap() {
  const [placeChosen, setPlaceChosen] = useState("")
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
      })
    });
    layer.on("mouseout", function (e) {
      this.closePopup();
      e.target.setStyle({
        fillColor: "pink",
        fillOpacity: 0.3,
        color: "black",
        weight: 0.7
      })
    });
    layer.on("click", async function(e){
      setPlaceChosen(countryName);
    })
  };
 
  return (
    <div>
      <MapContainer
        style={{ height: "100vh" }}
        zoom={1.5}
        center={[39.9334,32.8597]}
        scrollWheelZoom={false}
      >
        <GeoJSON
          data={countries.features}
          style={countryStyle}
          onEachFeature={onEachCountry}
        />
      </MapContainer>
    </div>
  );
}

export default MyMap;
