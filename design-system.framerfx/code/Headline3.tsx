import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerHeadline3 = props => {
    return <System.Headline3 {...props}></System.Headline3>
}

export const Headline3 = withHOC(InnerHeadline3)

Headline3.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Headline3, {
    lg: {
        title: "Lg",
        type: ControlType.Enum,
        options: [
            "Headline1",
            "Headline2",
            "Headline3",
            "Subtitle1",
            "Subtitle2",
            "Body1",
            "Body2",
            "Caption1",
            "Caption2",
        ],
        optionTitles: [
            "Headline1",
            "Headline2",
            "Headline3",
            "Subtitle1",
            "Subtitle2",
            "Body1",
            "Body2",
            "Caption1",
            "Caption2",
        ],
    },
    sm: {
        title: "Sm",
        type: ControlType.Enum,
        options: [
            "Headline1",
            "Headline2",
            "Headline3",
            "Subtitle1",
            "Subtitle2",
            "Body1",
            "Body2",
            "Caption1",
            "Caption2",
        ],
        optionTitles: [
            "Headline1",
            "Headline2",
            "Headline3",
            "Subtitle1",
            "Subtitle2",
            "Body1",
            "Body2",
            "Caption1",
            "Caption2",
        ],
    },
    color: {
        title: "Color",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    textAlign: {
        title: "Text align",
        type: ControlType.String,
        defaultValue: "textAlign",
    },
    fontWeight: {
        title: "Font weight",
        type: ControlType.String,
    },
    children: {
        title: "Children",
        type: ControlType.String,
    },
    element: {
        title: "Element",
        type: ControlType.Enum,
        options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "div"],
        optionTitles: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "div"],
    },
    display: {
        title: "Display",
        type: ControlType.Enum,
        options: ["2", "3"],
        optionTitles: ["2", "3"],
    },
})
