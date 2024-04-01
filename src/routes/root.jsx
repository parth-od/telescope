import { Outlet } from "react-router-dom";
import NestedList from "../layout/sidebar";
import { Suspense } from "react";

export default function Root() {
  return (
    <Suspense fallback={<div>Loading rooot...</div>}>
      <div id="sidebar">
        <h1>Telescope</h1>
        <NestedList />
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </Suspense>
  );
}
