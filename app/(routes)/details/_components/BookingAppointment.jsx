import { useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Calendar } from "@/components/ui/calendar"

const BookingAppointment = ({ children }) => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>{children}</SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Book Service</SheetTitle>
                        <SheetDescription>
                            Select a date and time for your appointment.
                            <div className='flex flex-col gap-5 items-baseline'>
                                <h2>Select Date</h2>
                            </div>
                            <div>
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    className="rounded-md border"
                                />
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default BookingAppointment