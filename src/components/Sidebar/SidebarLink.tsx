import { AnimalProps } from "@/mock";
import React, { forwardRef, LegacyRef } from "react";

export const SidebarLink = forwardRef(
  ({ header }: AnimalProps, ref: LegacyRef<HTMLAnchorElement> | undefined) => {
    return (
      <a ref={ref} href={`#${header}`}>
        <li>{header}</li>
      </a>
    );
  }
);
