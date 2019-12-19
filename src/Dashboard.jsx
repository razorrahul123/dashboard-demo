import React, { useState, useEffect, useRef } from "react";
import { countBy, groupBy } from "lodash";
import "moment";
import data from "./sample_data.json";
import moment from "moment";
import BarGraph from "./components/BarGraph";
import AreaChartGraph from "./components/AreaChartGraph";
import Table from "./components/Table";
import Card from "./components/Card";
import profile from "./assets/profile.png";
import Alert from "./components/Alert";

const Dashboard = () => {
  const [loadData, setLoadData] = useState(data.data);
  // const [initialVal, setInitialVal] = useState(3100);

  useEffect(() => {}, []);

  // useInterval(() => {
  //   setLoadData(data.data.slice(0, initialVal));
  //   setInitialVal(initialVal + 100);
  // }, 10000);

  // console.log("data is :   ", loadData);

  let maxTemp = loadData[0].reading;
  let minTemp = loadData[0].reading;
  let deviceNameMax = " ";
  let deviceNameMin = " ";
  let alertValue = 0;
  let avgTempAll = 0;
  let deviceNameAlert = "";

  for (let i of loadData) {
    avgTempAll = avgTempAll + i.reading;
    if (i.reading > 27) {
      alertValue = i.reading;
      deviceNameAlert = i.device_display_name;
    }
    if (i.reading > maxTemp) {
      maxTemp = i.reading;
      deviceNameMax = i.device_display_name;
    }
    if (i.reading < minTemp) {
      minTemp = i.reading;
      deviceNameMin = i.device_display_name;
    }
  }

  avgTempAll = avgTempAll / loadData.length;

  const tempAvgData = [];
  const tempAvgDevice = [];
  const tempDeviceNameWireless = [];
  const tempDeviceNameTemp = [];
  const countDeviceDisplayNameAll = [];

  let obj = groupBy(loadData, function(ele) {
    // if (ele.device_display_name === "New Office - MEETING_ROOM")
    return ele.device_display_name;
  });

  let objTime = groupBy(loadData, function(ele) {
    // if (ele.device_display_name === "New Office - MEETING_ROOM")
    return moment(ele.time).format("HH");
  });

  for (let time in objTime) {
    let value = objTime[time].reduce((acc, ele) => acc + ele.reading, 0);
    let average = value / objTime[time].length;
    console.log("average temp", time, " ", average);
    tempAvgData.push({ time: time, average: average.toFixed(2) });
    // console.log("value : ", value);
  }

  let deviceType = groupBy(loadData, function(ele) {
    // if (ele.device_display_name === "New Office - MEETING_ROOM")
    return ele.device_type;
  });

  let deviceDisplayNameAll = groupBy(loadData, function(ele) {
    // if (ele.device_display_name === "New Office - MEETING_ROOM")
    return ele.device_display_name;
  });

  console.log("deviceDisplayTypeAll : ", deviceDisplayNameAll);

  for (let type in deviceDisplayNameAll) {
    let count = deviceDisplayNameAll[type].length;
    countDeviceDisplayNameAll.push({ device_Name: type, Total: count });
  }

  console.log("countDeviceDisplayNameAll  :", countDeviceDisplayNameAll);

  for (let i in deviceType) {
    let deviceTypeName = groupBy(deviceType[i], function(ele) {
      // if (ele.device_display_name === "New Office - MEETING_ROOM")
      return ele.device_display_name;
    });
    console.log("i", i, "count :", deviceTypeName);
    for (let name in deviceTypeName) {
      let count = deviceTypeName[name].length;
      console.log(
        "Device type: ",
        i,
        "Device Name : ",
        name,
        "count : ",
        count
      );
      if (i === "Wireless") {
        tempDeviceNameWireless.push({
          device_type: i,
          device_name: name,
          count: count
        });
      } else if (i === "Temperature") {
        tempDeviceNameTemp.push({
          device_type: i,
          device_name: name,
          count: count
        });
      }
    }
  }

  for (let key in obj) {
    console.log("key is", key);
    let value = obj[key].reduce((acc, ele) => acc + ele.reading, 0);
    let average = value / obj[key].length;
    console.log("average temp", average);
    console.log("value : ", value);
    tempAvgDevice.push({ device_name: key, average: average.toFixed(2) });
  }

  let newOffice = Object.keys(obj).map(ele => obj[ele]);

  for (let i = 0; i < newOffice.length; i++) {
    let value = newOffice[i].reduce((acc, ele) => acc + ele.reading, 0);
    let average = value / newOffice[i].length;
    console.log("average temp", average);
    console.log("value : ", value);
  }

  console.log("object is", obj);

  console.log("object is newoffice", newOffice);

  return (
    <div className="content-container">
      <nav className="navbar-container">
        <div className="navbar-wrapper">
          <div className="nav-header">
            <a href="/">Dashboard</a>
          </div>
          <div className="nav-logo">
            <img src={profile} />
          </div>
        </div>
      </nav>
      <div className="content-wrapper-main">
        <div className="card-container-wrapper">
          <Card
            heading="Max Temp"
            title={deviceNameMax}
            temp={maxTemp.toFixed(2)}
          />
          <Card
            heading="Min Temp"
            title={deviceNameMin}
            temp={minTemp.toFixed(2)}
          />
          <Card
            heading="Avg Temp"
            title="All Devices"
            temp={avgTempAll.toFixed(2)}
          />
        </div>
        <div className="wireless-container">
          {tempAvgDevice && (
            <div>
              <h3>Average Temperature</h3>
              <BarGraph
                data={tempAvgDevice}
                labelKey="device_name"
                dataKey="average"
                hide={true}
              />
            </div>
          )}

          {tempAvgData && (
            <div>
              <h3>Hourly Temperature</h3>
              <BarGraph
                data={tempAvgData}
                labelKey="time"
                dataKey="average"
                hide={false}
              />
            </div>
          )}
        </div>
        <div className="area-wrapper">
          {countDeviceDisplayNameAll && (
            <div>
              <h3>Area Chart of All devices</h3>
              <AreaChartGraph data={countDeviceDisplayNameAll} />
            </div>
          )}
        </div>
        <div className="table-container">
          <div className="table-wrapper">
            <h3>Wireless Devices</h3>
            <Table data={tempDeviceNameWireless} />
          </div>
          <div className="table-wrapper">
            <h3>Temperature devices</h3>
            <Table data={tempDeviceNameTemp} />
          </div>
        </div>
      </div>
      <div>
        <Alert value={alertValue} device={deviceNameAlert} />
      </div>
    </div>
  );
};

// function useInterval(callback, delay) {
//   const savedCallback = useRef();

//   // To Remember the latest function.
//   useEffect(() => {
//     savedCallback.current = callback;
//   }, [callback]);

//   // To Set up the interval
//   useEffect(() => {
//     function tick() {
//       savedCallback.current();
//     }
//     if (delay !== null) {
//       let id = setInterval(tick, delay);
//       return () => clearInterval(id);
//     }
//   }, [delay]);
// }

export default Dashboard;
