"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import Dialog, { BaseDialogProps } from "./Dialog";
import useDomainContext from "@/hooks/useDomainContext";
import AllowedDomainList from "./AllowedDomainList";

const AddDomainDialog: React.FC<BaseDialogProps> = ({ onClose, ...props }) => {
  const { addDomain } = useDomainContext();
  const [domainQuery, setDomainQuery] = useState("");

  const onAddDomain = useCallback(() => {
    addDomain(domainQuery);
    setDomainQuery("");
  }, [addDomain, domainQuery]);

  const onCloseInternal = useCallback(() => {
    onClose();
    setDomainQuery("");
  }, [onClose]);

  return (
    <Dialog
      {...props}
      title="Add Domain"
      subtitle="Specify trusted domains to validate employee requests.
        For example, requests made when employees transfer numbers to Telgea 
        will be automatically associated with your account."
      confirmText="Add domain"
      disableConfirm={!domainQuery}
      onClose={onCloseInternal}
      onConfirm={onAddDomain}
    >
      <div className="flex items-end gap-3 w-full">
        {/* can be isolated into separate FormField component */}
        <div className="flex flex-col items-start gap-2 w-full">
          <label htmlFor="domain-name" className="text-xs text-foreground-gray">
            Domain
          </label>

          {/* should be isolated into separate Input/TextField component to be reused across the app */}
          <input
            type="text"
            id="domain-name"
            autoComplete="off"
            className="bg-transparent w-full px-2 py-3 text-2xl/[100%] text-foreground border-b border-background-gray 
              placeholder-gray-300 focus:background-gray outline-background-gray transition-all"
            placeholder="www.telgea.com"
            value={domainQuery}
            onChange={(e) => setDomainQuery(e.target.value)}
          />
        </div>

        {/* "+" button does the same as "Add domain" here on purpose, since it's not that obvious from the
          mock-ups whether they should act differently
        */}
        <button
          type="button"
          disabled={!domainQuery}
          className="text-center inline-flex items-center p-5 bg-foreground hover:opacity-80 active:opacity-80 
            rounded-full text-xs cursor-pointer transition-all
            disabled:pointer-events-none disabled:border-gray-200
            disabled:text-foreground-gray disabled:bg-background-gray"
          onClick={onAddDomain}
        >
          <Image src="/icons/plus.svg" alt="plus icon" width={22} height={22} />
        </button>
      </div>

      <AllowedDomainList />
    </Dialog>
  );
};

export default AddDomainDialog;
