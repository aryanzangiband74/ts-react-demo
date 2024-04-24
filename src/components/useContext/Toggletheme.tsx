import { useDarkMode } from "./DarkModeContext";

type Props = {};

function Toggletheme({}: Props) {
    const { toggleDarkMode, isDarkMode } = useDarkMode();
    return (
        <div>
            dark mode : {isDarkMode ? "yes " : "no"}
            <button onClick={toggleDarkMode}>Toggle theme</button>
        </div>
    );
}

export default Toggletheme;
