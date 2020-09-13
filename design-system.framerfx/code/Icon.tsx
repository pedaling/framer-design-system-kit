import * as React from "react";
import * as System from "@class101/ui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

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
  }
});
