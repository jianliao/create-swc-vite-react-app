import { FC } from "react";
import type { HelpOutlineIcon as HelpOutlineIconTag } from "@spectrum-web-components/icons-workflow";
import type { IconHelpOutline } from "@spectrum-web-components/icons-workflow/src/elements/IconHelpOutline.d.ts";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-help-outline.js";

export const HelpOutlineIcon = "sp-icon-help-outline" as unknown as FC<typeof HelpOutlineIconTag | Partial<IconHelpOutline>>;
