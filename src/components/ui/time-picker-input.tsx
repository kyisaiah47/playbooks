"use client"

import * as React from "react"
import { Input } from "./input"
import { cn } from "@/lib/utils"

export interface TimePickerInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  picker: "hours" | "minutes" | "seconds"
  date?: Date
  setDate: (date: Date | undefined) => void
  onRightFocus?: () => void
  onLeftFocus?: () => void
}

const TimePickerInput = React.forwardRef<
  HTMLInputElement,
  TimePickerInputProps
>(
  (
    {
      className,
      type = "number",
      value,
      id,
      name,
      date = new Date(new Date().setHours(0, 0, 0, 0)),
      setDate,
      onChange,
      onKeyDown,
      picker,
      onLeftFocus,
      onRightFocus,
      ...props
    },
    ref,
  ) => {
    const [flag, setFlag] = React.useState(false)
    const [prevIntKey, setPrevIntKey] = React.useState("0")

    React.useEffect(() => {
      if (flag) {
        const timer = setTimeout(() => {
          setFlag(false)
        }, 2000)

        return () => clearTimeout(timer)
      }
    }, [flag])

    const calculatedValue = React.useMemo(() => {
      return getDateByType(date, picker)
    }, [date, picker])

    const calculateNewValue = React.useCallback(
      (key: string) => {
        /*
         * If picker is '12hours' and the user enters '1', the value will be '01'
         * If the user enters '13', the value will be '01' (13 % 12 = 1)
         */
        if (picker === "hours") {
          if (flag && calculatedValue.slice(0, 1) === "1" && prevIntKey === "1") {
            return "12"
          } else if (flag && prevIntKey === "1") {
            return `1${key}`
          } else if (flag && prevIntKey === "0" && key !== "0") {
            return `0${key}`
          } else {
            if (key === "0") {
              return "00"
            } else if (parseInt(key) > 2) {
              return `0${key}`
            } else {
              return `${key}0`
            }
          }
        }

        /*
         * If picker is 'minutes' or 'seconds' and the user enters '9', the value will be '09'
         * If the user enters '99', the value will be '09' (99 % 60 = 39 -> 09)
         * If the user enters '61', the value will be '01' (61 % 60 = 1 -> 01)
         */
        if (picker === "minutes" || picker === "seconds") {
          if (flag && prevIntKey === "1") {
            return `1${key}`
          } else if (flag && prevIntKey === "2") {
            return `2${key}`
          } else if (flag && prevIntKey === "3") {
            return `3${key}`
          } else if (flag && prevIntKey === "4") {
            return `4${key}`
          } else if (flag && prevIntKey === "5") {
            return `5${key}`
          } else {
            if (key === "0") {
              return "00"
            } else if (parseInt(key) > 5) {
              return `0${key}`
            } else {
              return `${key}0`
            }
          }
        }
      },
      [flag, prevIntKey, calculatedValue, picker],
    )

    const handleKeyDown = React.useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Tab") return
        e.preventDefault()
        if (e.key === "ArrowRight") onRightFocus?.()
        if (e.key === "ArrowLeft") onLeftFocus?.()
        if (["ArrowUp", "ArrowDown"].includes(e.key)) {
          const step = e.key === "ArrowUp" ? 1 : -1
          const newValue = getArrowByType(calculatedValue, step, picker)
          if (flag) setFlag(false)
          const tempDate = new Date(date)
          setDate(setDateByType(tempDate, newValue, picker, flag))
        }
        if (e.key >= "0" && e.key <= "9") {
          if (flag && typeof calculateNewValue(e.key) !== "undefined") {
            const newValue = calculateNewValue(e.key) as string
            const tempDate = new Date(date)
            setDate(setDateByType(tempDate, newValue, picker, flag))
            setFlag(false)
          } else {
            const newValue = calculateNewValue(e.key) as string
            const tempDate = new Date(date)
            setDate(setDateByType(tempDate, newValue.slice(0, 1), picker, flag))
            setPrevIntKey(newValue.slice(0, 1))
            setFlag(true)
          }
        }
      },
      [
        onLeftFocus,
        onRightFocus,
        calculatedValue,
        flag,
        calculateNewValue,
        date,
        setDate,
        picker,
      ],
    )

    return (
      <Input
        ref={ref}
        id={id || picker}
        name={name || picker}
        className={cn(
          "w-[48px] text-center font-mono text-base tabular-nums caret-transparent focus:bg-accent focus:text-accent-foreground [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
          className,
        )}
        value={value || calculatedValue}
        onChange={(e) => {
          e.preventDefault()
          onChange?.(e)
        }}
        type={type}
        inputMode="decimal"
        onKeyDown={(e) => {
          onKeyDown?.(e)
          handleKeyDown(e)
        }}
        {...props}
      />
    )
  },
)

TimePickerInput.displayName = "TimePickerInput"

export { TimePickerInput }

/**
 * regular expression to check for valid hour format (01-23)
 */
export function isValidHour(value: string) {
  return /^(0[0-9]|1[0-9]|2[0-3])$/.test(value)
}

