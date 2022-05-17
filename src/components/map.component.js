import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

const GoogleMaps = () => {
  const mapStyles = {
    height: "25vh",
    width: "100%"
  };

  const defaultCenter = {
    lat: 32.775729, lng: -117.19389
  }

  const locations = [
    {
      name: "Downtown",
      location: {
        lat: 32.715736,
        lng: -117.161087
      }
    },
    {
      name: "Coronado",
      location: {
        lat: 32.68589,
        lng: -117.18309
      }
    },
    {
      name: "Ocean Beach & Point Loma",
      location: {
        lat: 32.732419,
        lng: -117.242144
      }
    },
    {
      name: "Balboa Park & Hillcrest",
      location: {
        lat: 32.739105,
        lng: -117.154543
      }
    },
    {
      name: "Old Town",
      location: {
        lat: 32.754762,
        lng: -117.196437
      }
    },
    {
      name: "Mission Beach & Pacific Beach",
      location: {
        lat: 32.791928,
        lng: -117.254179
      }
    },
    {
      name: "La Jolla & Torrey Pines",
      location: {
        lat: 32.84973,
        lng: -117.252325
      }
    },
    {
      name: "Kearney Mesa & Miramar",
      location: {
        lat: 32.840583,
        lng: -117.140625
      }
    }
  ];

  const [ selected, setSelected ] = useState({});
  const onSelect = item => {
    setSelected(item);
  }

  return (
    <LoadScript
      googleMapsApiKey=''>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={10}
        center={defaultCenter}>
          {
            locations.map(item => {
              return (
                <Marker key={item.name}
                position={item.location}
                onClick={() => onSelect(item)}/> 
              )
            })
          }
          {
            selected.location &&
            (
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
              >
                <p>{selected.name}</p>
              </InfoWindow>
            )
          }
        </GoogleMap>
    </LoadScript>
  )
}

export default GoogleMaps;