import { createGlobalStyle } from 'styled-components';
export const Common = createGlobalStyle `
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    border-radius : 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    border-radius : 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius : 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
    border-radius : 10px;
  }
`;
