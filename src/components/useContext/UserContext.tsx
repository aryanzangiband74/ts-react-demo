import { createContext, useContext, useState } from "react";

type UserContextProviderProps = {
    children: React.ReactNode;
};
type AuthUser = {
    email: string;
    username: string;
};
export type UserContextType = {
    user: null | AuthUser;
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

const UserContext = createContext<UserContextType | null>(null);

const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
    const [user, setUser] = useState<null | AuthUser>(null);

    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export default UserContextProvider;

export const useUser = () => useContext(UserContext);
