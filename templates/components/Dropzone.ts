import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/dropzone/sp-dropzone.js';

import { Dropzone as SpDropzone } from '@spectrum-web-components/dropzone';

export const Dropzone = "sp-dropzone" as unknown as FC<ReactComponentProps & Omit<Partial<SpDropzone>, 'style' | 'children'> & HTMLAttributes<SpDropzone>>; 