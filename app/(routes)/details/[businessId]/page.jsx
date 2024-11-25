"use client"
import { useEffect, useState } from "react"
import GlobalApi from "@/app/_services/GlobalApi"
import { useParams } from "next/navigation"
import BusinessInfo from "../_components/BusinessInfo"
import SuggestedServices from "../_components/SuggestedServices"
import BusinessDescription from "../_components/BusinessDescription"

const BusinessDetails = () => {
    const [business, setBusiness] = useState([])
    const params = useParams()

    useEffect(() => {
        params && getBusinessById()
    }, [params])
    const getBusinessById = () => {
        GlobalApi.getBusinessById(params.businessId)
            .then(resp => {
                setBusiness(resp.businessList)
            })
    }
    return business && (
        <div className="py-8 md:py-20 px-10 md:px-36">
            <BusinessInfo business={business} />

               <div className="grid grid-cols-4 mt-16">
                <div className="col-span-4 md:col-span-3">
                <BusinessDescription business={business} />
                </div>
                <div className="hidden md:block">
                <SuggestedServices business={business} />
                </div>
                </div>
        </div>
    )
}

export default BusinessDetails