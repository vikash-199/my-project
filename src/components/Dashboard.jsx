import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      Dashboard
      <Outlet />
    </div>
  );
}

export default Dashboard;
