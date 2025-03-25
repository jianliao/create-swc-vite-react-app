import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/button/sp-button.js';
import '@spectrum-web-components/button/sp-clear-button.js';
import '@spectrum-web-components/button/sp-close-button.js';

import { Button as SpButton, ClearButton as SpClearButton, CloseButton as SpCloseButton } from '@spectrum-web-components/button';

export const Button = "sp-button" as unknown as FC<ReactComponentProps & Omit<Partial<SpButton>, 'style' | 'children'> & HTMLAttributes<SpButton>>;
export const ClearButton = "sp-clear-button" as unknown as FC<ReactComponentProps & Omit<Partial<SpClearButton>, 'style' | 'children'> & HTMLAttributes<SpClearButton>>;
export const CloseButton = "sp-close-button" as unknown as FC<ReactComponentProps & Omit<Partial<SpCloseButton>, 'style' | 'children'> & HTMLAttributes<SpCloseButton>>;
