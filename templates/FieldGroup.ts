import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/field-group/sp-field-group.js';

import { FieldGroup as SpFieldGroup } from '@spectrum-web-components/field-group';

export const FieldGroup = "sp-field-group" as unknown as FC<ReactComponentProps & Omit<Partial<SpFieldGroup>, 'style' | 'children'> & HTMLAttributes<SpFieldGroup>>; 