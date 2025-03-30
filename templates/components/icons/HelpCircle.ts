import { FC } from "react";
import type { HelpCircleIcon as HelpCircleIconTag } from "@spectrum-web-components/icons-workflow/src/icons-s2/helpcircle.js";
import type { IconHelpCircle } from "@spectrum-web-components/icons-workflow/src/elements/IconHelpCircle.d.ts";
import '@spectrum-web-components/icons-workflow/icons/sp-icon-help-circle.js';

export const HelpCircleIcon = "sp-icon-help-circle" as unknown as FC<typeof HelpCircleIconTag | Partial<IconHelpCircle>>;
