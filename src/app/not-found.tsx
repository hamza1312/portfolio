import { Button } from "@/components/ui/button";
import { Typography } from "~/components/typography";
import Link from 'next/link'
export default function NotFound() {
  return (
    <div className="flex flex-col h-[80%] pt-6 space-y-2 text-center justify-center items-center ">
      <Typography variant='h3' >Page not found</Typography>  
      <Typography variant='p'>The page you're trying to access doesn't exist.</Typography>
      <Link href="/"><Button variant='outline'>Homepage</Button></Link>
    </div>
  )
}
