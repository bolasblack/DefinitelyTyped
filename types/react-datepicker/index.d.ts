// Type definitions for react-datepicker 4.1
// Project: https://github.com/Hacker0x01/react-datepicker
// Definitions by: Rajab Shakirov <https://github.com/radziksh>,
//                 Andrey Balokha <https://github.com/andrewBalekha>,
//                 Greg Smith <https://github.com/smrq>,
//                 Roy Xue <https://github.com/royxue>
//                 Koala Human <https://github.com/KoalaHuman>
//                 Justin Grant <https://github.com/justingrant>
//                 Jake Boone <https://github.com/jakeboone02>
//                 Roman Nuritdinov <https://github.com/Ky6uk>
//                 Avi Klaiman <https://github.com/aviklai>
//                 Naoki Sekiguchi <https://github.com/seckie>
//                 tu4mo <https://github.com/tu4mo>
//                 Kerry Gougeon <https://github.com/kerry-g>
//                 Shiftr Tech SAS <https://github.com/ShiftrTechSAS>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import * as Popper from 'popper.js';
import { Locale } from 'date-fns';

export function registerLocale(localeName: string, localeData: {}): void;
export function setDefaultLocale(localeName: string): void;
export function getDefaultLocale(): string;
export function CalendarContainer(props: {
    className?: string | undefined;
    children?: React.ReactNode | undefined;
    showPopperArrow?: boolean | undefined;
    arrowProps?: { [propName: string]: any } | undefined;
}): React.ReactElement;

interface HighlightDates {
    [className: string]: Date[];
}

