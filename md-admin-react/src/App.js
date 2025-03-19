import { Routes, Route } from "react-router-dom";
import Form from "./Form";
import List from "./List";
import Login from "./Login";
import CargoList from "./CargoList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/List" element={<List />} />
        <Route path="/CargoList" element={<CargoList />} />
      </Routes>
    </div>
  );
}

export default App;
