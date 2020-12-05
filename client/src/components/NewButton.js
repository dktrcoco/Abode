import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function NewButton({ href, img }) {
    return (

        <>
            <a className="new-btn" href={href}><img src={img}></img></a>
        </>
        // <span className="github-btn" href={href} role="button">
        //         ✗ Button
        // </span>
    );
}

export default NewButton;
