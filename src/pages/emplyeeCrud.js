import React, { useEffect, useState } from "react";
const data = [{ name: "sharvari" }, { name: "sandeep" }, { name: "kiyaan" }];
export default function EmplyeeCrud() {
  const [serchKey, setSerchKey] = useState("");
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    getData();
  }, [tableData]);

  const getData = () => {
    setTableData(data);
  };

  const filData = tableData.filter((row) =>
    serchKey ? row.name.includes(serchKey) : row
  );
  console.log(filData);
  const deleteMe = (index) => {
    console.log(index);
    const result = tableData.splice(index, 1);
    setTableData(result);
    console.log(tableData);
  };

  return (
    <div className="">
      <div className="row">
        <div className="col-sm-6">
          <input
            className="form-control"
            type="text"
            placeholder="Search here.."
            onChange={(e) => setSerchKey(e.target.value)}
          />
        </div>
        <div className="col-sm-6">Search By : {serchKey} </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          Table
          <table className="table" border="1" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Sn</th> <th>Name</th> <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filData.map((row, i) => (
                <tr>
                  <td>{i + 1}</td> <td>{row.name}</td>{" "}
                  <td>
                    <button onClick={() => deleteMe(i)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
