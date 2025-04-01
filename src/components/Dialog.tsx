import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export type BaseDialogProps = {
  open: boolean;
  onClose: () => void;
};

type CustomizableDialogProps = {
  title: string;
  subtitle?: string;
  cancelText?: string;
  confirmText?: string;
  onConfirm?: () => void;
  children: React.ReactNode;
};

type DialogProps = BaseDialogProps & CustomizableDialogProps;

const Dialog: React.FC<DialogProps> = ({
  open,
  onClose,
  title,
  subtitle,
  cancelText = "Cancel",
  confirmText = "Confirm",
  onConfirm,
  children,
}) => {
  return (
    // dialog backdrop
    <div
      className={`
        fixed inset-0 justify-center items-center p-8 transition-all transition-discrete
        ${open ? "flex visible backdrop-blur-xs" : "hidden invisible"}
      `}
      onClick={onClose}
    >
      {/* dialog layout */}
      <div
        className={`
        flex flex-col gap-4 max-w-md p-8 rounded-2xl bg-background transition-all
        ${open ? "opacity-100" : "opacity-0"}
      `}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-[20px] text-foreground font-semibold">{title}</h3>
        {subtitle && (
          <p className={`text-sm text-foreground-gray ${inter.className}`}>
            {subtitle}
          </p>
        )}

        {children}

        {/* dialog actions */}
        {onConfirm && (
          <div className="flex flex-col gap-3 mt-5 sm:grid grid-cols-2">
            <button
              className="py-3 px-4 text-base/[100%] text-foreground rounded-lg bg-transparent hover:bg-gray-100 active:bg-gray-100 border border-solid transition-all cursor-pointer"
              onClick={onClose}
            >
              {cancelText}
            </button>
            <button
              className="px-3 py-4 text-base/[100%] text-white rounded-lg bg-background-black hover:opacity-80 active:opacity-80 transition-all cursor-pointer"
              onClick={onConfirm}
            >
              {confirmText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dialog;
