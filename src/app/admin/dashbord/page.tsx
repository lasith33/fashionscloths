import Sidebar from "../sidebar";


export default function Dashboard() {
  return (
    <div className="flex">
      < Sidebar/>

      <main className="ml-64 flex-1 p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="mt-4 text-gray-600">
          Welcome to the Admin Dashboard.
        </p>
      </main>
    </div>
  );
}