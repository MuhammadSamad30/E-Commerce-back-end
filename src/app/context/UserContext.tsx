"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

interface Order {
  id: string;
  date: string;
  total: number;
  status: string;
}

interface UserData {
  name: string;
  email: string;
  orders: Order[];
}

interface UserContextType {
  userData: UserData;
  setUserDetails: (name: string, email: string) => void;
  addOrder: (order: Order) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userData, setUserData] = useState<UserData>(() => {
    if (typeof window !== "undefined") {
      const storedUserData = localStorage.getItem("userData");
      return storedUserData
        ? JSON.parse(storedUserData)
        : { name: "", email: "", orders: [] };
    }
    return { name: "", email: "", orders: [] };
  });

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  const setUserDetails = (name: string, email: string) => {
    setUserData((prev) => ({ ...prev, name, email }));
  };

  const addOrder = (order: Order) => {
    setUserData((prev) => ({
      ...prev,
      orders: [...prev.orders, order],
    }));
  };

  return (
    <UserContext.Provider value={{ userData, setUserDetails, addOrder }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
