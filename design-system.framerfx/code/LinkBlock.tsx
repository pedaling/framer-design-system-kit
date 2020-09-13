import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerLinkBlock = props => {
    return <System.LinkBlock {...props}></System.LinkBlock>
}

export const LinkBlock = withHOC(InnerLinkBlock)

LinkBlock.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(LinkBlock, {
    to: {
        title: "To",
        type: ControlType.String,
    },
    external: {
        title: "External",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    children: {
        title: "Children",
        type: ControlType.String,
    },
})
