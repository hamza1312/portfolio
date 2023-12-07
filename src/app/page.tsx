import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "~/components/mode-toggle";
import { Typography } from "~/components/typography";
import { Time } from "~/components/time";
export default async function Home() {
  return (
    <div className="antialiased lg:w-[45%] lg:mx-auto h-screen  flex flex-col p-6">
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
        <Typography variant='p'>I'm a fullstack developer, and designer, I'm <span className="text-blue-600 dark:text-blue-400">{((new Date().getTime() - new Date('2009-08-08').getTime()) / (365.25 * 24 * 60 * 60 * 1000)).toFixed(2)}</span> years old, I'm from <span className="text-blue-600 dark:text-blue-400">Morocco</span>, It's <Time /> for me currently</Typography>
      

      </div>
    </div>   
  );
}

