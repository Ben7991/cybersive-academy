"use client";

import { ComponentPropsWithoutRef } from "react";

export function Container(props: ComponentPropsWithoutRef<"div">) {
  const { className, ...remainingProps } = props;
  return (
    <div
      className={`w-full md:w-[95%] lg:w-[90%] xl:w-[80%] 2xl:w-[1200px] px-4 mx-auto ${className}`}
      {...remainingProps}
    >
      {remainingProps.children}
    </div>
  );
}

export function Row(props: ComponentPropsWithoutRef<"div">) {
  const { className, ...remainingProps } = props;
  return (
    <div className={`w-full flex ${className}`} {...remainingProps}>
      {remainingProps.children}
    </div>
  );
}

export function Col(props: ComponentPropsWithoutRef<"div">) {
  const { className, ...remainingProps } = props;
  return (
    <div className={`basis-full ${className}`} {...remainingProps}>
      {remainingProps.children}
    </div>
  );
}
