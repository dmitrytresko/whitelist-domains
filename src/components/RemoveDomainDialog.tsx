"use client";

import React, { useCallback } from "react";
import Dialog, { BaseDialogProps } from "./Dialog";
import DomainTag from "./DomainTag";
import useDomainContext from "@/hooks/useDomainContext";
import { DomainConfig } from "@/contexts/DomainContext";

type RemoveDomainDialogProps = BaseDialogProps & {
  domain: DomainConfig;
};

const RemoveDomainDialog: React.FC<RemoveDomainDialogProps> = ({
  domain,
  onClose,
  ...props
}) => {
  const { removeDomain } = useDomainContext();

  const onRemoveDomain = useCallback(() => {
    removeDomain(domain.uuid);
    onClose();
  }, [domain.uuid, onClose, removeDomain]);

  return (
    <Dialog
      {...props}
      title="Remove Domain"
      subtitle={`Remove ${domain.domainName} from your whitelisted domains.`}
      confirmText="Remove domain"
      onClose={onClose}
      onConfirm={onRemoveDomain}
    >
      <DomainTag domain={domain} allowRemove={false} />
    </Dialog>
  );
};

export default RemoveDomainDialog;
