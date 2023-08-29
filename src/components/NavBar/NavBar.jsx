import { Link } from "react-router-dom"
import * as userService from '../../utilities/users-service'

export default function NavBar({user,setUser}) {
    const handleLogOut = () => {
        userService.logOut();
        setUser(null)
    }


    return(
        // <h1>Nav Barr</h1>
        <nav>
            <Link to="/orders">Order History</Link>
            &nbsp; | &nbsp;
            <Link to="/orders/new">New Order</Link>
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>
                Log Out
            </Link>
            &nbsp; | &nbsp;
            <span>Welcome, {user.name}</span>
        </nav>
    )
}