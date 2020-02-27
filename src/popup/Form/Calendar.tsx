import BulmaCalendar, { BulmaCalendarOptions } from 'bulma-calendar';
import 'bulma-calendar/dist/css/bulma-calendar.min.css'
import * as React from 'react';

type CalendarProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'label' | 'onChange'> & {
    control?: React.ReactElement;

    displayMode?: BulmaCalendarOptions['displayMode'];

    /**
     * An error message to render.
     */
    error?: React.ReactNode;

    /**
     * A help message to render.
     */
    help?: React.ReactNode;

    /**
     * The name of the HTML element.
     */
    name?: string;

    /**
     * This is fired when the input value has changed.
     *
     * If the input type is `checkbox`, the value is a boolean. If the input type is `number`, the
     * value is a number, otherwise it is a string.
     */
    onChange: (event: { target: HTMLInputElement }, value: Date) => void;

    showHeader?: boolean;

    /**
     * The HTML input type.
     *
     * This may be extended if necessary.
     */
    type?: 'date' | 'time' | 'datetime'
    bulmaCalendarOptions?: BulmaCalendarOptions
  };

/**
 * A Bulma styled form input element.
 */
export default React.forwardRef<HTMLInputElement, CalendarProps>(
  (
    {
      control,
      displayMode,
      error,
      help,
      maxLength,
      name,
      onChange,
      required,
      showHeader = false,
      type = 'datetime',
      value,
      id = name,
      bulmaCalendarOptions,
      ...props
    },
    ref,
  ) => {
    const inputRef = React.useRef<HTMLInputElement>();
    const calendarRef = React.useRef<BulmaCalendar>();

    React.useImperativeHandle(ref, () => inputRef.current!);
    React.useEffect(() => {
      calendarRef.current = new BulmaCalendar(inputRef.current, {
        showHeader,
        type,
        displayMode,
        validateLabel: '确定',
        cancelLabel: '取消',
        clearLabel: '清除',
        todayLabel: '今天',
        nowLabel: '现在',
        minuteSteps: 1,
        ...bulmaCalendarOptions,
      });
    }, [displayMode, showHeader, type]);

    React.useEffect(() => {
      calendarRef.current.on('select', () => {
        onChange({ target: inputRef.current! }, type === 'time' ? calendarRef.current.time.start : calendarRef.current.date.start);
        window['c_' + type] = calendarRef.current
      });
      return () => {
        calendarRef.current.removeListeners('select');
      };
    }, [onChange]);

    return (
        <input
          {...props}
          ref={inputRef as any}
          defaultValue={value}
          id={id}
          maxLength={maxLength}
          name={name}
          required={required}
        />
    )
  })
