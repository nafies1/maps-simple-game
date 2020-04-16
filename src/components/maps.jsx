/** @format */

import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <h1>{text}</h1>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.054545,
      lng: 12.420329,
    },
    zoom: 6,
  };

  checkMap(event) {
    // console.log(event);
  }

  createMapOptions() {
    return {
      featureType: "all",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "off",
        },
      ],
    };
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "80vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          distanceToMouse={this.checkMap}
          options={this.createMapOptions()}
          onClick={this.props.addMaps}>
          <AnyReactComponent lat={59.955413} lng={30.337844} text='My Marker' />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
