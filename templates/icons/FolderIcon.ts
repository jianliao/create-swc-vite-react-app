import { FC } from "react";
import type { FolderIcon as FolderIconTag } from "@spectrum-web-components/icons-workflow";
import type { IconFolder } from "@spectrum-web-components/icons-workflow/src/elements/IconFolder.d.ts";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-folder.js";

export const FolderIcon = "sp-icon-folder" as unknown as FC<typeof FolderIconTag | Partial<IconFolder>>;
