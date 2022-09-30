import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type SubheadingProps = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & {
  size?: 'sm' | 'md' | 'lg'
}

export default function Subheading ({ size = 'md', className, children, ...props }: SubheadingProps): JSX.Element {
  const textSize = { sm: 'text-xl', md: 'text-2xl', lg: 'text-3xl' }[size]

  return <h2 {...props} className={`${textSize} font-bold text-neutral-300 ${className ?? ''}`}>
    {children}
  </h2>
}
