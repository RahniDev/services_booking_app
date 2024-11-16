"use client"
import { useEffect, useState } from "react"
import GlobalApi from "@/app/_services/GlobalApi"
import { useParams } from "next/navigation"
const { default: GlobalApi } = require("@/app/_services/GlobalApi")

const BusinessInfo = () => {
    const [business, setBusiness] = useState([])
    const params = useParams()

    useEffect(() => {
        params && getBusinessById()
    }, [params])
    const getBusinessById = () => {
        GlobalApi.getBusinessById(params.businessId)
            .then(resp => {
                console.log('getbusinessbyid')
            })
    }
    return (
        <div>Business</div>
    )
}

export default BusinessInfo