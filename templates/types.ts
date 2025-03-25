import { ReactNode, CSSProperties } from "react";

/**
 * Common props interface for all React components wrapping Spectrum Web Components
 * Provides proper typing for React's children and style props
 */
export interface ReactComponentProps {
  children?: ReactNode;
  style?: CSSProperties;
} 