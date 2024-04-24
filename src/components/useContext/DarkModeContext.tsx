import { useContext, createContext, useState, useEffect } from "react";

type DarkmodeContextType = {
    isDarkMode: Boolean;
    toggleDarkMode: () => void;
};
type DarkModeProviderProps = {
    children: React.ReactNode;
};
const DarkmodeContext = createContext<DarkmodeContextType>({ isDarkMode: false, toggleDarkMode: () => {} });

const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState<Boolean>(false);
    const toggleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
    };
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark-mode");
            document.documentElement.classList.remove("light-mode");
        } else {
            document.documentElement.classList.add("light-mode");
            document.documentElement.classList.remove("dark-mode");
        }
    }, [isDarkMode]);

    return <DarkmodeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</DarkmodeContext.Provider>;
};

export default DarkModeProvider;

export function useDarkMode() {
    const context = useContext(DarkmodeContext);
    if (context === undefined) throw new Error("dsfklsdflkjsdfhlk");
    return context;
}
