import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const MyBookings = () => {
    return (
        <div className="my-10 mx-5 md:mx-36">
            <h1>My Bookings</h1>
            <Tabs defaultValue="account" className="w-full">
                <TabsList className="w-full justify-start">
                    <TabsTrigger value="booked">Booked</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                <TabsContent value="booked">

                </TabsContent>
                <TabsContent value="completed">

                </TabsContent>
            </Tabs>
        </div>
    )
}

export default MyBookings