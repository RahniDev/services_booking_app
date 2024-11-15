"use client"
import { useEffect, useState } from "react"
import { useParams } from 'next/navigation'
import GlobalApi from "@/app/_services/GlobalApi"
import BusinessList from "@/app/_components/BusinessList"

const BusinessByCategory = () => {
  const [businessList, setBusinessList] = useState([])
  const params = useParams()
  useEffect(() => {
    console.log(params)
    params&&getBusinessList()
  }, [params])

  const getBusinessList = () => {
    GlobalApi.getBusinessByCategory(params.category)
      .then(resp => {
        setBusinessList(resp?.businessLists)
      })
  }
  return (
    <div>
      <BusinessList title={params.category} 
      businessList={businessList} />
    </div>
  )
}

export default BusinessByCategory