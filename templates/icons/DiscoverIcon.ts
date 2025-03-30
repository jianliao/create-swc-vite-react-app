import { FC } from "react";
import type { DiscoverIcon as DiscoverIconTag } from "@spectrum-web-components/icons-workflow";
import type { IconDiscover } from "@spectrum-web-components/icons-workflow/src/elements/IconDiscover.d.ts";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-discover.js";

export const DiscoverIcon = "sp-icon-discover" as unknown as FC<typeof DiscoverIconTag | Partial<IconDiscover>>;
