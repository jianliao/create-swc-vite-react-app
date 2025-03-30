import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/breadcrumbs/sp-breadcrumbs.js';
import '@spectrum-web-components/breadcrumbs/sp-breadcrumb-item.js';

import { Breadcrumbs as SpBreadcrumbs, BreadcrumbItem as SpBreadcrumbItem } from '@spectrum-web-components/breadcrumbs';

export const Breadcrumbs = "sp-breadcrumbs" as unknown as FC<ReactComponentProps & Omit<Partial<SpBreadcrumbs>, 'style' | 'children'> & HTMLAttributes<SpBreadcrumbs>>;
export const BreadcrumbItem = "sp-breadcrumb-item" as unknown as FC<ReactComponentProps & Omit<Partial<SpBreadcrumbItem>, 'style' | 'children'> & HTMLAttributes<SpBreadcrumbItem>>; 