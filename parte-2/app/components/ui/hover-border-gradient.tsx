"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/libs/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

const CYAN = "126, 231, 231";

const movingMap: Record<Direction, string> = {
  TOP: `radial-gradient(52% 85% at 50% 0%, rgba(${CYAN}, 1) 0%, rgba(${CYAN}, 0.5) 42%, rgba(${CYAN}, 0) 100%)`,
  LEFT: `radial-gradient(42% 72% at 0% 50%, rgba(${CYAN}, 1) 0%, rgba(${CYAN}, 0.5) 42%, rgba(${CYAN}, 0) 100%)`,
  BOTTOM: `radial-gradient(52% 85% at 50% 100%, rgba(${CYAN}, 1) 0%, rgba(${CYAN}, 0.5) 42%, rgba(${CYAN}, 0) 100%)`,
  RIGHT: `radial-gradient(42% 72% at 100% 50%, rgba(${CYAN}, 1) 0%, rgba(${CYAN}, 0.5) 42%, rgba(${CYAN}, 0) 100%)`,
};

const highlight = `radial-gradient(90% 200% at 50% 50%, rgba(${CYAN}, 1) 0%, rgba(${CYAN}, 0.45) 50%, rgba(${CYAN}, 0) 100%)`;

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  surfaceClassName = "bg-black",
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    surfaceClassName?: string;
    duration?: number;
    clockwise?: boolean;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = useCallback(
    (currentDirection: Direction): Direction => {
      const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
      const currentIndex = directions.indexOf(currentDirection);
      const nextIndex = clockwise
        ? (currentIndex - 1 + directions.length) % directions.length
        : (currentIndex + 1) % directions.length;
      return directions[nextIndex]!;
    },
    [clockwise],
  );

  useEffect(() => {
    if (hovered) return;
    const interval = setInterval(() => {
      setDirection((prev) => rotateDirection(prev));
    }, duration * 1000);
    return () => clearInterval(interval);
  }, [hovered, duration, rotateDirection]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex h-min min-w-0 w-full flex-col flex-nowrap items-stretch justify-center gap-10 overflow-visible rounded-full border border-white/10 bg-black/20 p-px shadow-[0_0_20px_rgba(126,231,231,0.35)] decoration-clone transition-shadow duration-300 content-center hover:bg-black/10 hover:shadow-[0_0_36px_rgba(126,231,231,0.6)] dark:bg-white/20",
        containerClassName,
      )}
      {...props}
    >
      <div
        className={cn(
          "z-10 min-w-0 w-full rounded-[inherit] px-4 py-2",
          surfaceClassName,
          className,
        )}
      >
        {children}
      </div>
      <motion.div
        className="absolute inset-0 z-0 flex-none overflow-hidden rounded-[inherit]"
        style={{
          filter: "blur(5px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: Math.max(0.65, duration ?? 1) }}
      />
      <div
        className={cn(
          "absolute inset-[5px] z-[1] flex-none rounded-[inherit]",
          surfaceClassName,
        )}
      />
    </Tag>
  );
}
