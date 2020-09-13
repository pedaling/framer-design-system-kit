import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "../core/withHOC"

const InnerCarousel = props => {
    return <System.Carousel {...props}></System.Carousel>
}

export const Carousel = withHOC(InnerCarousel)

Carousel.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Carousel, {
    lgSlidesPerView: {
        title: "Lg slides per view",
        type: ControlType.Enum,
        options: ["auto"],
        optionTitles: ["auto"],
    },
    smSlidesPerView: {
        title: "Sm slides per view",
        type: ControlType.Enum,
        options: ["auto"],
        optionTitles: ["auto"],
    },
    lgSpaceBetween: {
        title: "Lg space between",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    smSpaceBetween: {
        title: "Sm space between",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    lgSlidesSideOffset: {
        title: "Lg slides side offset",
        type: ControlType.Number,
    },
    smSlidesSideOffset: {
        title: "Sm slides side offset",
        type: ControlType.Number,
    },
    activeIndex: {
        title: "Active index",
        type: ControlType.Number,
    },
    paginationTheme: {
        title: "Pagination theme",
        type: ControlType.Enum,
        options: ["Dark", "Light"],
        optionTitles: ["Dark", "Light"],
    },
    navigationPosition: {
        title: "Navigation position",
        type: ControlType.Enum,
        options: ["TopRightOut", "BottomRightOut", "BottomRightIn"],
        optionTitles: ["Top Right Out", "Bottom Right Out", "Bottom Right In"],
    },
    transparentPagination: {
        title: "Transparent pagination",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    containerContentMaxWidth: {
        title: "Container content max width",
        type: ControlType.Number,
    },
    pagination: {
        title: "Pagination",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    navigation: {
        title: "Navigation",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
