import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "../core/withHOC"

const InnerNavigation = props => {
    return <System.Navigation {...props}></System.Navigation>
}

export const Navigation = withHOC(InnerNavigation)

Navigation.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Navigation, {
    pathname: {
        title: "Pathname",
        type: ControlType.String,
    },
})
