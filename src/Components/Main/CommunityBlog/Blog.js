import React from "react";
import { useState } from "react";

function Blog(props) {

    const maxChars = 35;

    const [hidden, setHidden] = useState(true);


    if (props.text.length <= maxChars) {
        return (
            <span>{props.text}</span>
        );
    }

    return (
        <span>
            {hidden ? `${props.text.substr(0, maxChars).trim()}...` : props.text}
            {hidden ? (
                <div onClick={() => setHidden(false)}> show more</div>
            ) : (
                <div onClick={() => setHidden(true)}> show less</div>
            )}
        </span>
    );

}


export default Blog;