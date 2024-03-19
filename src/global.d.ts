// global.d.ts
import 'react';

declare module 'react' {
  interface CSSProperties {
    '--index'?: string;
  }
}
