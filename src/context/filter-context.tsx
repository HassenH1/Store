import * as React from "react";
import { ReactNode, createContext, useContext, useState } from "react";

interface IFilter {
  isWomen: boolean;
  isMen: boolean;
  isJewelry: boolean;
}

interface IFilterContext {
  onPressCategoryFilters: (option?: string) => void;
  handleCheck: Function;
  resetFilter: Function;
  filter: IFilter;
  url: string;
}

const productURL = "https://fakestoreapi.com/products";

const FilterContext = createContext<IFilterContext | undefined>(undefined);

const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [url, setUrl] = useState(productURL);

  const [filter, setFilter] = useState({
    isWomen: false,
    isMen: false,
    isJewelry: false,
  });

  const handleCheck = (event: any, productName?: string) => {
    const name = event.target.name;
    setFilter((prev) => {
      if (Object.values(prev).includes(true)) {
        Object.keys(prev).forEach((key) => {
          prev[key as "isWomen" | "isMen" | "isJewelry"] = false;
        });
      }

      const newValue = {
        ...prev,
        [name]: !prev[name as "isWomen" | "isMen" | "isJewelry"],
      };
      if (productName) onPressCategoryFilters(productName);
      return newValue;
    });
  };

  const resetFilter = (onPressCategoryFilters: Function) => {
    setFilter({
      isWomen: false,
      isMen: false,
      isJewelry: false,
    });
    onPressCategoryFilters();
  };

  const onPressCategoryFilters = (option: string = "") => {
    if (setUrl) {
      switch (option) {
        case "isWomen":
          setUrl("https://fakestoreapi.com/products/category/women's clothing");
          break;
        case "isMen":
          setUrl("https://fakestoreapi.com/products/category/men's clothing");
          break;
        case "isJewelery":
          setUrl("https://fakestoreapi.com/products/category/jewelery");
          break;
        default:
          return setUrl("https://fakestoreapi.com/products");
      }
    }
  };

  return (
    <FilterContext.Provider
      value={{ handleCheck, resetFilter, filter, onPressCategoryFilters, url }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};

export { FilterProvider, useFilter };
