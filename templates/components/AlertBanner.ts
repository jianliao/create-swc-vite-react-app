import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/alert-banner/sp-alert-banner.js';

import { AlertBanner as SpAlertBanner } from '@spectrum-web-components/alert-banner';

export const AlertBanner = "sp-alert-banner" as unknown as FC<ReactComponentProps & Omit<Partial<SpAlertBanner>, 'style' | 'children'> & HTMLAttributes<SpAlertBanner>>; 