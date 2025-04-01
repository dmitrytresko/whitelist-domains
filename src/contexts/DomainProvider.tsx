"use client";

import React, {
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";
import DomainContext, { DomainConfig } from "./DomainContext";

const DomainProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [domains, setDomains] = useState<DomainConfig[]>([]);

  const addDomain = useCallback((domainName: string) => {
    const uuid = crypto.randomUUID();
    setDomains((prev) => prev.concat({ uuid, domainName }));
  }, []);

  const removeDomain = useCallback((id: string) => {
    setDomains((prev) => prev.filter(({ uuid }) => uuid !== id));
  }, []);

  const value = useMemo(
    () => ({
      domains,
      addDomain,
      removeDomain,
    }),
    [addDomain, domains, removeDomain]
  );

  return <DomainContext value={value}>{children}</DomainContext>;
};

export default DomainProvider;
