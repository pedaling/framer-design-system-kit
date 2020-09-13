import * as React from "react";
import * as System from "@class101/ui";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "core/withHOC";
import { getColorsToEnum } from "core/Colors";

const InnerIcon = (props) => {
  return <>{React.createElement(System.Icon[props.icon], props)}</>;
};

export const Icon = withHOC(InnerIcon);

addPropertyControls(Icon, {
  icon: {
    title: "icon",
    type: ControlType.Enum,
    options: Object.keys(System.Icon),
  },
  size: {
    title: "size",
    type: ControlType.Number,
  },
  fillColor: {
    title: "fillColor",
    type: ControlType.Enum,
    options: getColorsToEnum(),
  },
});
