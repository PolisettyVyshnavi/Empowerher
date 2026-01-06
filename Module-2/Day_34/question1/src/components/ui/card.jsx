import * as React from "react";
import { cn } from "../../lib/utils";
export function Card({ className, ...props }) {
  return (
    <div className={cn("rounded-lg border bg-white shadow-sm", className)} {...props} />
  );
}
export function CardHeader({ className, ...props }) {
  return <div className={cn("p-4 font-semibold text-lg", className)} {...props} />;
}
export function CardContent({ className, ...props }) {
  return <div className={cn("p-4", className)} {...props} />;
}
export function CardFooter({ className, ...props }) {
  return <div className={cn("p-4 border-t", className)} {...props} />;
}