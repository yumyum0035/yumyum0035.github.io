import React, { useState, useEffect } from "react";
import "./root.css";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div id="main">
      <Outlet />
    </div>
  );
};

export default Root;
