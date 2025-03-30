import { FC, HTMLAttributes } from "react";
import { ReactComponentProps } from "./types";

import '@spectrum-web-components/table/sp-table.js';
import '@spectrum-web-components/table/sp-table-body.js';
import '@spectrum-web-components/table/sp-table-cell.js';
import '@spectrum-web-components/table/sp-table-checkbox-cell.js';
import '@spectrum-web-components/table/sp-table-head.js';
import '@spectrum-web-components/table/sp-table-head-cell.js';
import '@spectrum-web-components/table/sp-table-row.js';

import { 
    Table as SpTable, 
    TableBody as SpTableBody, 
    TableCell as SpTableCell, 
    TableCheckboxCell as SpTableCheckboxCell,
    TableHead as SpTableHead,
    TableHeadCell as SpTableHeadCell,
    TableRow as SpTableRow
} from '@spectrum-web-components/table';

export const Table = "sp-table" as unknown as FC<ReactComponentProps & Omit<Partial<SpTable>, 'style' | 'children'> & HTMLAttributes<SpTable>>;
export const TableBody = "sp-table-body" as unknown as FC<ReactComponentProps & Omit<Partial<SpTableBody>, 'style' | 'children'> & HTMLAttributes<SpTableBody>>;
export const TableCell = "sp-table-cell" as unknown as FC<ReactComponentProps & Omit<Partial<SpTableCell>, 'style' | 'children'> & HTMLAttributes<SpTableCell>>;
export const TableCheckboxCell = "sp-table-checkbox-cell" as unknown as FC<ReactComponentProps & Omit<Partial<SpTableCheckboxCell>, 'style' | 'children'> & HTMLAttributes<SpTableCheckboxCell>>;
export const TableHead = "sp-table-head" as unknown as FC<ReactComponentProps & Omit<Partial<SpTableHead>, 'style' | 'children'> & HTMLAttributes<SpTableHead>>;
export const TableHeadCell = "sp-table-head-cell" as unknown as FC<ReactComponentProps & Omit<Partial<SpTableHeadCell>, 'style' | 'children'> & HTMLAttributes<SpTableHeadCell>>;
export const TableRow = "sp-table-row" as unknown as FC<ReactComponentProps & Omit<Partial<SpTableRow>, 'style' | 'children'> & HTMLAttributes<SpTableRow>>; 