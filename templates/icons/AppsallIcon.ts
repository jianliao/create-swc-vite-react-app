import { FC } from "react";
import type { AppsAllIcon as AppsAllIconTag } from "@spectrum-web-components/icons-workflow/src/icons-s2/AppsAll.js";
import type { IconAppsAll } from "@spectrum-web-components/icons-workflow/src/elements/IconAppsAll.d.ts";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-apps-all.js";

export const AppsAllIcon = "sp-icon-apps-all" as unknown as FC<typeof AppsAllIconTag | Partial<IconAppsAll>>;
