import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/thumbnail/sp-thumbnail.js';

import { Thumbnail as SpThumbnail } from '@spectrum-web-components/thumbnail';

export const Thumbnail = "sp-thumbnail" as unknown as FC<ReactComponentProps & Omit<Partial<SpThumbnail>, 'style' | 'children'> & HTMLAttributes<SpThumbnail>>; 