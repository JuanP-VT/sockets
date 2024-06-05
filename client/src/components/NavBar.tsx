import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="p-2 border">
      <div className="flex gap-3">
        <Link to="/">Home</Link>
        <Link to="/signin">SignIn</Link>
      </div>
    </div>
  );
}
