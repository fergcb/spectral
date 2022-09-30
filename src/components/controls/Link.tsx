import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'
import { OpenInNewRounded } from '@mui/icons-material'
import { Icon } from '../typography'

export type LinkProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
  href: string
  external?: boolean
}

export default function Link ({ external = false, className, children, ...props }: LinkProps): JSX.Element {
  return (
    <a {...props} className={`${className ?? ''} text-primary-500 hover:text-primary-400 inline-flex items-center gap-1 font-semibold transition-colors duration-150 hover:underline`} target={external ? '_blank' : '_self'}>
      {children}
      {external && <Icon icon={<OpenInNewRounded fontSize="small" />} />}
    </a>
  )
}
