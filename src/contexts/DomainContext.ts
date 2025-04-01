"use client";

import { createContext } from "react";

export type DomainConfig = {
  uuid: string;
  domainName: string;
};

interface DomainContextProps {
  domains: DomainConfig[];
  addDomain: (domainName: string) => void;
  removeDomain: (id: string) => void;
}

const DomainContext = createContext<DomainContextProps | null>(null);

export default DomainContext;
