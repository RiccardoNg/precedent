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

/**
 * This is main page for the Bluetooth connection
 * @param {*} props
 * @param device - show all the device connected
 * @param characteristic - show all the characteristic of the device
 * @param server - show all the server of the device
 * @param service - show all the service of the device
 * @returns 
 */
export default function Bluetooth() {
  
  const [device, setDevice] = useState(null);
  const [characteristic, setCharacteristic] = useState([]);
  const [server, setServer] = useState([]);
  const [service, setService] = useState([]);
  const connectToDevice = async () => {
      const device = await navigator.bluetooth
      .requestDevice({
          acceptAllDevices: true,
          // filters: [
          //     { namePrefix: "Device Name" }, //Name of the device
          //     { services: [ 'Service ID' ]} //UUID of the service
          // ]
      })
      setDevice(device)
      const server = await device.gatt.connect()
      setServer(server)
      const service = await server.getPrimaryService('Service ID')
      setService(service)
      const characteristic = await service.getCharacteristic('Characteristic ID')
      setCharacteristic(characteristic)
      device.addEventListener('gattserverdisconnected', onDisconnected)
  }

  // --- TEST BATTERY   --- //
  // function onButtonClick() {
  //   log('Requesting Bluetooth Device...');
  //   navigator.bluetooth.requestDevice(
  //     {filters: [{services: ['battery_service']}]})
  //   .then(device => {
  //     log('Connecting to GATT Server...');
  //     return device.gatt.connect();
  //   })
  //   .then(server => {
  //     log('Getting Battery Service...');
  //     return server.getPrimaryService('battery_service');
  //   })
  //   .then(service => {
  //     log('Getting Battery Level Characteristic...');
  //     return service.getCharacteristic('battery_level');
  //   })
  //   .then(characteristic => {
  //     log('Reading Battery Level...');
  //     return characteristic.readValue();
  //   })
  //   .then(value => {
  //     let batteryLevel = value.getUint8(0);
  //     log('> Battery Level is ' + batteryLevel + '%');
  //   })
  //   .catch(error => {
  //     log('Argh! ' + error);
  //   });
  // }

  const onDisconnected = (event) => {
      alert("Vibrator Disconnected")
      const device = ""
      setDevice(device)
  }

  

  return (
      <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={connectToDevice}>CONNECT</button>
        <h1>Bluetooth Device List Connected:</h1>
        {device && (
          <>
            <p>Device - {device.name}</p>
            <ul>
              {characteristic.map((characteristic) => (
                <li key={characteristic.uuid}>{characteristic.uuid}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      
      </>
  )

}