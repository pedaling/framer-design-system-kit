import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSection = props => {
    return <System.Section {...props}></System.Section>
}

export const Section = withHOC(InnerSection)

Section.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Section, {
    title: {
        title: "Title",
        type: ControlType.String,
        defaultValue: "title",
    },
    description: {
        title: "Description",
        type: ControlType.String,
        defaultValue: "description",
    },
    to: {
        title: "To",
        type: ControlType.String,
    },
    href: {
        title: "Href",
        type: ControlType.String,
        defaultValue: "https://framer.com",
    },
    target: {
        title: "Target",
        type: ControlType.String,
    },
    linkText: {
        title: "Link text",
        type: ControlType.String,
        defaultValue: "linkText",
    },
    children: {
        title: "Children",
        type: ControlType.String,
    },
})
