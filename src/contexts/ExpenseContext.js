import React, { useState } from "react";
import { createContext ,useContext} from "react";

export const ExpenseContext = createContext({
    items:[],
    addItem :(item)=>{},
    total :'0',
});

export const useExpense =()=>{
    return useContext(ExpenseContext);  
}

export  const ExpenseProvider = ExpenseContext.Provider;

