"use client";

import { createContext, useContext } from "react";
import { onSnapshot } from "mobx-state-tree";
import { taskStore, updateTaskStoreWithSnapshot } from "./TaskStore";

const StoreContext = createContext({ taskStore });

// Update the taskStore with the initial snapshot
if (typeof window !== "undefined") {
  const initialSnapshot = localStorage.getItem("taskStore");
  if (initialSnapshot) {
    updateTaskStoreWithSnapshot(JSON.parse(initialSnapshot));
  }
}

// Synchronize the store with local storage
onSnapshot(taskStore, (snapshot) => {
  localStorage.setItem("taskStore", JSON.stringify(snapshot));
});

export const StoreProvider = ({ children }: any) => {
  const stores = {
    taskStore,
  };

  return (
    <StoreContext.Provider value={stores}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
