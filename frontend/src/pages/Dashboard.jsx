import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";

const Dashboard = () => {
    return (
        <div className="flex bg-[#10141c]">
            <Sidebar />
            <div className="flex-1 text-white">
                <Outlet /> 
            </div>
        </div>
    );
};

export default Dashboard;
