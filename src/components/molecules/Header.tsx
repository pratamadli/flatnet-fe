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

  // Split the pathname into segments
  const segments = pathname.split("/").filter((segment) => segment !== "");

  // Define the base breadcrumb
  let breadcrumb = ["Dashboard"];

  // Add other segments to the breadcrumb, capitalizing the first letter of each segment
  breadcrumb = breadcrumb.concat(
    segments.slice(1).map((segment) => {
      return segment
        .split("-") // Split by hyphen
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
        .join(" "); // Join the words back with a space
    })
  );

  // Join the breadcrumb parts with " > "
  const joinBreadcrumb = breadcrumb.join(" > ");

  return (
    <div>
      {joinBreadcrumb === "Dashboard > Dashboard" ? (
        <div>
          <h1 className="text-2xl font-semibold">Welcome back, {name}</h1>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-semibold">{title}</h1>
          <div className="text-sm font-light">{joinBreadcrumb}</div>
        </div>
      )}
    </div>
  );
};

export { Header };
