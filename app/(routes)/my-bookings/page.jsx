"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingHistoryList from "./_components/BookingHistoryList"
import GlobalApi from "@/app/_services/GlobalApi"
import { useState, useEffect } from 'react'
import { useSession, useUser } from '@descope/nextjs-sdk/client';

const MyBookings = () => {
    const [bookingHistory, setBookingHistory] = useState([])

    const { user } = useUser()
    const { isAuthenticated } = useSession()

    useEffect(() => {
        isAuthenticated &&
           getUserBookingHistory()
    }, [isAuthenticated])

    const getUserBookingHistory = () => {
        GlobalApi.getUserBookingHistory(user.email).then(resp => {
            console.log(resp)
            setBookingHistory(resp.bookings)
        })
    }

    // Filter past bookings and future bookings
    const filterData = (type) => {
        const result = bookingHistory.filter(item =>
            type == 'booked' ?
                new Date(item.date) > new Date() :
                new Date(item.date) < new Date())

        return result
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
                    <BookingHistoryList
                        bookingHistory={filterData('booked')}
                        type="booked" />
                </TabsContent>
                <TabsContent value="completed">
                    <BookingHistoryList bookingHistory={filterData('completed')}
                        type="completed" />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default MyBookings