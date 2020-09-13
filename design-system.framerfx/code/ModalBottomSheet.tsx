import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerModalBottomSheet = props => {
    return <System.ModalBottomSheet {...props}></System.ModalBottomSheet>
}

export const ModalBottomSheet = withHOC(InnerModalBottomSheet)

ModalBottomSheet.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ModalBottomSheet, {
    opened: {
        title: "Opened",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    title: {
        title: "Title",
        type: ControlType.String,
        defaultValue: "title",
    },
    zIndex: {
        title: "Z index",
        type: ControlType.Number,
    },
    children: {
        title: "Children",
        type: ControlType.String,
    },
    subTitle: {
        title: "Sub title",
        type: ControlType.String,
        defaultValue: "subTitle",
    },
    successText: {
        title: "Success text",
        type: ControlType.String,
        defaultValue: "successText",
    },
    cancelText: {
        title: "Cancel text",
        type: ControlType.String,
        defaultValue: "cancelText",
    },
    closeable: {
        title: "Closeable",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    hideScroll: {
        title: "Hide scroll",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    noSsr: {
        title: "No ssr",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    removeContentPadding: {
        title: "Remove content padding",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
