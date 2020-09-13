import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTabs = props => {
    return <System.Tabs {...props}></System.Tabs>
}

export const Tabs = withHOC(InnerTabs)

Tabs.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Tabs, {
    fluid: {
        title: "Fluid",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    type: {
        title: "Type",
        type: ControlType.Enum,
        options: ["default", "red", "orange"],
        optionTitles: ["default", "red", "orange"],
    },
})
