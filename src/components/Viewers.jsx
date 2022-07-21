import React from "react";

export default function Viewers({ viewer = "XXXXX" }) {
  return <h2 data-testid="viewerName">Hello {viewer}!!!</h2>;
}
