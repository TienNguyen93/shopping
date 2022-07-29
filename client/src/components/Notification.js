import React from "react";

const Notification = ({message}) => {
    if (message === null) {
        return null
    }

    return (
        alert(message)
        // <div>
        //     {message}
        // </div>
    )
}

export default Notification