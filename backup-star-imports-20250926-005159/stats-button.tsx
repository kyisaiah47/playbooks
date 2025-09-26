'use client';

import * as React from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useInView,
  type HTMLMotionProps,
  type SpringOptions,
  type UseInViewOptions,
} from 'motion/react';

import { cn } from '@/lib/utils';
import { SlidingNumber } from '@/components/ui/kibo-ui/sliding-number';

type FormatNumberResult = { number: string[]; unit: string };

function formatNumber(num: number, formatted: boolean): FormatNumberResult {
  if (formatted) {
    if (num < 1000) {
      return { number: [num.toString()], unit: '' };
    }
    const units = ['k', 'M', 'B', 'T'];
    let unitIndex = 0;
    let n = num;
    while (n >= 1000 && unitIndex < units.length) {
      n /= 1000;
      unitIndex++;
    }
    const finalNumber = Math.floor(n).toString();
    return { number: [finalNumber], unit: units[unitIndex - 1] ?? '' };
  } else {
    return { number: num.toLocaleString('en-US').split(','), unit: '' };
  }
}

type StatsButtonProps = HTMLMotionProps<'div'> & {
  icon: React.ComponentType<any>;
  label: string;
  count: number;
  transition?: SpringOptions;
  formatted?: boolean;
  inView?: boolean;
  inViewMargin?: UseInViewOptions['margin'];
  inViewOnce?: boolean;
};

function StatsButton({
  ref,
  icon: Icon,
  label,
  count,
  transition = { stiffness: 90, damping: 50 },
  formatted = false,
  inView = false,
  inViewOnce = true,
  inViewMargin = '0px',
  className,
  ...props
}: StatsButtonProps) {
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, transition);
  const motionNumberRef = React.useRef(0);
  const isCompletedRef = React.useRef(false);
  const [, forceRender] = React.useReducer((x) => x + 1, 0);
  const [isCompleted, setIsCompleted] = React.useState(false);
  const [displayParticles, setDisplayParticles] = React.useState(false);

  const handleDisplayParticles = React.useCallback(() => {
    setDisplayParticles(true);
    setTimeout(() => setDisplayParticles(false), 1500);
  }, []);

  const localRef = React.useRef<HTMLDivElement>(null);
  React.useImperativeHandle(ref, () => localRef.current as HTMLDivElement);

  const inViewResult = useInView(localRef, {
    once: inViewOnce,
    margin: inViewMargin,
  });
  const isComponentInView = !inView || inViewResult;

  React.useEffect(() => {
    const unsubscribe = springVal.on('change', (latest: number) => {
      const newValue = Math.round(latest);
      if (motionNumberRef.current !== newValue) {
        motionNumberRef.current = newValue;
        forceRender();
      }
      if (count !== 0 && newValue >= count && !isCompletedRef.current) {
        isCompletedRef.current = true;
        setIsCompleted(true);
        handleDisplayParticles();
      }
    });
    return () => unsubscribe();
  }, [springVal, count, handleDisplayParticles]);

  React.useEffect(() => {
    if (count > 0 && isComponentInView) motionVal.set(count);
  }, [motionVal, count, isComponentInView]);

  const formattedResult = formatNumber(motionNumberRef.current, formatted);
  const ghostFormattedNumber = formatNumber(count, formatted);

  const renderNumberSegments = (
    segments: string[],
    unit: string,
    isGhost: boolean,
  ) => (
    <span
      className={cn(
        'flex items-center gap-px',
        isGhost ? 'invisible' : 'absolute top-0 left-0',
      )}
    >
      {segments.map((segment, index) => (
        <React.Fragment key={index}>
          {Array.from(segment).map((digit, digitIndex) => (
            <SlidingNumber key={`${index}-${digitIndex}`} number={+digit} />
          ))}
        </React.Fragment>
      ))}

      {formatted && unit && <span className="leading-[1]">{unit}</span>}
    </span>
  );

  const handleClick = React.useCallback(() => {
    handleDisplayParticles();
  }, [handleDisplayParticles]);

  return (
    <motion.div
      ref={localRef}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      onClick={handleClick}
      className={cn(
        "flex items-center gap-2 text-sm rounded-lg px-4 py-2 h-10 cursor-pointer whitespace-nowrap font-medium transition-colors [&_svg:not([class*='size-'])]:size-[18px] shrink-0 [&_svg]:shrink-0",
        className,
      )}
      {...props}
    >
      <Icon className="size-4" />
      <span>{label}</span>
      <span className="relative inline-flex">
        {renderNumberSegments(
          ghostFormattedNumber.number,
          ghostFormattedNumber.unit,
          true,
        )}
        {renderNumberSegments(
          formattedResult.number,
          formattedResult.unit,
          false,
        )}
      </span>
    </motion.div>
  );
}

export { StatsButton, type StatsButtonProps };