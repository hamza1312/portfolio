import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "~/components/mode-toggle";
import { Typography } from "~/components/typography";
import { Time } from "~/components/time";
import { ExternalLink } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Listy } from "~/components/listy";
import { Project } from "~/components/project";

export default async function Home() {
  return (
    <div className="pb-[60px]">
      <div className="pt-10">
        <Typography variant='h2'>hey, I'm hamza 👋</Typography>
        <Typography variant='p'>My full name is hamza oubrahim, I'm a software engineer 🤓, I mostly do web dev with <a className="badge" target="_blank" href="https://nextjs.org">NextJS</a>, sometimes I do some designs as well, from <span className="text-blue-600 dark:text-blue-400">Morocco</span>, It's <Time /> for me currently, always aiming to be a better person.</Typography>
        <Card className="rounded-xl mt-6">
          <CardHeader>
            <CardTitle className="tracking-tight text-xl">Skills</CardTitle>
            <CardDescription>some technologies I use often and quite experienced with them</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1">
              <Listy><a href="https://typescriptlang.org" className="link-p text-base" target="_blank">Typescript</a></Listy>
              <Listy><a href="https://nextjs.org" className="link-p text-base" target="_blank">Next.js</a></Listy>
              <Listy><a href="https://trpc.io" className="link-p text-base" target="_blank">tRPC</a></Listy>
              <Listy><a href="https://tailwindcss.com" className="link-p text-base" target="_blank">Tailwind</a></Listy>
              <Listy><a href="https://rust-lang.org" className="link-p text-base" target="_blank">Rust</a></Listy>
             <p className="italic text-sm">and more like (Python, Prisma, Drizzle, SQL based databases, ...)</p>
            </ul>
          </CardContent>
        </Card>
        <Typography variant='h4' className="py-6 dark:text-blue-400 text-blue-600">Projects</Typography>
        <div className="flex flex-col gap-4">
          <Project projectLink="https://goworx.vercel.app" projectName="GoWorx" projectDescription="a project i made for a client similar to the popular freelancing site fiverr for car wash and maintenance services (tRPC, Prisma, Next.js), the project is still WIP and being currently tested" />
          <Project projectLink="https://github.com/dynamik-lang/Dynamik" projectName="Dynamik" projectDescription="a compiled programming language still WIP, made completely in rust" />
          <Project projectLink="https://github.com/hamza1312/chax" projectName="Chax" projectDescription="a CLI chat application for vim users, made completely in go (WIP)" />
        </div>

        <Typography variant='h4' className="py-6 dark:text-blue-400 text-blue-600">Socials</Typography>
        <div className="flex lg:flex-row flex-col gap-4">
          <a href="https://x.com/oubranode" target="_blank" className="link-p flex flex-row items-center gap-1">follow me at twitter <ExternalLink size='15' /> </a>
          <a href="https://github.com/hamza1312" target="_blank" className="link-p flex flex-row items-center gap-1">check out my github <ExternalLink size='15' /> </a>
        </div>
     </div>
    </div>
  );
}

