import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "../core/withHOC"

const InnerSlide = props => {
    return <System.Slide {...props}></System.Slide>
}

export const Slide = withHOC(InnerSlide)

Slide.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Slide, {
    children: {
        title: "Children",
        type: ControlType.String,
    },
})
