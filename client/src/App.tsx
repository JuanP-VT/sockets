import { Route, Routes } from "react-router-dom";
import SignIn from "./components/pages/SignIn";
import NavBar from "./components/NavBar";
export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/signin" element={<SignIn />}></Route>
      </Routes>
    </div>
  );
}
