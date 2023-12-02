"use client"; // This is a client component 👈🏽
import Card from "@/components/home/card";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";
import { useEffect, useState } from "react";
// require('node-web-bluetooth');
// export default function Card() {
  

//   return <></>;
// }
export default function BluetoothPage() {
  const [state, setState] = useState(""); // I can use client hooks 👈🏽
  // const router = useRouter();
  const [device2, setDevice] = useState(null);
  const [characteristics, setCharacteristics] = useState([]);

  

  const device = ["1","2"]
  // const { stargazers_count: device2 } = await navigator.bluetooth.requestDevice({
  //         acceptAllDevices: true,
  //         optionalServices: ['your-service-uuid'], // Replace with your Bluetooth service UUID
  // })
  // .then((res) => res.json())
  // .catch((e) => console.log(e));

    const connectToDevice = async () => {
    try {
      const device2 = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: ['your-service-uuid'], // Replace with your Bluetooth service UUID
      });

      const server = await device2.gatt.connect();
      const service = await server.getPrimaryService('your-service-uuid'); // Replace with your Bluetooth service UUID
      const characteristics = await service.getCharacteristics();

      setDevice(device2);
      setCharacteristics(characteristics);
    } catch (error) {
      console.error('Error connecting to Bluetooth device:', error);
    }
  };

    useEffect(() => {
    // Check if Web Bluetooth API is supported
    if ('bluetooth' in navigator) {
      connectToDevice();
    } else {
      console.error('Web Bluetooth API is not supported in this browser.');
    }
  }, []);

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
      <h1>Bluetooth Device Connection 2</h1>
      { device2 && (
        <>
          <p>Connected to device: {device.name}</p>
          <ul>
            {characteristics.map((characteristic) => (
              <li key={characteristic.uuid}>{characteristic.uuid}</li>
            ))}
          </ul>
        </>
      )}
      </div>
    </>
  );
}




// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

// const BluetoothPage = () => {
//   const router = useRouter();
//   const [device, setDevice] = useState(null);
//   const [characteristics, setCharacteristics] = useState([]);

//   const connectToDevice = async () => {
//     try {
//       const device = await navigator.bluetooth.requestDevice({
//         acceptAllDevices: true,
//         optionalServices: ['your-service-uuid'], // Replace with your Bluetooth service UUID
//       });

//       const server = await device.gatt.connect();
//       const service = await server.getPrimaryService('your-service-uuid'); // Replace with your Bluetooth service UUID
//       const characteristics = await service.getCharacteristics();

//       setDevice(device);
//       setCharacteristics(characteristics);
//     } catch (error) {
//       console.error('Error connecting to Bluetooth device:', error);
//     }
//   };

//   useEffect(() => {
//     // Check if Web Bluetooth API is supported
//     if ('bluetooth' in navigator) {
//       connectToDevice();
//     } else {
//       console.error('Web Bluetooth API is not supported in this browser.');
//     }
//   }, []);

//   return (
//     <div>
//       <h1>Bluetooth Device Connection</h1>
//       {device && (
//         <>
//           <p>Connected to device: {device.name}</p>
//           <ul>
//             {characteristics.map((characteristic) => (
//               <li key={characteristic.uuid}>{characteristic.uuid}</li>
//             ))}
//           </ul>
//         </>
//       )}
//     </div>
//   );
// };

// export default BluetoothPage;