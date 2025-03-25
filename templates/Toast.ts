import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";
import { Toast as SpToast } from "@spectrum-web-components/toast";

import '@spectrum-web-components/toast/sp-toast.js';


export const Toast = "sp-toast" as unknown as FC<ReactComponentProps & Omit<Partial<SpToast>, 'style' | 'children'> & HTMLAttributes<SpToast>>;
