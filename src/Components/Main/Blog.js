import React from "react";
function Blog (props) {

    const maxChars = 35;

    // eslint-disable-next-line no-undef
    const[hidden, setHidden] = useState(true);


    if (props.text.length <= maxChars) {
        return (
            <span>{props.text}</span>
        );
    }
    
return (
            <span>
            {hidden ? `${props.text.substr(0, maxChars).trim()}...` : props.text}
            {hidden ? (
                <button onClick={() => setHidden(false)}> show more</button>
            ) : (
                <button onClick={() => setHidden(true)}> show less</button>
            )}
            </span>        
        );

}
    

export default Blog;