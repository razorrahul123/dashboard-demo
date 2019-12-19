import React from "react";

const Table = ({ data }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th className="cell">Device Type</th>
            <th className="cell">Device Name</th>
            <th className="cell">Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => (
            <tr key={index}>
              <td className="cell">{value.device_type}</td>
              <td className="cell">{value.device_name}</td>
              <td className="cell">{value.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
