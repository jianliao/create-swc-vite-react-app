import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/dialog/sp-dialog.js';

import { Dialog as SpDialog, DialogBase as SpDialogBase, DialogWrapper as SpDialogWrapper } from '@spectrum-web-components/dialog';

export const Dialog = "sp-dialog" as unknown as FC<ReactComponentProps & Omit<Partial<SpDialog>, 'style' | 'children'> & HTMLAttributes<SpDialog>>;
export const DialogBase = "sp-dialog-base" as unknown as FC<ReactComponentProps & Omit<Partial<SpDialogBase>, 'style' | 'children'> & HTMLAttributes<SpDialogBase>>;
export const DialogWrapper = "sp-dialog-wrapper" as unknown as FC<ReactComponentProps & Omit<Partial<SpDialogWrapper>, 'style' | 'children'> & HTMLAttributes<SpDialogWrapper>>;
