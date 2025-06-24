import { Github } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center content-center py-5 font-bold text-lg justify-between">
      <div className="flex gap-5">
        <Link to={"/"}>Home</Link>
        <Link to={"/docs"}>Docs</Link>
        <Link to={"/tools"}>Tools</Link>
      </div>
      <div className="flex items-center gap-1">
        <span>Github</span>
        <Github/>
      </div>
    </header>
  );
}
