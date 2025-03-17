import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";

const Dashboard = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 bg-[#10141c] text-white">
                <Outlet /> 
            </div>
        </div>
    );
};

export default Dashboard;
