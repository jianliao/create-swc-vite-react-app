import { FC, ReactNode } from "react";

// THEME_IMPORTS_PLACEHOLDER

import { Theme } from "@spectrum-web-components/theme";

/**
 * This file should always be implemented by React application developers as it is up to them to decide how to handle the theme.
 */
const SWC_NAME = "sp-theme";

export const SpTheme = SWC_NAME as unknown as FC<
  { children?: ReactNode } | Theme
>;

export default SpTheme;