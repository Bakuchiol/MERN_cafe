import {checkToken} from '../../utilities/users-service'

export default function OrderHistoryPage() {
    const login = async() => {
        const expDate = await checkToken();
        console.log(expDate);
    }
    return(
        <div>
            <h1>OrderHistoryPage</h1>
            <button onClick={login}>Check when my login expires</button>
        </div>
    )
}