import { FC, ReactNode } from "react";

// THEME_IMPORTS_PLACEHOLDER

import { Theme } from "@spectrum-web-components/theme";

/**
 * This file should always be implemented by React application developers as it is up to them to decide how to handle the theme.
 */
export const SpTheme = "sp-theme" as unknown as FC<
  { children?: ReactNode } | Theme
>;

export default SpTheme;