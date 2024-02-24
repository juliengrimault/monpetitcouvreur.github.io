import React, { PropsWithChildren } from "react"

interface SectionProps {
    title: string
    subtitle: string
    details: string
}
const SectionLayout = (props: PropsWithChildren<SectionProps>) => {
  return (
      <div className="container mx-auto max-w-6xl py-20 px-5 sm:px-10 md:px-16 lg:px-20">
        <div className="flex flex-col gap-4">
          <span className="text-yellow-600 font-bold text-sm">–{props.subtitle}</span>
          <h2 className="text-4xl font-extrabold">{props.title}</h2>

          <span>{props.details}</span>

          { props.children }

        </div>
      </div>
  )
}

export default SectionLayout