"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingHistoryList from "./_components/BookingHistoryList"
import GlobalApi from "@/app/_services/GlobalApi"
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'

const MyBookings = () => {
    const [bookingHistory, setBookingHistory] = useState([])

    // auth yet to be done
    // const { data } = useSession()

    useEffect(() => {
        // data &&
         getUserBookingHistory()
    })
    // }, [data])

    const getUserBookingHistory = () => {
        // data.user.email
        GlobalApi.getUserBookingHistory('email@email.com').then(resp => {
            console.log(resp)
            setBookingHistory(resp.bookings)
        })
    }
    return (
        <div className="my-10 mx-5 md:mx-36">
            <h1>My Bookings</h1>
            <Tabs defaultValue="booked" className="w-full">
                <TabsList className="w-full justify-start">
                    <TabsTrigger value="booked">Booked</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                <TabsContent value="booked">
                    <BookingHistoryList bookingHistory={bookingHistory} />
                </TabsContent>
                <TabsContent value="completed">

                </TabsContent>
            </Tabs>
        </div>
    )
}

export default MyBookings