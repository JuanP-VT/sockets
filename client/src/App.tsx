import { Route, Routes } from "react-router-dom";
import SignIn from "./components/pages/SignIn";
export default function App() {
  return (
    <div>
      <div className=" flex bg-red-500  sds flex-row rel">Top Nav</div>
      <Routes>
        <Route path="/signin" element={<SignIn />}></Route>
      </Routes>
    </div>
  );
}
