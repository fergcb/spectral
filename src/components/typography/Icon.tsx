export interface IconProps {
  icon: any
}

export default function Icon ({ icon }: IconProps): JSX.Element {
  return (
    <span className="inline-flex items-center justify-center">
      {icon}
    </span>
  )
}
