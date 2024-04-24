import { useState } from "react";

type UserType = { name: String; email: String };
const Account: React.FC = () => {
    const [user, setUser] = useState<null | UserType>(null);
    const handleLogin = () => {
        setUser({
            name: "aryan",
            email: "user@g.mail",
        });
    };
    const handleLogout = () => {
        setUser(null);
    };
    return (
        <div>
            <h1>Account</h1>
            <button onClick={handleLogin}> login</button>
            <button onClick={handleLogout}> logout</button>
            <div>
                Name : {} - email : {}
            </div>
        </div>
    );
};

export default Account;
