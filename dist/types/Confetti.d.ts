import React from "react";
export declare function Rectangle({ color }: {
    color: string;
}): React.JSX.Element;
export declare function Circle({ color }: {
    color: string;
}): React.JSX.Element;
declare function Confetti(props: {
    total: number;
    Component?: React.ReactNode | React.ReactNode[];
}): React.JSX.Element;
export { Confetti };
export default Confetti;
