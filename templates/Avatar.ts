import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/avatar/sp-avatar.js';

import { Avatar as SpAvatar } from '@spectrum-web-components/avatar';

export const Avatar = "sp-avatar" as unknown as FC<ReactComponentProps & Omit<Partial<SpAvatar>, 'style' | 'children'> & HTMLAttributes<SpAvatar>>; 