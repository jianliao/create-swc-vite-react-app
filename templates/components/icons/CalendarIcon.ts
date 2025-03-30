import { FC } from "react";
import type { CalendarIcon as CalendarIconTag } from "@spectrum-web-components/icons-workflow";
import type { IconCalendar } from "@spectrum-web-components/icons-workflow/src/elements/IconCalendar.d.ts";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-calendar.js";

export const CalendarIcon = "sp-icon-calendar" as unknown as FC<typeof CalendarIconTag | Partial<IconCalendar>>;
