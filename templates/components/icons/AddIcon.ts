import { FC } from "react";
import type { AddIcon as AddIconTag } from "@spectrum-web-components/icons-workflow";
import type { IconAdd } from "@spectrum-web-components/icons-workflow/src/elements/IconAdd.d.ts";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-add.js";

export const AddIcon = "sp-icon-add" as unknown as FC<typeof AddIconTag | Partial<IconAdd>>;
