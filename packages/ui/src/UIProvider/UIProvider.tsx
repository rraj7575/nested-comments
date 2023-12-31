import '@bedrock-layout/css/lib/bedrock-layout.min.css';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';


import { GlobalStyles } from './GlobalStyles';

export type UIProviderProps = {
  children: ReactNode;
};

export function UIProvider({ children }: UIProviderProps) {
  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <GlobalStyles />
      
      {children}
    </ThemeProvider>
  );
}
