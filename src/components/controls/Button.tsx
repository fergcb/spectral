import { DetailedHTMLProps, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import { OpenInNewRounded } from '@mui/icons-material'

import { Icon } from '../typography'

interface BaseButtonProps {
  variant?: 'primary' | 'secondary'
  ghost?: boolean
  disabled?: boolean
}

type ButtonLinkProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & BaseButtonProps & {
  href: string
  external?: boolean
}

type ButtonButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & BaseButtonProps & {
  onClick: () => void
}

export type ButtonProps = ButtonLinkProps | ButtonButtonProps

function isLink (props: ButtonProps): props is ButtonLinkProps {
  return (props as ButtonLinkProps).href !== undefined
}

export default function Button (props: ButtonProps): JSX.Element {
  return <BaseButton className="inline-flex items-center justify-center gap-2 rounded px-3 py-2 font-bold transition-colors duration-150" {...props} />
}

export function BaseButton ({ ghost = false, ...props }: ButtonProps): JSX.Element {
  return ghost
    ? <GhostButton {...props} />
    : <SolidButton {...props} />
}

export function SolidButton ({ variant = 'primary', className, ...props }: ButtonProps): JSX.Element {
  const Tag = isLink(props) ? LinkButton : ButtonButton

  if (props.disabled === true) {
    return <Tag {...props} className={`${className ?? ''} cursor-not-allowed bg-neutral-500 text-neutral-100`} />
  }

  switch (variant) {
    case 'primary':
      return <Tag {...props} className={`${className ?? ''} bg-primary-500 hover:bg-primary-400 text-neutral-100`} />
    case 'secondary':
      return <Tag {...props} className={`${className ?? ''} bg-secondary-500 hover:bg-secondary-400 text-neutral-100`} />
  }
}

export function GhostButton ({ variant = 'primary', className, ...props }: ButtonProps): JSX.Element {
  const Tag = isLink(props) ? LinkButton : ButtonButton

  if (props.disabled === true) {
    return <Tag {...props} className={`${className ?? ''} cursor-not-allowed bg-transparent text-neutral-500`} />
  }

  switch (variant) {
    case 'primary':
      return <Tag {...props} className={`${className ?? ''} text-primary-500 hover:text-primary-400 bg-transparent`} />
    case 'secondary':
      return <Tag {...props} className={`${className ?? ''} text-secondary-500 hover:text-secondary-400 bg-transparent`} />
  }
}

function ButtonButton ({ children, className, ...props }: ButtonProps): JSX.Element {
  return <button className={className} {...(props as ButtonButtonProps)}>
    {children}
  </button>
}

function LinkButton ({ children, className, ...props }: ButtonProps): JSX.Element {
  const { external = false } = (props as ButtonLinkProps)

  return <a className={className} {...(props as ButtonLinkProps)}>
    {children}
    {external && <Icon icon={<OpenInNewRounded fontSize="small" />} />}
  </a>
}
