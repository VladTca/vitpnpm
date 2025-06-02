import React from "react";
import {Icon} from "../icon/Icon";
import {Link} from "react-router-dom";

export const Logo: React.FC = () => {
  return (
    <Link
      to="/"
      aria-label="Home page"
      style={{ display: "inline-block", cursor: "pointer" }}
    >
      <Icon iconId="logo" width={"50"} height={"50"} />
    </Link>
  );
};
