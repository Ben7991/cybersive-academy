import Headline from '@/components/atoms/headline/Headline'

type SectionHeadingProps = {
  text: string
  className?: string
}

export default function SectionHeading({
  text,
  className,
}: SectionHeadingProps) {
  return (
    <div className="relative inline-block">
      <div className="absolute w-12 h-12 rounded-full bg-[var(--light-blue-100)] -z-[1] -top-2 -left-3" />
      <Headline tag="h3" className={`${className}`}>
        {text}
      </Headline>
    </div>
  )
}
