"use client";

import React, { useState } from "react";
import Image from "next/image";
import RemoveDomainDialog from "./RemoveDomainDialog";

interface DomainTagProps {
  label: string;
  allowRemove?: boolean;
}

const DomainTag: React.FC<DomainTagProps> = ({ label, allowRemove }) => {
  const [isRemoveDialogOpen, setIsRemoveDialogOpen] = useState(false);

  return (
    <>
      <div
        className={`
          flex items-center gap-1 w-fit py-1 pl-3 rounded-full bg-background-gray text-white transition-all
          ${allowRemove ? "pr-2" : "pr-3"}
        `}
      >
        <span className="text-xs text-foreground-gray">{label}</span>
        {allowRemove && (
          <button
            className="flex items-center justify-center p-1 rounded-full hover:bg-gray-200 active:bg-gray-200 transition-all cursor-pointer"
            type="button"
            onClick={() => setIsRemoveDialogOpen(true)}
          >
            <Image
              src="/icons/close.svg"
              alt="close icon"
              width={8}
              height={8}
            />
          </button>
        )}
      </div>
      {allowRemove && (
        <RemoveDomainDialog
          open={isRemoveDialogOpen}
          onClose={() => setIsRemoveDialogOpen(false)}
          domainName={label}
        />
      )}
    </>
  );
};

export default DomainTag;
