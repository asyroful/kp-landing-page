import React, { useContext, useEffect } from "react";
import { AlertContext } from "../context/AlertContext";
import { CheckCircleIcon, XCircleIcon, WarningCircleIcon } from "@phosphor-icons/react";

function Alert() {
  const {
    alertState: { show, message, variant },
    dispatchAlert,
  } = useContext(AlertContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (show) {
        dispatchAlert({ type: "HIDE" });
      }
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [show]);

  const color =
    variant === "Warning"
      ? "yellow"
      : variant === "Danger"
      ? "red"
      : variant === "Success"
      ? "green"
      : "gray";

  const icon =
    variant === "Success" ? <CheckCircleIcon className="w-7 h-7 text-green-500 mr-3" /> :
    variant === "Danger" ? <XCircleIcon className="w-7 h-7 text-red-500 mr-3" /> :
    variant === "Warning" ? <WarningCircleIcon className="w-7 h-7 text-yellow-500 mr-3" /> :
    null;

  return (
    show && (
      <div
        className={`fixed top-8 right-8 z-[9999] w-[340px] flex items-center shadow-xl px-5 py-3 rounded-2xl bg-white animate-fadeIn border border-${color}-200`}
        style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
      >
        {icon}
        <div className="flex-1">
          <h4 className={`font-semibold text-${color}-600 mb-1`}>{variant}</h4>
          <p className="text-gray-800 text-sm">{message}</p>
        </div>
        <button
          onClick={() => dispatchAlert({ type: "HIDE" })}
          className="ml-4 text-gray-400 hover:text-gray-700 text-lg font-bold"
          aria-label="Close alert"
        >
          ×
        </button>
      </div>
    )
  );
}

export default Alert;
