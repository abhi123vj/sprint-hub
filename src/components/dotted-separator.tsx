import { cn } from "@/lib/utils";
import React from "react";

const DEFAULT_SEPARATOR_COLOR = "#D4D4D8";
interface DottedSeparatorProps {
  className?: string;
  color?: string;
  height?: string;
  dotSize?: string;
  gapSize?: string;
  direction?: "horizontal" | "vertical";
}
export function DottedSeparator({
  className,
  color = DEFAULT_SEPARATOR_COLOR,
  height = "2px",
  dotSize = "2px",
  gapSize = "6px",
  direction = "horizontal",
}: DottedSeparatorProps) {
  const isHorizontal = direction === "horizontal";
  return (
    <div
      className={cn(
        isHorizontal
          ? "w-full flex items-center"
          : "h-full flex flex-col items-center",
        className
      )}
    >
      <div
        className={isHorizontal ? "flex-grow" : "flex-grow-0"}
        style={{
          width: isHorizontal ? "100%" : height,
          height: isHorizontal ? height : "100%",
          backgroundSize: isHorizontal
            ? `${parseInt(dotSize) + parseInt(gapSize)}px ${height}`
            : `${height} ${parseInt(dotSize) + parseInt(gapSize)}px `,
          backgroundImage: `radial-gradient(circle, ${color} 25%, transparent 25%)`,
        }}
      ></div>
    </div>
  );
}