/**
 * regular expression to check for valid 12 hour format (01-12)
 */
export function isValid12Hour(value: string) {
  return /^(0[1-9]|1[0-2])$/.test(value)
}

/**
 * regular expression to check for valid minute format (00-59)
 */
export function isValidMinuteOrSecond(value: string) {
  return /^[0-5][0-9]$/.test(value)
}

type GetValidNumberConfig = { max: number; min?: number; loop?: boolean }

export function getValidNumber(
  value: string,
  { max, min = 0, loop = false }: GetValidNumberConfig,
) {
  let numericValue = parseInt(value, 10)

  if (!isNaN(numericValue)) {
    if (!loop) {
      if (numericValue > max) numericValue = max
      if (numericValue < min) numericValue = min
    } else {
      if (numericValue > max) numericValue = min
      if (numericValue < min) numericValue = max
    }
    return numericValue.toString().padStart(2, "0")
  }

  return "00"
}

export function getValidHour(value: string) {
  return getValidNumber(value, { max: 23 })
}

export function getValid12Hour(value: string) {
  return getValidNumber(value, { min: 1, max: 12 })
}

export function getValidMinuteOrSecond(value: string) {
  return getValidNumber(value, { max: 59 })
}

type GetValidArrowNumberConfig = {
  min: number
  max: number
  step: number
}

export function getValidArrowNumber(
  value: string,
  { min, max, step }: GetValidArrowNumberConfig,
) {
  let numericValue = parseInt(value, 10)
  if (!isNaN(numericValue)) {
    numericValue += step
    return getValidNumber(String(numericValue), { min, max, loop: true })
  }
  return "00"
}

export function getValidArrowHour(value: string, step: number) {
  return getValidArrowNumber(value, { min: 0, max: 23, step })
}

export function getValidArrow12Hour(value: string, step: number) {
  return getValidArrowNumber(value, { min: 1, max: 12, step })
}

export function getValidArrowMinuteOrSecond(value: string, step: number) {
  return getValidArrowNumber(value, { min: 0, max: 59, step })
}

export function setMinutes(date: Date, value: string) {
  const minutes = getValidMinuteOrSecond(value)
  date.setMinutes(parseInt(minutes, 10))
  return date
}

export function setSeconds(date: Date, value: string) {
  const seconds = getValidMinuteOrSecond(value)
  date.setSeconds(parseInt(seconds, 10))
  return date
}

export function setHours(date: Date, value: string) {
  const hours = getValidHour(value)
  date.setHours(parseInt(hours, 10))
  return date
}

export function set12Hours(date: Date, value: string, period: string) {
  const hours = parseInt(getValid12Hour(value), 10)
  const convertedHours = convert12HourTo24Hour(hours, period)
  date.setHours(convertedHours)
  return date
}

export function setDateByType(
  date: Date,
  value: string,
  type: "minutes" | "seconds" | "hours" | "12hours",
  period?: string,
) {
  switch (type) {
    case "minutes":
      return setMinutes(date, value)
    case "seconds":
      return setSeconds(date, value)
    case "hours":
      return setHours(date, value)
    case "12hours": {
      if (!period) return date
      return set12Hours(date, value, period)
    }
    default:
      return date
  }
}

export function getDateByType(
  date?: Date,
  type?: "minutes" | "seconds" | "hours" | "12hours",
) {
  if (!date || !type) return "00"
  switch (type) {
    case "minutes":
      return getValidMinuteOrSecond(String(date.getMinutes()))
    case "seconds":
      return getValidMinuteOrSecond(String(date.getSeconds()))
    case "hours":
      return getValidHour(String(date.getHours()))
    case "12hours":
      const hours = display12HourValue(date.getHours())
      return getValid12Hour(String(hours))
    default:
      return "00"
  }
}

export function getArrowByType(
  value: string,
  step: number,
  type: "minutes" | "seconds" | "hours" | "12hours",
) {
  switch (type) {
    case "minutes":
      return getValidArrowMinuteOrSecond(value, step)
    case "seconds":
      return getValidArrowMinuteOrSecond(value, step)
    case "hours":
      return getValidArrowHour(value, step)
    case "12hours":
      return getValidArrow12Hour(value, step)
    default:
      return "00"
  }
}

/**
 * handles the conversion of 12-hour time to 24-hour time
 */
export function convert12HourTo24Hour(hour: number, period: string): number {
  if (period === "AM") {
    if (hour === 12) {
      return 0
    }
    return hour
  } else {
    if (hour === 12) {
      return 12
    }
    return hour + 12
  }
}

/**
 * handles the display of 12-hour time
 */
export function display12HourValue(hours: number) {
  if (hours === 0) {
    return 12
  } else if (hours >= 13) {
    return hours - 12
  } else {
    return hours
  }
}

/**
 * determines the period (AM/PM) based on the hour
 */
export function determineAmPm(hour: number): "AM" | "PM" {
  return hour < 12 ? "AM" : "PM"
}