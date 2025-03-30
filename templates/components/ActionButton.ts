import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import "@spectrum-web-components/action-button/sp-action-button.js";

import { ActionButton as SpActionButton } from "@spectrum-web-components/action-button";

export const ActionButton = "sp-action-button" as unknown as FC<ReactComponentProps & Omit<Partial<SpActionButton>, 'style' | 'children'> & HTMLAttributes<SpActionButton>>;
