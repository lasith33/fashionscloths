import Dashboard from "./dashbord/page";
import Sidebar from "./sidebar";

export default function Admin() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">
        < Sidebar/>
        < Dashboard/>
      </h1>
    </div>
  );
}