import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "../core/withHOC"

const InnerPagination = props => {
    return <System.Pagination {...props}></System.Pagination>
}

export const Pagination = withHOC(InnerPagination)

Pagination.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Pagination, {
    totalPageIndex: {
        title: "Total page index",
        type: ControlType.Number,
    },
    currentPageIndex: {
        title: "Current page index",
        type: ControlType.Number,
    },
    pageCountPerView: {
        title: "Page count per view",
        type: ControlType.Number,
    },
})
