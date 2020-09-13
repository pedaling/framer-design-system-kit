import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerToast = props => {
    return <System.Toast {...props}></System.Toast>
}

export const Toast = withHOC(InnerToast)

Toast.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Toast, {
    backgroundColor: {
        title: "Background color",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    button: {
        title: "Button",
        type: ControlType.String,
    },
    color: {
        title: "Color",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    message: {
        title: "Message",
        type: ControlType.String,
    },
    position: {
        title: "Position",
        type: ControlType.String,
    },
    timeout: {
        title: "Timeout",
        type: ControlType.Number,
    },
})
