import React from "react";

const Scroll = (props) => {

    return (
        <div className="overflow-y-auto border-2">
            {props.children}
        </div>
    );
}

export default Scroll;