import { useContext } from "react";

import { useUser, UserContextType } from "./UserContext";

const UserAuth: React.FC = ({}) => {
    const userContext = useUser();
    const handleLogin = () => {
        userContext?.setUser({
            username:"asdasd",
            email:"aa@gmail.com"
        })
    };
    const handleLogout = () => {
        userContext?.setUser(null);
    };
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <h2> user name is : {}</h2>
            <h2>  email is : {}</h2>
        </div>
    );
};
export default UserAuth;
