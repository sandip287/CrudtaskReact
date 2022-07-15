//import logo from "./logo.svg";
import { useState } from "react";
//import ChatBotWrapper from "./chatBotWrapper";
import "./App.css";
//import { List, List1 } from "./pages/list";
import Header from "./pages/header";
import { MasterList } from "./pages/masterList";
//import EmplyeeCrud from "./pages/emplyeeCrud";
//import ChatBot from "react-simple-chatbot";

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

      <MasterList />

      {/* <EmplyeeCrud /> */}
    </div>
  );
}

export default App;
