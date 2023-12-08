import { cn } from "@/lib/utils"


export type ListyProps =  React.HTMLAttributes<HTMLLIElement>
export const Listy = ({ className, children, ...props}: ListyProps) => {
  return (
    <li className={cn("space-x-2 font-medium", className)} {...props}><span className="text-blue-600 font-bold select-none">•</span>{children}</li>
  )
}
