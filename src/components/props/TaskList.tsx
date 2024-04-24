type TaskListProps = {
    tasks: {
        id: number;
        title: string;
    }[];
};

function TaskList({ tasks }: TaskListProps) {
    return (
        <>
            <div>TaskList</div>
            <div>
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>{task.title}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default TaskList;
