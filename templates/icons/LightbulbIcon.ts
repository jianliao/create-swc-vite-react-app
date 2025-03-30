import { FC } from "react";
import type { LightbulbIcon as LightbulbIconTag } from "@spectrum-web-components/icons-workflow/src/icons-s2/Lightbulb.js";
import type { IconLightbulb } from "@spectrum-web-components/icons-workflow/src/elements/IconLightBulb.d.ts";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-lightbulb.js";

export const LightbulbIcon = "sp-icon-lightbulb" as unknown as FC<typeof LightbulbIconTag | Partial<IconLightbulb>>;
