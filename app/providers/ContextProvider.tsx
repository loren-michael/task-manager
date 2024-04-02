"use client";

import React from "react";
import { GlobalProvider } from "../context/globalProvider";

interface Props {
  children: React.ReactNode;
};

function ContextProvider({ children }: Props) {
  return (
    // <ContextProvider>
      <GlobalProvider>
        {children}
      </GlobalProvider>
    // </ContextProvider>
  )
};

export default ContextProvider;