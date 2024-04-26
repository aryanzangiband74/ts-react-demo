import "./App.css";
import Private from "./components/ComponentProps/Private";
import { Profile } from "./components/ComponentProps/Profile";
import List from "./components/generics/List";
import TaskHeader from "./components/props/TaskHeader";
import TaskList from "./components/props/TaskList";
import User from "./components/props/User";
import NoteList from "./components/state/NoteList";
import DarkModeProvider from "./components/useContext/DarkModeContext";
import Toggletheme from "./components/useContext/Toggletheme";
import UserAuth from "./components/useContext/UserAuth";
import UserContextProvider from "./components/useContext/UserContext";

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
const list = ["1", "2", "3", "4", "5"];
function App() {
    return (
        <>
            <UserContextProvider>
                <DarkModeProvider>
                    <UserAuth />
                    <Toggletheme />
                    <TaskHeader name="aryan" age={27} />
                    <User user={{ name: "aaaaa", lastname: "scascascas" }} />
                    <TaskList tasks={tasks} />
                    <NoteList />
                    <List<{ id: number; title: String }> items={tasks} onClick={(item) => console.log(item)} />
                    <Private isLoggedIn={true} Component={Profile}/>
                </DarkModeProvider>
            </UserContextProvider>
        </>
    );
}

export default App;
