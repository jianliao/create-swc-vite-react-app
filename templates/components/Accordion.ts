import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/accordion/sp-accordion.js';
import '@spectrum-web-components/accordion/sp-accordion-item.js';

import { Accordion as SpAccorion, AccordionItem as SpAccordionItem } from '@spectrum-web-components/accordion';

export const Accordion = "sp-accordion" as unknown as FC<ReactComponentProps & Omit<Partial<SpAccorion>, 'style' | 'children'> & HTMLAttributes<SpAccorion>>;
export const AccordionItem = "sp-accordion-item" as unknown as FC<ReactComponentProps & Omit<Partial<SpAccordionItem>, 'style' | 'children'> & HTMLAttributes<SpAccordionItem>>;
