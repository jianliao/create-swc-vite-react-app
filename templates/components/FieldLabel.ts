import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/field-label/sp-field-label.js';

import { FieldLabel as SpFieldLabel } from '@spectrum-web-components/field-label';

export const FieldLabel = "sp-field-label" as unknown as FC<ReactComponentProps & Omit<Partial<SpFieldLabel>, 'style' | 'children'> & HTMLAttributes<SpFieldLabel>>; 