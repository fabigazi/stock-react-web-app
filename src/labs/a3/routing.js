import { Routes, Route } from "react-router";
import Add from "./add";
import AddComponent from "./add-component";
import SubtractComponent from "./subtract-component";
import MultiplyComponent from "./multiply-component";
function Routing() {
  return (
    <div>
      <h1>Routing</h1>
      <p>Add(2, 3) = {Add(2, 3)}</p>
      <AddComponent a={2} b={3} />
      <Routes>
        <Route path="hello" element={<h1>Hello World</h1>} />
        <Route path="subtract" element={<SubtractComponent a={2} b={3} />} />
        <Route path="multiply/:xyz/:rst" element={<MultiplyComponent />} />
      </Routes>
    </div>
  );
}

export default Routing;
