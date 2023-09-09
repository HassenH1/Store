import React, { useMemo } from "react";
import clsx from "clsx";
import "./layoutstyles.css";

interface Props {
  size: "small" | "medium" | "large";
}

function Loading(props: Props) {
  const { size } = props;
  let style = "";
  switch (size) {
    case "small":
      style = "is-small";
      break;
    case "medium":
      style = "is-medium";
      break;
    case "large":
      style = "is-large";
      break;
    default:
      style = "is-small";
  }

  return (
    <section className={`section ${style} has-text-centered container`}>
      <h1 className="title">Loading...</h1>
    </section>
  );
}

export default Loading;
