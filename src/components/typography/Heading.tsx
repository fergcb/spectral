import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type HeadingProps = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & {
  size?: 'sm' | 'md' | 'lg'
}

export default function Heading ({ size = 'md', className, children, ...props }: HeadingProps): JSX.Element {
  const textSize = { sm: 'text-4xl', md: 'text-5xl', lg: 'text-6xl' }[size]

  return <h1 {...props} className={`${textSize} font-bold text-neutral-200 ${className ?? ''}`}>
    {children}
  </h1>
}
