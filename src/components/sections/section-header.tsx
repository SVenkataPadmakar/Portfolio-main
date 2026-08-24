import { cn } from "@/lib/utils"
import Link from "next/link"
import { BoxReveal } from "../reveal-animations"
import { ReactNode } from "react"

export const SectionHeader = ({ id, title, desc, className }: { id: string, title: string | ReactNode, desc?: string, className?: string }) => {
  return (
    <div className={cn("text-center mb-16 mt-8 w-full select-none", className)}>
      <Link href={`#${id}`}>
        <BoxReveal width="100%">
          <h2
            className={cn(
              "text-4xl text-center md:text-7xl font-bold tracking-tight",
              "text-slate-800 dark:text-white"
            )}
          >
            {title}
          </h2>
        </BoxReveal>
      </Link>
      {desc && (
        <p className="mx-auto mt-4 max-w-2xl font-normal text-sm md:text-base text-center text-slate-500 dark:text-zinc-400">
          {desc}
        </p>
      )}
    </div>
  )
}
