import React, { createContext, useContext, useState, ReactNode } from 'react';

export type CursorMode = 'default' | 'pointer' | 'drag' | 'view' | 'hidden';

interface CursorContextType {
  cursorMode: CursorMode;
  setCursorMode: (mode: CursorMode) => void;
  cursorLabel?: string;
  setCursorLabel: (label?: string) => void;
}

const CursorContext = createContext<CursorContextType>({
  cursorMode: 'default',
  setCursorMode: () => {},
  cursorLabel: undefined,
  setCursorLabel: () => {},
});

export const CursorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cursorMode, setCursorMode] = useState<CursorMode>('default');
  const [cursorLabel, setCursorLabel] = useState<string | undefined>(undefined);

  return (
    <CursorContext.Provider value={{ cursorMode, setCursorMode, cursorLabel, setCursorLabel }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
