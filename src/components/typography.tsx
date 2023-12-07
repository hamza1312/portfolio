import { cva, VariantProps } from "class-variance-authority"
import React from "react"

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      p: 'leading-7 [&:not(:first-child)]:mt-6',
    }
  },
})

export interface TypographyProps
  extends React.ButtonHTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyVariants> { }

export const Typography = React.forwardRef<HTMLHeadingElement, TypographyProps>(({ className, variant, ...props}, ref) => {
    if (!variant) return
    const Comp = variant
    return <Comp className={typographyVariants({ variant, className})} ref={ref} {...props} />
})
