import { createContext, useState } from "react";

interface ContextProp {
  ids: string[];
  addFavourites: (id: string) => void;
  removeFavourites: (id: string) => void;
}

export const FavouritesContext = createContext<ContextProp>({
  ids: [],
  addFavourites: (id: string) => {},
  removeFavourites: (id: string) => {},
});

export const FavouritesContextProvider = function ({
  children,
}: {
  children: JSX.Element;
}) {
  const [ids, setIds] = useState<string[]>([]);

  function addFavourites(id: string) {
    setIds((prev) => [...prev, id]);
  }

  function removeFavourites(id: string) {
    setIds((prev) => prev.filter((data) => data !== id));
  }

  return (
    <FavouritesContext.Provider
      value={{ ids, addFavourites, removeFavourites }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
