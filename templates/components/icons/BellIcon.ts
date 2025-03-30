import { FC } from "react";
import type { BellIcon as BellIconTag } from "@spectrum-web-components/icons-workflow";
import type { IconBell } from "@spectrum-web-components/icons-workflow/src/elements/IconBell.d.ts";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-bell.js";

export const BellIcon = "sp-icon-bell" as unknown as FC<typeof BellIconTag | Partial<IconBell>>;
