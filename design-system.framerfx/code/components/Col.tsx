import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "../core/withHOC"

const InnerCol = props => {
    return <System.Col {...props}></System.Col>
}

export const Col = withHOC(InnerCol)

Col.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Col, {
    sm: {
        title: "Sm",
        type: ControlType.Number,
    },
    md: {
        title: "Md",
        type: ControlType.Number,
    },
    lg: {
        title: "Lg",
        type: ControlType.Number,
    },
    smOffset: {
        title: "Sm offset",
        type: ControlType.Number,
    },
    mdOffset: {
        title: "Md offset",
        type: ControlType.Number,
    },
    lgOffset: {
        title: "Lg offset",
        type: ControlType.Number,
    },
})
