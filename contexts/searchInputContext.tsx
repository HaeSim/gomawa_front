import { createContext, useContext, useState, useMemo } from 'react';

interface SearchInputActions {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const SearchInputValueContext = createContext('');
const SearchInputActionsContext = createContext(null);

const SearchInputProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState<any>('');

  const actions = useMemo(() => {
    return {
      onChange(value: any) {
        setInputValue(value);
      },
    };
  }, []);

  return (
    <SearchInputActionsContext.Provider value={actions}>
      <SearchInputValueContext.Provider value={inputValue}>
        {children}
      </SearchInputValueContext.Provider>
    </SearchInputActionsContext.Provider>
  );
};

const useSearchInputValue = () => {
  const value = useContext(SearchInputValueContext);

  if (value === undefined) {
    throw new Error(
      'useSearchInputValue should be used with in SearchInputProvider',
    );
  }

  return value;
};

const useSearchInputActions = (): SearchInputActions => {
  const actions = useContext(SearchInputActionsContext);

  if (actions === undefined) {
    throw new Error(
      'useSearchInputActions should be used with in SearchInputProvider',
    );
  }

  return actions;
};

export { SearchInputProvider, useSearchInputValue, useSearchInputActions };
