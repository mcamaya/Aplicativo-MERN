import React, { useState } from "react";

export default function MainTable({dataKeys, dataAPI}) {
  const [data, setData] = useState([]);
  setData(dataAPI);

  return (
    <div>
      {/* <table>
        <thead>
          <tr>
            {dataKeys.map((item) => (
              <th key={Math.random()}>{item.thead}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataAPI.map((registro) => (
            <tr key={registro._id}>
              {dataKeys.map((item) => (
                <td>{item.field}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}
