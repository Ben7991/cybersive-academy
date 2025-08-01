import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { LinkProps } from 'next/link';

export type ButtonVariant = 'light' | 'primary';

export type AnchorProps = {
  el: 'link';
  variant: ButtonVariant;
  children: ReactNode;
  className?: string;
} & LinkProps;

export type ButtonProps = {
  el: 'button';
  variant: ButtonVariant;
} & ComponentPropsWithoutRef<'button'>;
