import { ReactNode } from 'react';
import { theme } from './common';

type ValueOf<T> = T[keyof T];

export type CustomTextProps = {
  size?: 'small' | 'normal' | 'mid' | 'big';
  color?: ValueOf<typeof theme>;
  children: ReactNode;
};
