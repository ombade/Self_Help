import React from "react";
import Map from './map';

const Skills = () => {
  return (
    <div id="Skills" style={{height:"800px"}}>
      <h1 style={{fontSize:"50px",padding:"20%"}}>
       
      </h1>
      <Map/>
    </div>
  );
};

export default Skills;

// import React, { useState, useEffect } from 'react';

// const MapComponent = () => {
//     const [mapg, setMapg] = useState(null);
//     const [marker, setMarker] = useState(null);
//     const [entry, setEntry] = useState({});
//     const [locationObj, setLocationObj] = useState({});

//     useEffect(() => {
//         initializeMap();
//     }, []);

//     const initializeMap = () => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition((position) => {
//                 const initialLocation = new window.google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//                 const options = {
//                     center: initialLocation,
//                     zoom: 10,
//                     mapTypeControl: true,
//                     navigationControlOptions: {
//                         style: window.google.maps.NavigationControlStyle.SMALL,
//                     },
//                 };
//                 const map = new window.google.maps.Map(document.getElementById("mapdemo"), options);
//                 const newMarker = new window.google.maps.Marker({
//                     position: initialLocation,
//                     map: map,
//                     title: "Location",
//                     draggable: true,
//                 });
//                 setMapg(map);
//                 setMarker(newMarker);

//                 window.google.maps.event.addListener(map, "click", (event) => {
//                     const clickedLocation = event.latLng;
//                     updateCoordinates(clickedLocation.lat(), clickedLocation.lng());
//                 });
//             }, () => {
//                 handleLocationError(true, window.infoWindow, mapg.getCenter());
//             });
//         } else {
//             handleLocationError(false, window.infoWindow, mapg.getCenter());
//         }
//     };

//     const updateCoordinates = (lat, lng) => {
//         const newEntry = {
//             latitude: lat,
//             longitude: lng,
//         };
//         setEntry(newEntry);
//         console.log(newEntry);
//     };

//     const submitData = () => {
//         const xhr = new XMLHttpRequest();
//         entry.message = document.getElementById("messageInput").value;
//         entry.radius = document.getElementById("range").value;
//         const url = 'https://salmon-painter-hkkrg.pwskills.app:5000/alertdata';
//         console.log(entry);
//         xhr.open('POST', url, true);
//         xhr.setRequestHeader('Content-Type', 'application/json');
//         xhr.send(JSON.stringify(entry));
//     };

//     const getLocation = () => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition((position) => {
//                 const latt = position.coords.latitude;
//                 const long = position.coords.longitude;
//                 const lattlong = new window.google.maps.LatLng(latt, long);
//                 const message = document.getElementById('messageInput').value;
//                 updateCoordinates(latt, long, message);
//                 mapg.setCenter(lattlong);
//                 marker.setPosition(lattlong);
//             }, () => {
//                 handleLocationError(true, window.infoWindow, mapg.getCenter());
//             });
//         } else {
//             handleLocationError(false, window.infoWindow, mapg.getCenter());
//         }
//     };

//     const handleLocationError = (browserHasGeolocation, infoWindow, pos) => {
//         console.log(browserHasGeolocation
//             ? 'Error: The Geolocation service failed.'
//             : 'Error: Your browser doesn\'t support geolocation.');
//     };

//     const showLoc = (pos) => {
//         const newLocationObj = {
//             latitude: pos.coords.latitude,
//             longitude: pos.coords.longitude,
//         };
//         setLocationObj(newLocationObj);
//         console.log(newLocationObj);
//     };

//     setInterval(() => {
//         getLocation();
//         console.log(locationObj);
//         const xhr = new XMLHttpRequest();
//         const url = 'https://salmon-painter-hkkrg.pwskills.app:5000/currdata';
//         xhr.open('POST', url, true);
//         xhr.setRequestHeader('Content-Type', 'application/json');
//         xhr.send(JSON.stringify(locationObj));
//     }, 15000);

//     const updateTextInput = (val) => {
//         document.getElementById('vol-value').textContent = val;
//     };

