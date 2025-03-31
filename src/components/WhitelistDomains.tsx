import React from "react";
import Image from "next/image";

const WhitelistDomains = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-6 max-w-4xl bg-white rounded-lg">
      <div className="flex flex-col gap-2">
        <h5 className="text-base text-foreground">Whitelisted Domains</h5>
        <p className="text-sm text-gray-500">
          Specify trusted domains to validate employee requests. Requests from
          these domains will be automatically linked to your account
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="text-center inline-flex items-center p-1.5 bg-foreground hover:opacity-65 rounded-full text-xs cursor-pointer transition-opacity"
          >
            <Image
              src="/icons/plus.svg"
              alt="plus icon"
              width={12}
              height={12}
            />
          </button>
          <h5 className="text-base text-foreground">Domains</h5>
        </div>
        <div className="flex gap-2 flex-wrap ">
          <p className="text-sm text-gray-500">tags here</p>
        </div>
      </div>
    </div>
  );
};

export default WhitelistDomains;
