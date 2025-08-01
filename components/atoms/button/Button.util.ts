import { ButtonVariant } from './Button.types';

export const getBtnVariantClassName = (variant: ButtonVariant): string => {
  if (variant === 'light') {
    return 'border border-gray-300 hover:bg-white';
  }
  return 'bg-[var(--dark-blue-100)] text-white hover:bg-[var(--dark-blue-200)]';
};
