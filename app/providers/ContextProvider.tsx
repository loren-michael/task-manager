"use client";

import React from "react";
import GlobalStylesProvider from "./GlobalStylesProvider";

interface Props {
  children: React.ReactNode;
};

function ContextProvider({ children }: Props) {
  return (
    <ContextProvider>
      <GlobalStylesProvider>
        {children}
      </GlobalStylesProvider>
    </ContextProvider>
  )
};

export default ContextProvider;