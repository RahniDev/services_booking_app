import { useEffect, useState } from "react"
import { Button } from '@/components/ui/button'
import { NotebookPen } from "lucide-react"
import GlobalApi from "@/app/_services/GlobalApi"
import Image from "next/image"
import Link from "next/link"
import BookingAppointment from "./BookingAppointment"


const SuggestedServices = ({ business }) => {
  const [businessList, setBusinessList] = useState([])

  useEffect(() => {
    business && getBusinessList()
  }, [business])

  const getBusinessList = () => {
    GlobalApi.getBusinessByCategory(business?.category?.name)
      .then(resp => {
        setBusinessList(resp?.businessLists)
      })
  }

  return (
    <div className="md:pl-10">
     <BookingAppointment>
     <Button className="flex gap-2 w-full">
        <NotebookPen />
        Book Appointment
      </Button>
     </BookingAppointment>
      <div className="hidden md:block">
        <h2 className="font-bold text-lg mt-3 mb-3">
          Similar Businesses</h2>
        <div>
          {businessList && businessList.map((business, index) => (
            <Link href={'/details/' + business.id}
              className="flex gap-2 mb-4
          cursor-pointer hover:shadow-md
          hover:border border-primary rounded-lg p-2">
              <Image src={business?.images[0].url}
                alt={business.name}
                width={80}
                height={80}
                className="rounded-lg object-cover"
              />
              <div>
                <h3 className="font-bold">{business.name}</h3>
                <h3 className="text-primary">{business.contactPerson}</h3>
                <address className="text-gray-400">{business.address}</address>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SuggestedServices