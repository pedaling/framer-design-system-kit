import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerToaster = props => {
    return <System.Toaster {...props}></System.Toaster>
}

export const Toaster = withHOC(InnerToaster)

Toaster.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Toaster, {})
