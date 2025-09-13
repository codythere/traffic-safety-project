import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { FeaturedPage, RectanglePage } from "../components";

export default function Homepage() {
  useEffect(() => {});

  return (
    <>
      <FeaturedPage />
      <RectanglePage />
    </>
  );
}

Homepage.propTypes = {};
