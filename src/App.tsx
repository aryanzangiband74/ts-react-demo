import "./App.css";
import TaskHeader from "./components/props/TaskHeader";
import TaskList from "./components/props/TaskList";
import User from "./components/props/User";
import NoteList from "./components/state/NoteList";
import DarkModeProvider from "./components/useContext/DarkModeContext";
import Toggletheme from "./components/useContext/Toggletheme";

const tasks = [
    {
        id: 1,
        title: "Task #1",
    },
    {
        id: 2,
        title: "Task #2",
    },
    {
        id: 3,
        title: "Task #3",
    },
];
function App() {
    return (
        <>
            <DarkModeProvider>
                <Toggletheme />
                <TaskHeader name="aryan" age={27} />
                <User user={{ name: "aaaaa", lastname: "scascascas" }} />
                <TaskList tasks={tasks} />
                <NoteList />
            </DarkModeProvider>
        </>
    );
}

export default App;