//     return (
//         <div>
//             <h1 className="h1">Choose Location</h1>
//             <div className="container">
//                 <div id="map-container">
//                     <div id="mapdemo" style={{ width: "100%", height: "100%" }}></div>
//                     <p>Click on the map to capture coordinates</p>
//                 </div>
//                 <div id="message-container">
//                     <h1>Hello</h1>
//                     <p>Enter your message:</p>
//                     <input type="text" id="messageInput" className="form-control" placeholder="Enter your message" />
//                     <br />
//                     <p>Enter The range in km :</p>
//                     <input type="number" id="range" className="form-control" placeholder="range" min="0.5" max="5" onInput={(e) => updateTextInput(e.target.value)} />
//                     <p>Value: <span id="vol-value">0</span></p>
//                     <br />
//                     <button className="btn btn-success" onClick={submitData}>Submit</button>
//                     <button className="btn btn-primary" onClick={getLocation}>Current Location</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const MapComponent = () => {
//   const [map, setMap] = useState(null);
//   const [marker, setMarker] = useState(null);
//   const [capturedCoordinates, setCapturedCoordinates] = useState(null);

//   const updateCoordinates = (lat, lng) => {
//     const coordinates = { latitude: lat, longitude: lng };
//     setCapturedCoordinates(coordinates);
//     if (marker) {
//       marker.setPosition(new window.google.maps.LatLng(lat, lng));
//     }
//   };

//   const showLoc = (pos) => {
//     const latt = pos.coords.latitude;
//     const long = pos.coords.longitude;
//     const lattlong = new window.google.maps.LatLng(latt, long);
//     updateCoordinates(latt, long);
//     if (map) {
//       map.setCenter(lattlong);
//       if (marker) {
//         marker.setPosition(lattlong);
//       }
//     }
//   };

//   const errHand = (err) => {
//     switch (err.code) {
//       case err.PERMISSION_DENIED:
//         alert("The application doesn't have permission to use location services.");
//         break;
//       case err.POSITION_UNAVAILABLE:
//         alert("The location of the device is uncertain.");
//         break;
//       case err.TIMEOUT:
//         alert("The request to get user location timed out.");
//         break;
//       case err.UNKNOWN_ERROR:
//         alert(
//           "Time to fetch location information exceeded the maximum timeout interval."
//         );
//         break;
//       default:
//         break;
//     }
//   };

//   useEffect(() => {
//     const initializeMap = () => {
//       const lattlong = new window.google.maps.LatLng(0, 0);
//       const options = {
//         center: lattlong,
//         zoom: 10,
//         mapTypeControl: true,
//         navigationControlOptions: {
//           style: window.google.maps.NavigationControlStyle.SMALL,
//         },
//       };
//       const mapInstance = new window.google.maps.Map(
//         document.getElementById("demo2"),
//         options
//       );
//       const markerInstance = new window.google.maps.Marker({
//         position: lattlong,
//         map: mapInstance,
//         title: "Location",
//         draggable: true,
//       });
//       setMap(mapInstance);
//       setMarker(markerInstance);

//       window.google.maps.event.addListener(mapInstance, "click", function (event) {
//         const clickedLocation = event.latLng;
//         updateCoordinates(clickedLocation.lat(), clickedLocation.lng());
//       });
//     };

//     initializeMap();
//   }, []);

//   const handleGetLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showLoc, errHand);
//     }
//   };

//   return (
//     <div>
//       <div className="h1">Choose Location</div>
//       <h1>Hello</h1>
//       <p>Display and Capture Location on Map</p>

//       <button className="main" type="button" onClick={handleGetLocation}>
//         Current Position
//       </button>
//       <div id="demo2" style={{ width: '500px', height: '500px' }}></div>
//       <p>Click on the map to capture coordinates:</p>
//       <div id="capturedCoordinates">
//         {capturedCoordinates && (
//           <div>
//             Clicked Coordinates: Latitude {capturedCoordinates.latitude}, Longitude{' '}
//             {capturedCoordinates.longitude}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MapComponent;


// // export default MapComponent;
// import React, { useState, useEffect } from 'react';

// const MapComponent = () => {
//   const [mapg, setMapg] = useState(null);
//   const [marker, setMarker] = useState(null);
//   const [entry, setEntry] = useState({});
//   const [locationObj, setLocationObj] = useState({});
//     const [capturedCoordinates, setCapturedCoordinates] = useState(null);

