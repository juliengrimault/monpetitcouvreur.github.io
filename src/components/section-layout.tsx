import React, { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge";

interface SectionProps extends SectionHeaderProps {
  details?: string
  detailsClassName?: string
}
const SectionLayout = (props: PropsWithChildren<SectionProps>) => {
  return (
    <CenteredSection>
      <SectionHeader title={props.title} subtitle={props.subtitle}>
        {
          props.details && <span className={props.detailsClassName ? props.detailsClassName : ''}>{props.details}</span>
        }

        {props.children}
      </SectionHeader>
    </CenteredSection>
  )
}

interface CenteredSectionProps {
  className?: string
}
export const CenteredSection = (props: PropsWithChildren<CenteredSectionProps>) => {
  const classes = twMerge(`
    container mx-auto max-w-6xl py-20 px-5 sm:px-10 md:px-16 lg:px-20
    ${props.className ?? ""}
  `);
  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle: string
}

export const SectionHeader = (props: PropsWithChildren<SectionHeaderProps>) => {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-yellow-600 font-bold text-sm">{props.subtitle}</span>
      <h2 className="text-5xl font-extrabold">{props.title}</h2>

      {props.children}

    </div>
  )
}

export default SectionLayout