export interface ReactDatePickerProps {
    adjustDateOnChange?: boolean | undefined;
    allowSameDay?: boolean | undefined;
    ariaDescribedBy?: string | undefined;
    ariaLabelClose?: string | undefined;
    ariaLabelledBy?: string | undefined;
    ariaRequired?: string | undefined;
    autoComplete?: string | undefined;
    autoFocus?: boolean | undefined;
    calendarClassName?: string | undefined;
    calendarContainer?(props: { children: React.ReactNode[] }): React.ReactNode;
    calendarStartDay?: number | undefined;
    children?: React.ReactNode | undefined;
    chooseDayAriaLabelPrefix?: string | undefined;
    className?: string | undefined;
    clearButtonTitle?: string | undefined;
    closeOnScroll?: boolean | ((e: Event) => boolean) | undefined;
    customInput?: React.ReactNode | undefined;
    customInputRef?: string | undefined;
    customTimeInput?: React.ReactNode | undefined;
    dateFormat?: string | string[] | undefined;
    dateFormatCalendar?: string | undefined;
    dayClassName?(date: Date): string | null;
    weekDayClassName?(date: Date): string | null;
    monthClassName?(date: Date): string | null;
    timeClassName?(date: Date): string | null;
    disabledDayAriaLabelPrefix?: string | undefined;
    disabled?: boolean | undefined;
    disabledKeyboardNavigation?: boolean | undefined;
    dropdownMode?: 'scroll' | 'select' | undefined;
    endDate?: Date | null | undefined;
    excludeDates?: Date[] | undefined;
    excludeTimes?: Date[] | undefined;
    filterDate?(date: Date): boolean;
    filterTime?(date: Date): boolean;
    fixedHeight?: boolean | undefined;
    forceShowMonthNavigation?: boolean | undefined;
    formatWeekDay?(formattedDate: string): React.ReactNode;
    formatWeekNumber?(date: Date): string | number;
    highlightDates?: Array<HighlightDates | Date> | undefined;
    id?: string | undefined;
    includeDates?: Date[] | undefined;
    includeTimes?: Date[] | undefined;
    injectTimes?: Date[] | undefined;
    inline?: boolean | undefined;
    focusSelectedMonth?: boolean | undefined;
    isClearable?: boolean | undefined;
    locale?: string | Locale | undefined;
    maxDate?: Date | null | undefined;
    maxTime?: Date | undefined;
    minDate?: Date | null | undefined;
    minTime?: Date | undefined;
    monthsShown?: number | undefined;
    name?: string | undefined;
    nextMonthButtonLabel?: string | React.ReactNode | undefined;
    nextYearButtonLabel?: string | undefined;
    onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
    onCalendarClose?(): void;
    onCalendarOpen?(): void;
    onChange(
        date: Date | [Date, Date] | /* for selectsRange */ null,
        event: React.SyntheticEvent<any> | undefined,
    ): void;
    onChangeRaw?(event: React.FocusEvent<HTMLInputElement>): void;
    onClickOutside?(event: React.MouseEvent<HTMLDivElement>): void;
    onDayMouseEnter?: ((date: Date) => void) | undefined;
    onFocus?(event: React.FocusEvent<HTMLInputElement>): void;
    onInputClick?(): void;
    onInputError?(err: { code: number; msg: string }): void;
    onKeyDown?(event: React.KeyboardEvent<HTMLDivElement>): void;
    onMonthChange?(date: Date): void;
    onMonthMouseLeave?: (() => void) | undefined;
    onSelect?(date: Date, event: React.SyntheticEvent<any> | undefined): void;
    onWeekSelect?(
        firstDayOfWeek: Date,
        weekNumber: string | number,
        event: React.SyntheticEvent<any> | undefined,
    ): void;
    onYearChange?(date: Date): void;
    open?: boolean | undefined;
    openToDate?: Date | undefined;
    peekNextMonth?: boolean | undefined;
    placeholderText?: string | undefined;
    popperClassName?: string | undefined;
    popperContainer?(props: { children: React.ReactNode[] }): React.ReactNode;
    popperModifiers?: Popper.Modifiers | undefined;
    popperPlacement?: Popper.Placement | undefined;
    popperProps?: {} | undefined;
    preventOpenOnFocus?: boolean | undefined;
    previousMonthButtonLabel?: string | React.ReactNode | undefined;
    previousYearButtonLabel?: string | undefined;
    readOnly?: boolean | undefined;
    renderCustomHeader?(params: {
        monthDate: Date;
        date: Date;
        changeYear(year: number): void;
        changeMonth(month: number): void;
        customHeaderCount: number;
        decreaseMonth(): void;
        increaseMonth(): void;
        prevMonthButtonDisabled: boolean;
        nextMonthButtonDisabled: boolean;
        decreaseYear(): void;
        increaseYear(): void;
        prevYearButtonDisabled: boolean;
        nextYearButtonDisabled: boolean;
    }): React.ReactNode;
    renderDayContents?(dayOfMonth: number, date?: Date): React.ReactNode;
    required?: boolean | undefined;
    scrollableMonthYearDropdown?: boolean | undefined;
    scrollableYearDropdown?: boolean | undefined;
    selected?: Date | null | undefined;
    selectsEnd?: boolean | undefined;
    selectsStart?: boolean | undefined;
    selectsRange?: boolean | undefined;
    shouldCloseOnSelect?: boolean | undefined;
    showDisabledMonthNavigation?: boolean | undefined;
    showFullMonthYearPicker?: boolean | undefined;
    showMonthDropdown?: boolean | undefined;
    showMonthYearDropdown?: boolean | undefined;
    showMonthYearPicker?: boolean | undefined;
    showPopperArrow?: boolean | undefined;
    showPreviousMonths?: boolean | undefined;
    showQuarterYearPicker?: boolean | undefined;
    showTimeInput?: boolean | undefined;
    showTimeSelect?: boolean | undefined;
    showTimeSelectOnly?: boolean | undefined;
    showTwoColumnMonthYearPicker?: boolean | undefined;
    showWeekNumbers?: boolean | undefined;
    showYearDropdown?: boolean | undefined;
    showYearPicker?: boolean | undefined;
    startDate?: Date | null | undefined;
    startOpen?: boolean | undefined;
    strictParsing?: boolean | undefined;
    tabIndex?: number | undefined;
    timeCaption?: string | undefined;
    timeFormat?: string | undefined;
    timeInputLabel?: string | undefined;
    timeIntervals?: number | undefined;
    title?: string | undefined;
    todayButton?: React.ReactNode | undefined;
    useShortMonthInDropdown?: boolean | undefined;
    useWeekdaysShort?: boolean | undefined;
    weekAriaLabelPrefix?: string | undefined;
    value?: string | undefined;
    weekLabel?: string | undefined;
    withPortal?: boolean | undefined;
    portalId?: string | undefined;
    wrapperClassName?: string | undefined;
    yearDropdownItemNumber?: number | undefined;
    excludeScrollbar?: boolean | undefined;
    enableTabLoop?: boolean | undefined;
    yearItemNumber?: number | undefined;
}

declare class ReactDatePicker extends React.Component<ReactDatePickerProps> {
    readonly setBlur: () => void;
    readonly setFocus: () => void;
    readonly setOpen: (open: boolean, skipSetBlur?: boolean) => void;
    readonly isCalendarOpen: () => boolean;
}

export default ReactDatePicker;
