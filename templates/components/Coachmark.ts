import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/coachmark/sp-coachmark.js';
import '@spectrum-web-components/coachmark/sp-coach-indicator.js';

import { Coachmark as SpCoachmark, CoachIndicator as SpCoachIndicator } from '@spectrum-web-components/coachmark';

export const Coachmark = "sp-coachmark" as unknown as FC<ReactComponentProps & Omit<Partial<SpCoachmark>, 'style' | 'children'> & HTMLAttributes<SpCoachmark>>;
export const CoachIndicator = "sp-coach-indicator" as unknown as FC<ReactComponentProps & Omit<Partial<SpCoachIndicator>, 'style' | 'children'> & HTMLAttributes<SpCoachIndicator>>;