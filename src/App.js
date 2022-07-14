import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { List, List1 } from "./pages/list";
import Header from "./pages/header";

const list = [
  {
    name: "sandeep",
    lastName: "kailuke",
    email: "sndip@gmail.com",
  },
  {
    name: "jaya",
    lastName: "borke",
    email: "jaya@gmail.com",
  },
  {
    name: "nilima",
    lastName: "bhoyar",
    email: "nilima@gmail.com",
  },
];

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <div>
        <Header />
      </div>

      <div className="container">
        <input
          className="form-control"
          name="search"
          onChange={(e) => {
            setSearch(e.target.value);
            //console.log(setSearch(e.target.value));
          }}
        />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {list
              .filter((row) => (search ? row.name == search : row))
              .map((row) => (
                <tr>
                  <td>{row.name}</td>
                  <td>{row.lastName}</td>
                  <td>{row.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
