import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';

const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    api.get('/categories').then(res => setCategories(res.data)).catch(()=>{});
  }, []);
  const createCategory = async (name) => {
    const res = await api.post('/categories', { name });
    setCategories(c => [...c, res.data]);
    return res.data;
  };
  return (
    <CategoriesContext.Provider value={{ categories, createCategory }}>
      {children}
    </CategoriesContext.Provider>
  );
};
export const useCategories = () => useContext(CategoriesContext);
