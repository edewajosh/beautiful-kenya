import {Routes, Route} from "react-router-dom"
import Login from "./pages/Login";
import Packages from "./pages/Packages";
import SignUp from "./pages/SignUp";

const App = () =>{
  return (
    <>
      <Routes>
        <Route path="/" element={<Packages/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
