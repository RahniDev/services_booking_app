import Image from "next/image"
import { MapPin, Mail, Share, User, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const BusinessInfo = ({ business }) => {
  return business?.name && (
    <div className="md:flex gap-4 items-center">
      <Image src={business?.images[0]?.url}
        alt={business.name} width={150}
        height={200}
        className="rounded-full h-[150px] object-cover" />

      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col mt-4 md:mt-0 items-baseline gap-3">
          <p className="text-primary bg-blue-100 p-1
          px-3 text-lg rounded-full">{business?.category?.name}</p>
        <h2 className="text-[40px] font-bold">{business.name}</h2>
        <address className="flex gap-2 text-lg text-gray-500">
          <MapPin />{business.address}</address>
        <address><a className="flex gap-2 text-lg text-gray-500"
          href={`mailto:${business?.email}`}>
          <Mail />
          {business?.email}</a></address>
      </div>

      <div className="flex flex-col gap-5 items-end">
        <Button><Share /></Button>
        <p className="flex gap-2 text-xl text-primary"><User />{business.contactPerson}</p>
        <p className="flex gap-2 text-xl text-gray-500"><Clock />Available 8:00 AM to 9:00 PM</p>

      </div>
    </div>
    </div>
  )
}

export default BusinessInfo