//   useEffect(() => {
//     initializeMap();
//   }, []);

//   const initializeMap = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         const initialLocation = new window.google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//         const options = {
//           center: initialLocation,
//           zoom: 10,
//           mapTypeControl: true,
//           navigationControlOptions: {
//             style: window.google.maps.NavigationControlStyle.SMALL,
//           },
//         };
//         const map = new window.google.maps.Map(document.getElementById("demo2"), options);
//         const newMarker = new window.google.maps.Marker({
//           position: initialLocation,
//           map: map,
//           title: "Location",
//           draggable: true,
//         });
//         setMapg(map);
//         setMarker(newMarker);

//         window.google.maps.event.addListener(map, "click", (event) => {
//           const clickedLocation = event.latLng;
//           updateCoordinates(clickedLocation.lat(), clickedLocation.lng());
//         });
//       }, () => {
//         handleLocationError(true, window.infoWindow, mapg.getCenter());
//       });
//     } else {
//       handleLocationError(false, window.infoWindow, mapg.getCenter());
//     }
//   };

//   const updateCoordinates = (lat, lng) => {
//     const newEntry = {
//       latitude: lat,
//       longitude: lng,
//     };
//     setEntry(newEntry);
//     console.log(newEntry);
//   };

//   const submitData = () => {
//     const xhr = new XMLHttpRequest();
//     entry.message = document.getElementById("messageInput").value;
//     entry.radius = document.getElementById("range").value;
//     const url = 'https://salmon-painter-hkkrg.pwskills.app:5000/alertdata';
//     console.log(entry);
//     xhr.open('POST', url, true);
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.send(JSON.stringify(entry));
//   };

//   const getLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         const latt = position.coords.latitude;
//         const long = position.coords.longitude;
//         const lattlong = new window.google.maps.LatLng(latt, long);
//         const message = document.getElementById('messageInput').value;
//         updateCoordinates(latt, long, message);
//         mapg.setCenter(lattlong);
//         marker.setPosition(lattlong);
//       }, () => {
//         handleLocationError(true, window.infoWindow, mapg.getCenter());
//       });
//     } else {
//       handleLocationError(false, window.infoWindow, mapg.getCenter());
//     }
//   };

//   const handleLocationError = (browserHasGeolocation, infoWindow, pos) => {
//     console.log(browserHasGeolocation
//       ? 'Error: The Geolocation service failed.'
//       : 'Error: Your browser doesn\'t support geolocation.');
//   };

//   const showLoc = (pos) => {
//     const newLocationObj = {
//       latitude: pos.coords.latitude,
//       longitude: pos.coords.longitude,
//     };
//     setLocationObj(newLocationObj);
//     console.log(newLocationObj);
//   };

//   setInterval(() => {
//     getLocation();
//     console.log(locationObj);
//     const xhr = new XMLHttpRequest();
//     const url = 'https://salmon-painter-hkkrg.pwskills.app:5000/currdata';
//     xhr.open('POST', url, true);
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.send(JSON.stringify(locationObj));
//   }, 15000);

//   const updateTextInput = (val) => {
//     document.getElementById('vol-value').textContent = val;
//   };

//   return (
//     <div>
//       <h1 className="h1">Choose Location</h1>
//       <div className="container">
//         <div id="map-container">
//           <div id="demo2" style={{ width: "100%", height: "100%" }}></div>
//           <p>Click on the map to capture coordinates</p>
//         </div>
//         <div id="message-container">
//           <h1>Hello</h1>
//           <p>Enter your message:</p>
//           <input type="text" id="messageInput" className="form-control" placeholder="Enter your message" />
//           <br />
//           <p>Enter The range in km :</p>
//           <input type="number" id="range" className="form-control" placeholder="range" min="0.5" max="5" onInput={(e) => updateTextInput(e.target.value)} />
//           <p>Value: <span id="vol-value">0</span></p>
//           <br />
//           <button className="btn btn-success" onClick={submitData}>Submit</button>
//           <button className="btn btn-primary" onClick={getLocation}>Current Location</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MapComponent;
