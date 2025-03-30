import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/alert-dialog/sp-alert-dialog.js';
import '@spectrum-web-components/divider/sp-divider.js';
import '@spectrum-web-components/button-group/sp-button-group.js';

import { AlertDialog as SpAlertDialog } from '@spectrum-web-components/alert-dialog';

export const AlertDialog = "sp-alert-dialog" as unknown as FC<ReactComponentProps & Omit<Partial<SpAlertDialog>, 'style' | 'children'> & HTMLAttributes<SpAlertDialog>>; 