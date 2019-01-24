import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Polyline
} from "react-google-maps";

 export const MapContainer = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCPsCvF1R-NWhmVWyRNTR7UXsCJiC8VqT8&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props =>
(
  <GoogleMap defaultZoom={11} defaultCenter={{  lat: Number(Number.parseFloat(props.fromLocation[0]).toFixed(6)), lng: Number(Number.parseFloat(props.fromLocation[1]).toFixed(6))}}>
    <Polyline path={[{ lat: Number(Number.parseFloat(props.fromLocation[0]).toFixed(6)), lng: Number(Number.parseFloat(props.fromLocation[1]).toFixed(6)) }, {  lat: Number(Number.parseFloat(props.toLocation[0]).toFixed(6)), lng: Number(Number.parseFloat(props.toLocation[1]).toFixed(6)) }]}
    strokeColor="#1E1E1E"
    strokeOpacity={0.8}
    strokeWeight={5}
    />
  </GoogleMap>
));