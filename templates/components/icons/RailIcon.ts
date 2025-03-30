import { FC } from "react";
import type { RailIcon as RailIconTag } from "@spectrum-web-components/icons-workflow";
import type { IconRail } from "@spectrum-web-components/icons-workflow/src/elements/IconRail.d.ts";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-rail.js";

export const RailIcon = "sp-icon-rail" as unknown as FC<typeof RailIconTag | Partial<IconRail>>;
