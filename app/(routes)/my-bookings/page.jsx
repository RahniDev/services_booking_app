"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingHistoryList from "./_components/BookingHistoryList"
import GlobalApi from "@/app/_services/GlobalApi"
import {useSession} from 'next-auth/react'

const MyBookings = () => {
    const { data } = useSession()

    useEffect(() => {
        data && getUserBookingHistory()
    }, [data])

    const getUserBookingHistory = () => {
        GlobalApi.getUserBookingHistory(data.user.email).then(resp => {
            console.log(resp)
        })
    }
    return (
        <div className="my-10 mx-5 md:mx-36">
            <h1>My Bookings</h1>
            <Tabs defaultValue="account" className="w-full">
                <TabsList className="w-full justify-start">
                    <TabsTrigger value="booked">Booked</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                <TabsContent value="booked">
                    <BookingHistoryList />
                </TabsContent>
                <TabsContent value="completed">

                </TabsContent>
            </Tabs>
        </div>
    )
}

export default MyBookings