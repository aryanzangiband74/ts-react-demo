type taskHeaderProps = {
    name: string;
    age: number;
};
export default function TaskHeader(props: taskHeaderProps) {
    return (
        <h2>
            Hi {props.name} are good {props.age}
        </h2>
    );
}
