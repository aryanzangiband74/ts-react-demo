import React from "react";

type ButtonProps = {
    variant: "primary" | "secondary";
} & React.ComponentProps<"button">;

const Button = ({ className, children, ...rest }: ButtonProps) => {
    return (
        <button className={`default-classname  ${className}`} {...rest}>
            {children}
        </button>
    );
};

const parent = () => {
    return (
        <Button variant="primary" className="btn-primary">
            click
        </Button>
    );
};
// export default Button;
