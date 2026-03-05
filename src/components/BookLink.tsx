import { Link, type LinkOptions } from "@tanstack/react-router";
import React from "react";

type BookLinkProps = {
  link: LinkOptions;
  children: React.ReactNode;
  className?: string;
};

export default function BookLink({ link, children, className = "" }: BookLinkProps) {
  return (
    <Link {...link} className={`underline underline-offset-4 ${className}`}>
      <em>{children}</em>
    </Link>
  );
}
