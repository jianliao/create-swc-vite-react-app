import { FC } from "react";
import type { PluginIcon as PluginIconTag } from "@spectrum-web-components/icons-workflow/src/icons-s2/plugin.js";
import type { IconPlugin } from "@spectrum-web-components/icons-workflow/src/elements/IconPlugin.d.ts";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-plugin.js";

export const PluginIcon = "sp-icon-plugin" as unknown as FC<typeof PluginIconTag | Partial<IconPlugin>>;
