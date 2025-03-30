import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";
import { Tooltip as SpTooltip } from "@spectrum-web-components/tooltip";
import "@spectrum-web-components/tooltip/sp-tooltip.js";

export const Tooltip = "sp-tooltip" as unknown as FC<ReactComponentProps & Omit<Partial<SpTooltip>, 'style' | 'children'> & HTMLAttributes<SpTooltip>>;
