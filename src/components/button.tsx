import type { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className={classNames('w-full py-2 rounded-lg bg-black text-white', props.className)}>
      {children}
    </button>
  );
}
