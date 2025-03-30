import { FC } from "react";
import type { LightIcon as LightIconTag } from "@spectrum-web-components/icons-workflow";
import type { IconLight } from "@spectrum-web-components/icons-workflow/src/elements/IconLight.d.ts";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-light.js";

export const LightIcon = "sp-icon-light" as unknown as FC<typeof LightIconTag | Partial<IconLight>>;
