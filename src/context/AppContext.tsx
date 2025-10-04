import React, { createContext, ReactNode } from "react";
import { doctors } from "../assets/assets/assets_frontend/assets";

// 1. Define the doctor type
interface Doctor {
  id: string;
  name: string;
  specialization: string;
  image?: string;
}

// 2. Define the context type
interface AppContextType {
  doctors: Doctor[];
}

// 3. Create the context with type
export const AppContext = createContext<AppContextType | undefined>(undefined);

// 4. Define props type for the provider
interface AppContextProviderProps {
  children: ReactNode;
}

// 5. Create the provider component
const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const value: AppContextType = { doctors };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
