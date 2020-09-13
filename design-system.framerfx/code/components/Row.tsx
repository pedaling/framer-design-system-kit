import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "../core/withHOC"

const InnerRow = props => {
    return <System.Row {...props}></System.Row>
}

export const Row = withHOC(InnerRow)

Row.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Row, {})
