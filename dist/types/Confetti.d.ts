import React, { HTMLAttributes } from "react";
export declare function Rectangle({ color }: {
    color: string;
}): React.JSX.Element;
export declare function Circle({ color }: {
    color: string;
}): React.JSX.Element;
interface ConfettiProps extends HTMLAttributes<HTMLDivElement> {
    total?: number;
    Component?: React.ReactNode | React.ReactNode[];
}
declare function Confetti({ total, Component, ...props }: ConfettiProps): React.JSX.Element;
export { Confetti };
export default Confetti;
