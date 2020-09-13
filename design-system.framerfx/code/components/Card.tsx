import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "../core/withHOC"

const InnerCard = props => {
    return <System.Card {...props}></System.Card>
}

export const Card = withHOC(InnerCard)

Card.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Card, {
    title: {
        title: "Title",
        type: ControlType.String,
        defaultValue: "title",
    },
    coverImage: {
        title: "Cover image",
        type: ControlType.String,
    },
    coverImageSrcSet: {
        title: "Cover image src set",
        type: ControlType.String,
    },
    coverImageAlt: {
        title: "Cover image alt",
        type: ControlType.String,
    },
    coverImageRatio: {
        title: "Cover image ratio",
        type: ControlType.Number,
    },
    extraTop: {
        title: "Extra top",
        type: ControlType.String,
    },
    extraBottom: {
        title: "Extra bottom",
        type: ControlType.String,
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
    children: {
        title: "Children",
        type: ControlType.String,
    },
    target: {
        title: "Target",
        type: ControlType.String,
    },
})
