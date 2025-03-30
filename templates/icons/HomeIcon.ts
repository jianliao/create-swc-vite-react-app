import { FC } from "react";
import type { HomeIcon as HomeIconTag } from "@spectrum-web-components/icons-workflow";
import type { IconHome } from "@spectrum-web-components/icons-workflow/src/elements/IconHome.d.ts";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-home.js";

export const HomeIcon = "sp-icon-home" as unknown as FC<typeof HomeIconTag | Partial<IconHome>>;
