import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/search/sp-search.js';

import { Search as SpSearch } from '@spectrum-web-components/search';

export const Search = "sp-search" as unknown as FC<ReactComponentProps & Omit<Partial<SpSearch>, 'style' | 'children'> & HTMLAttributes<SpSearch>>; 