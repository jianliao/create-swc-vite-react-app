import { FC } from "react";
import type { Branch1Icon as BrandIconTag } from "@spectrum-web-components/icons-workflow";
import type { IconBrand } from "@spectrum-web-components/icons-workflow/src/elements/IconBrand.d.ts";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-brand.js";

export const BrandIcon = "sp-icon-brand" as unknown as FC<typeof BrandIconTag | Partial<IconBrand>>;
