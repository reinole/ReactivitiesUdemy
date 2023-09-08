import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

interface Props {
    inverted?: boolean;
    content?: string;
}

export const LoadingComponent: React.FC<{ inverted?: boolean; content?: string }> = ({ inverted = true, content = 'Loading...' }: Props) => {
    return (
        <Dimmer active={true} inverted={inverted}>
            <Loader content={content} />
        </Dimmer>
    )
}

export default LoadingComponent;