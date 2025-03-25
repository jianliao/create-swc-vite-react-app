import { FC, ReactNode } from "react";

import '@spectrum-web-components/theme/sp-theme.js';
import '@spectrum-web-components/theme/express/scale-large.js';
import '@spectrum-web-components/theme/express/scale-medium.js';
import '@spectrum-web-components/theme/express/theme-dark.js';
import '@spectrum-web-components/theme/express/theme-light.js';

import { Theme } from "@spectrum-web-components/theme";

/**
 * This file should always be implemented by React application developers as it is up to them to decide how to handle the theme.
 */
const SWC_NAME = "sp-theme";

export const SpTheme = SWC_NAME as unknown as FC<
  { children?: ReactNode } | Theme
>;

export default SpTheme;