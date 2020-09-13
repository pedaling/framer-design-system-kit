import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "../core/withHOC"

const InnerSnackBar = props => {
    return <System.SnackBar {...props}></System.SnackBar>
}

export const SnackBar = withHOC(InnerSnackBar)

SnackBar.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SnackBar, {
    message: {
        title: "Message",
        type: ControlType.String,
    },
    actionElement: {
        title: "Action element",
        type: ControlType.String,
    },
})
