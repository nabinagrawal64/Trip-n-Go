import UserDashboard from "../components/Dashboard/user/User"
import Admin from "../components/Dashboard/admin/Admin"

const Dashboard = () => {
    return (
        <div>
            <UserDashboard/>
            <Admin />
        </div>
    )
}

export default Dashboard