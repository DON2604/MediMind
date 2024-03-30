import React , {useState} from 'react';
import 'leaflet/dist/leaflet.css'; 
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';



const Maps = () => {

  
  //const center = [22.54707592819581, 88.35626242788365];
  // const center = [22.571551917289916, 88.36588697476917];
  const center = [22.612202766952453, 88.42651639443852];
  const pos2 = [22.57658995195515, 88.47293232064091];
  const pos3 = [22.6114122756026, 88.42400032848278];
  const pos4 = [22.62307356908728, 88.41405206039423];
  
  

  return (
    <div >
      <div id="map" className=' mt-4 h-[520px] w-[1300px] m-10 p-4'>
      <MapContainer center={center} zoom={13} style={{ width: '100%', height: '100%' }} className=' w-[1500px]'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>
           Dr. Shiboprasad Sen <br /> R.G.Kar Medical Hospital 
          </Popup>
        </Marker>
        <Marker position={pos2}>
          <Popup>
           Dr. Rajnath Sen <br /> Skin Speacilist, Apollo Hospital
          </Popup>
        </Marker>
        <Marker position={pos3}>
          <Popup>
           Dr. Kany Dane <br /> Reva Hospital 
          </Popup>
        </Marker>
        <Marker position={pos4}>
          <Popup >
           Dr. John Doe <br /> Appollo Hospital
          </Popup>
        </Marker>
      </MapContainer>

        

    </div>
    </div>
    


    // <MapContainer>

    //   center = {center}
    //   zoom = {10}
    //   style=({width= '100vh' , height= '100vh'})

    // </MapContainer>
  );
}

export default Maps;

