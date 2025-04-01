import useDomainContext from "@/hooks/useDomainContext";
import React from "react";
import DomainTag from "./DomainTag";

const AllowedDomainList: React.FC = () => {
  const { domains } = useDomainContext();

  return (
    <div className="flex gap-2 flex-wrap">
      {domains.map((domain) => (
        <DomainTag key={domain.uuid} domain={domain} />
      ))}
    </div>
  );
};

export default AllowedDomainList;
