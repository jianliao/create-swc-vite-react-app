import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/split-view/sp-split-view.js';

import { SplitView as SpSplitView } from '@spectrum-web-components/split-view';

export const SplitView = "sp-split-view" as unknown as FC<ReactComponentProps & Omit<Partial<SpSplitView>, 'style' | 'children'> & HTMLAttributes<SpSplitView>>; 