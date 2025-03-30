import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/action-group/sp-action-group.js';

import { ActionGroup as SpActionGroup } from "@spectrum-web-components/action-group";

export const ActionGroup = "sp-action-group" as unknown as FC<ReactComponentProps & Omit<Partial<SpActionGroup>, 'style' | 'children'> & HTMLAttributes<SpActionGroup>>;
