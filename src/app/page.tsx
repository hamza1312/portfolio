import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "~/components/mode-toggle";
import { Typography } from "~/components/typography";
import { } from '@radix-ui/react-slot'
import { Time } from "~/components/time";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Listy } from "~/components/listy";
export default async function Home() {
  return (
    <div className="antialiased lg:w-[45%] lg:mx-auto h-screen flex flex-col p-6 overflow-y-auto">
      <div className="w-full flex flex-row justify-between items-center pb-4">
        <div className="flex flex-row gap-6">
          <a href="#about" className="link-primary">about</a>
          <a href="#socials" className="link-primary">socials</a>
          <a href="#projects" className="link-primary">projects</a>
          <a href="#blogs" className="link-primary">blogs</a>
        </div>

        <ModeToggle />
      </div>
      <Separator />
      <div className="pt-10">

        <Typography variant='h2'>hey, I'm hamza 👋</Typography>
        <Typography variant='p'>My full name is hamza oubrahim, I'm a software engineer 🤓, mostly do web dev with <a className="badge" target="_blank" href="https://nextjs.org">NextJS</a>, sometimes I do some designs as well, I'm currently <span className="text-blue-600 dark:text-blue-400">{Math.round((new Date().getTime() - new Date('2009-08-08').getTime()) / (365.25 * 24 * 60 * 60 * 1000))}</span> years old, from <span className="text-blue-600 dark:text-blue-400">Morocco</span>, It's <Time /> for me currently, always aiming to be a better person.</Typography>
        <Card className="rounded-xl mt-6">
          <CardHeader>
            <CardTitle className="tracking-tight text-xl">Skills</CardTitle>
            <CardDescription>some technologies I use often and quite experienced with them</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1">
              <Listy><a href="https://typescriptlang.org" className="link-primary text-base" target="_blank">Typescript</a></Listy>
              <Listy><a href="https://nextjs.org" className="link-primary text-base" target="_blank">Next.js</a></Listy>
              <Listy><a href="https://trpc.io" className="link-primary text-base" target="_blank">tRPC</a></Listy>
              <Listy><a href="https://tailwindcss.com" className="link-primary text-base" target="_blank">Tailwind</a></Listy>
              <Listy><a href="https://rust-lang.org" className="link-primary text-base" target="_blank">Rust</a></Listy>
              <p className="italic text-sm">and more like (Python, Prisma, Drizzle, SQL based databases, ...)</p>
            </ul>
          </CardContent>
        </Card>


      </div>
    </div>
  );
}

