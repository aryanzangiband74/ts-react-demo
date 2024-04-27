type CollapsedType = {
    collapsed?: true;
    expanded?: never;
};
type ExpandedType = {
    collapsed?: true;
    expanded?: Boolean;
};
type Props = CollapsedType | ExpandedType;
const Accordion = (props: Props) => {
    return <div>Accordion</div>;
};

const parent = () => {
    return <Accordion collapsed={true} />;
};
export default Accordion;
