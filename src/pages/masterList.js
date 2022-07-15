import React, { useEffect, useState } from "react";
import "./table.css";

const rawData = [
  { name: "sandeep" },
  { name: "sharvari" },
  { name: "jaya" },
  { name: "nilima" },
];
//parent component
export const MasterList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(rawData);
  }, [data]);

  const rowDelete = (sn) => {
    console.log(sn);
    //const index = sn - 1;
    const result = data.splice(sn, 1);
    setData(result);
    console.log(result);
  };

  return (
    <div>
      master List
      <table border="1" width="60%" align="center">
        <tr>
          <th>Sn</th>
          <th>Name</th>
          <th>Action</th>
        </tr>

        {data.map((row, index) => (
          <MasterListRow tr={row} index={index} color="red" A={rowDelete} />
        ))}
      </table>
    </div>
  );
};

//child component
export const MasterListRow = (props) => {
  const { tr, index, color, A } = props; // object destructing

  return (
    <tr>
      <td>{index}</td>
      <td>{tr.name}</td>
      <td>
        <button
          onClick={() => props.A(index)}
          style={{ backgroundColor: index % 2 === 0 ? color : "yellow" }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
