'use client'
import { useState } from 'react';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import Link from 'next/link';

interface Project extends React.HTMLAttributes<HTMLDivElement> {
  projectName: string;
  projectDescription: string;
  projectLink: string;
}

export const Project = ({ className, projectName, projectDescription, projectLink, ...props }: Project) => {
  const [focused, setFocused] = useState(false)
  return (
    <Link href={projectLink} target='_blank' className="outline-none focus:outline-none" onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}>
        <Card className={cn(`transition-all duration-75 ease-in-out ${focused ? 'ring lg:scale-[100.5%]' : ''}`, className)} {...props}>
          <CardHeader >
            <CardTitle>{projectName}</CardTitle>
            <CardDescription>{projectDescription}</CardDescription>
          </CardHeader>
        </Card>
    </Link>
  )
}
