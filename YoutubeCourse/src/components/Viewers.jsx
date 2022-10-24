import React from "react";

export default function Viewers({ viewer }) {
  return <h2 data-testid="viewerName">Hello {viewer}!!!</h2>;
}
