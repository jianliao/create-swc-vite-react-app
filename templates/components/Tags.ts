import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/tags/sp-tags.js';
import '@spectrum-web-components/tags/sp-tag.js';

import { 
    Tags as SpTags, 
    Tag as SpTag 
} from '@spectrum-web-components/tags';

export const Tags = "sp-tags" as unknown as FC<ReactComponentProps & Omit<Partial<SpTags>, 'style' | 'children'> & HTMLAttributes<SpTags>>;
export const Tag = "sp-tag" as unknown as FC<ReactComponentProps & Omit<Partial<SpTag>, 'style' | 'children'> & HTMLAttributes<SpTag>>; 