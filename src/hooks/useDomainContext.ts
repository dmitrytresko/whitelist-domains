"use client";

import DomainContext from "@/contexts/DomainContext";
import { use } from "react";

export default function useDomainContext() {
  const domainContext = use(DomainContext);

  if (!domainContext) {
    throw new Error("useDomainContext must be used within DomainProvider");
  }

  return domainContext;
}
