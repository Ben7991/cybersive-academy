'use client'

import Link from 'next/link'

import { AnchorProps, ButtonProps } from './Button.types'
import { getBtnVariantClassName } from './Button.util'

export default function Button({
  className,
  ...remainingProps
}: AnchorProps | ButtonProps) {
  const variantClassName = getBtnVariantClassName(remainingProps.variant)

  if (remainingProps.el === 'link') {
    return (
      <Link
        className={`${className} ${variantClassName} py-1.5 rounded-md`}
        {...remainingProps}
      >
        {remainingProps.children}
      </Link>
    )
  }

  return (
    <button
      className={`${className} ${variantClassName} py-1.5 rounded-md disabled:cursor-not-allowed disabled:opacity-70`}
      {...remainingProps}
    >
      {remainingProps.children}
    </button>
  )
}
