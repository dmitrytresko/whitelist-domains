"use client";

import React, { useState } from "react";
import Image from "next/image";
import AddDomainDialog from "./AddDomainDialog";
import AllowedDomainList from "./AllowedDomainList";
import useDomainContext from "@/hooks/useDomainContext";

const WhitelistDomains: React.FC = () => {
  const { domains } = useDomainContext();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 p-6 max-w-4xl bg-white rounded-lg">
        <div className="flex flex-col gap-2">
          <h5 className="text-base text-foreground">Whitelisted Domains</h5>
          <p className="text-sm text-gray-500">
            Specify trusted domains to validate employee requests. Requests from
            these domains will be automatically linked to your account
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="text-center inline-flex items-center p-1.5 bg-foreground hover:opacity-80 active:opacity-80 
                rounded-full text-xs cursor-pointer transition-all"
              onClick={() => setIsAddDialogOpen(true)}
            >
              <Image
                src="/icons/plus.svg"
                alt="plus icon"
                width={12}
                height={12}
              />
            </button>
            <div className="flex items-center gap-1">
              <h5 className="text-base text-foreground">Domains</h5>
              <span className="text-base text-foreground-gray">
                {domains.length}
              </span>
            </div>
          </div>

          <AllowedDomainList />
        </div>
      </div>

      <AddDomainDialog
        open={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
      />
    </>
  );
};

export default WhitelistDomains;
