"use client";

import React, { createContext, useState, useContext } from 'react';

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={globalState}>
      <GlobalUpdateContext.Provider value={setGlobalState}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  )
};