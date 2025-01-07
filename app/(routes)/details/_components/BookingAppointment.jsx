import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Calendar } from "@/components/ui/calendar"
import GlobalApi from '@/app/_services/GlobalApi'
import { toast } from "sonner"
import moment from 'moment'
import { useUser, useSession } from '@descope/nextjs-sdk/client'

const BookingAppointment = ({ children, business }) => {
    const [date, setDate] = useState(new Date())
    const [timeSlot, setTimeSlot] = useState([])
    const [selectedTime, setSelectedTime] = useState()
    const [bookedSlot, setBookedSlot] = useState([])

    const { user } = useUser()
    const { isAuthenticated } = useSession()
    
    useEffect(() => {
        getTime()
        setDate()
        setSelectedTime('')
    }, [])

    useEffect(() => {
        date && businessBookedSlot()
    }, [date])

    // Get all booked slots on the selected date
    const businessBookedSlot = () => {
        GlobalApi.businessBookedSlot(business.id, moment(date).format('DD-MMM-yyyy'))
            .then(resp => {
                console.log(resp)
                setBookedSlot(resp.bookings)
            })
    }
    const isSlotBooked = (time) => {
        return bookedSlot.find(item => item.time == time)
    }

    const getTime = () => {
        const timeList = [];
        for (let i = 10; i <= 12; i++) {
            timeList.push({
                time: i + ':00 AM'
            })
            timeList.push({
                time: i + ':30 AM'
            })
        }
        for (let i = 1; i <= 6; i++) {
            timeList.push({
                time: i + ':00 PM'
            })
            timeList.push({
                time: i + ':30 PM'
            })
        }

        setTimeSlot(timeList)
    }

    const saveBooking = () => {
        GlobalApi.createBooking(business.id,
            moment(date).format('DD-MMM-yyyy'), selectedTime,
            user.email,
            user.name
        )
            .then(resp => {
                if (resp) {
                    setDate()
                    setSelectedTime('')
                    toast('Service booked successfully.')
                } else (e) => {
                    toast('Error while creating booking.')
                }
            })
    }

    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>{children}</SheetTrigger>
                <SheetContent className="overflow-auto">
                    <SheetHeader>
                        <SheetTitle>Book Service</SheetTitle>
                        <SheetDescription>
                            Select a date and time for your appointment.
                            <div className='flex flex-col gap-5 items-baseline'>
                                <h2 className='my-5 font-bold'>Select Date</h2>
                            </div>
                            <div>
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    className="rounded-md border"
                                />
                            </div>
                            <h2 className='my-5 font-bold'>Select Time Slot</h2>
                            <div className='grid grid-cols-3 gap-3'>
                                {timeSlot.map((item, index) => (
                                    <Button key={index}
                                        disabled={isSlotBooked(item.time)}
                                        variant='outline'
                                        className={`border rounded-full p-2 px-3
                                     hover:bg-primary hover:text-white
                                     ${selectedTime == item.time && 'bg-primary text-white'}`}
                                        onClick={() => setSelectedTime(item.time)}>
                                        {item.time}
                                    </Button>
                                ))}
                            </div>
                            <div className='flex justify-between'>
                                <Button variant='outline' className="my-5">Cancel</Button>
                                <Button className="my-5"
                                    disabled={!(selectedTime && date)}
                                    onClick={() => saveBooking()}>Book</Button>
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default BookingAppointment