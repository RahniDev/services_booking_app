import Image from "next/image"
import { MapPin, Mail } from "lucide-react"

const BusinessInfo = ({ business }) => {
  return business?.name&&(
    <div className="md:flex flex-col gap-4 items-center">
      <Image src={business?.images[0]?.url}
        alt={business.name} width={150}
        height={200}
        className="rounded-full h-[150px] object-cover" /> 
    
        <div className="flex flex-col items-baseline">
          <p className="text-primary bg-blue-100 p-1
          px-3 text-lg rounded-full">{business?.category?.name}</p></div>
    <h2 className="text-[40px] font-bold">{business.name}</h2>
    <address className="flex gap-2 text-lg text-gray-500">
      <MapPin />{business.address}<br></br>
      <a className="flex gap-2 text-lg text-gray-500" 
      href={`mailto:${business?.email}`}>
        <Mail />
        {business?.email}</a></address>
    </div>
  )
}

export default BusinessInfo