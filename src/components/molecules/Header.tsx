import React, { useEffect, useState } from "react";
interface HeaderProps {
  title?: string;
  name?: string;
}
const Header: React.FC<HeaderProps> = ({ title, name = "Admin" }) => {
  const urlString = window.location.href;
  const url = new URL(urlString);

  // Get the pathname and remove the trailing slash if it exists
  const pathname = url.pathname.replace(/\/$/, "");
  console.log("PATH NAME", pathname);
  // Split the pathname into segments
  const segments = pathname.split("/").filter((segment) => segment !== "");
  console.log("SEGMENTS", segments);
  // Define the base breadcrumb
  let breadcrumb = ["Dashboard"];

  console.log("BREADCRUMP 1", breadcrumb);

  // Add other segments to the breadcrumb, capitalizing the first letter of each segment
  breadcrumb = breadcrumb.concat(
    segments.slice(1).map((segment) => {
      return segment.charAt(0).toUpperCase() + segment.slice(1);
    })
  );

  console.log("BREADCRUMP 2", breadcrumb);

  // Join the breadcrumb parts with " > "
  const joinBreadrump = breadcrumb.join(" > ");

  console.log("BREADCRUMP 3", joinBreadrump);

  return (
    <div>
      {joinBreadrump === "Dashboard > Dashboard" ? (
        <div>
          <h1 className="text-2xl font-semibold">Welcome back, {name}</h1>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-semibold">{title}</h1>
          <div className="text-sm font-light">{joinBreadrump}</div>
        </div>
      )}
    </div>
  );
};

export { Header };
