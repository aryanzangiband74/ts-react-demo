export type ProfileProps = {
    name: String;
};

export const Profile = ({ name }: ProfileProps) => {
    return <div>Profile....{name}</div>;
};
