type UserProps = {
    user: {
        name: string;
        lastname: string;
    };
};

const User: React.FC<UserProps> = ({ user }) => {
    return (
        <h2>
            name {user.name}: - lastname : {user.lastname}
        </h2>
    );
};
export default User;
