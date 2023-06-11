import { DefaultTheme } from "styled-components";


//전역 테마 컬러 타입 정의
declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    font: string;
    border: string;
  }
}

export const lightTheme: DefaultTheme = {
  background: '#fff',
  font: '#333',
  border: '#333'
};

export const darkTheme: DefaultTheme = {
  background: '#333',
  font: '#fff',
  border: '#fff'
};