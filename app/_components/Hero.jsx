import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'

const Hero = () => {
  return (
    <div className='flex items-center gap-3 flex-col justify-center pt-14 pb-7'>
        <h1 className='font-bold text-[46px] text-center'>
            Find Home 
            <span className='text-primary'> Services</span>
            <br></br> Near You</h1>
        <p className='text-xl text-gray-400'>Explore home services near you</p>
    <div className="mt-4 flex gap-4 items-center">
        <Input placeholder="Search"
        className='rounded-full md:w-[350px]' />
        <Button className='rounded-full h-[46px]'>
            <Search className='h-4 w-4'/></Button>
    </div>
    </div>
  )
}

export default Hero