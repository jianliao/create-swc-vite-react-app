import { FC, HTMLAttributes } from 'react';
import { ReactComponentProps } from './types';

import '@spectrum-web-components/asset/sp-asset.js';

import { Asset as SpAsset } from '@spectrum-web-components/asset';

export const Asset = 'sp-asset' as unknown as FC<ReactComponentProps & Omit<Partial<SpAsset>, 'style' | 'children'> & HTMLAttributes<SpAsset>>;
