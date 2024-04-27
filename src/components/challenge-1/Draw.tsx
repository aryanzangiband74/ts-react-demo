// type Props = {
//     shape: "circle" | "rectangle" | "square";
//     width: number;
//     height: number;
//     radius: number;
// };
type Circle = {
    shape: "circle";
    radius: number;
};
type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
};
type Square = {
    shape: "square";
    baseLength: number;
};
type Props = Circle | Rectangle | Square;
const Draw = (props: Props) => {
    return <div>{JSON.stringify(props)}</div>;
};

const Pareny = () => {
    return <Draw shape="square" baseLength={3} />;
};
export default Draw;
