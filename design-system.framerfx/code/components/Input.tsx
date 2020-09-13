import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "../core/withHOC"

const InnerInput = props => {
    return <System.Input {...props}></System.Input>
}

export const Input = withHOC(InnerInput)

Input.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Input, {})
