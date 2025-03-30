import { FC } from "react";
import type { MenuHamburgerIcon as MenuHamburgerIconTag } from "@spectrum-web-components/icons-workflow/src/icons-s2/menuhamburger.js";
import type { IconMenuHamburger } from "@spectrum-web-components/icons-workflow/src/elements/IconMenuHamburger.d.ts";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-menu-hamburger.js";

export const MenuHamburgerIcon = "sp-icon-menu-hamburger" as unknown as FC<typeof MenuHamburgerIconTag | Partial<IconMenuHamburger>>;
