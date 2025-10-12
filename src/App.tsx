import { Outlet } from "react-router";
import "./App.css";
function App() {
  return (
    <>
      <h2 className="text-7xl">From Headoffice</h2>
      <Outlet />
    </>
  );
}

export default App;
