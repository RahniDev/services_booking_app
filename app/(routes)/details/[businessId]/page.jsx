"use client"
import { useEffect, useState } from "react"
import GlobalApi from "@/app/_services/GlobalApi"
import { useParams } from "next/navigation"
import BusinessInfo from "../_components/BusinessInfo"

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
        </div>
    )
}

export default BusinessDetails