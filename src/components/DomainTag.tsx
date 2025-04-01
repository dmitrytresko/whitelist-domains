"use client";

import React, { useState } from "react";
import Image from "next/image";
import RemoveDomainDialog from "./RemoveDomainDialog";
import { DomainConfig } from "@/contexts/DomainContext";

interface DomainTagProps {
  domain: DomainConfig;
  allowRemove?: boolean;
}

const DomainTag: React.FC<DomainTagProps> = ({
  domain,
  allowRemove = true,
}) => {
  const [isRemoveDialogOpen, setIsRemoveDialogOpen] = useState(false);

  return (
    <>
      <div
        className={`
          flex items-center gap-1 w-fit py-1 pl-3 rounded-full bg-background-gray text-white transition-all
          ${allowRemove ? "pr-2" : "pr-3"}
        `}
      >
        <span className="text-xs text-foreground-gray">
          {domain.domainName}
        </span>

        {/* hides "X" button within each domain tag in this particular dialog on purpose, 
          because logically user shouldn't be allowed to click there while already being in the Remove Domain dialog. 
          Might be a slight inaccuracy from the design perspective 
        */}
        {allowRemove && (
          <button
            className="flex items-center justify-center p-1 rounded-full 
            hover:bg-gray-200 active:bg-gray-200 transition-all cursor-pointer"
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
          domain={domain}
        />
      )}
    </>
  );
};

export default DomainTag;
