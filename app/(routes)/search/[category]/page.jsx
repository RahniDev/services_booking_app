"use client"
import { useEffect } from "react"
import { useParams } from 'next/navigation'

const BusinessByCategory = () => {
  const params = useParams()
  useEffect(() => {
    console.log(params)
  }, [params])
  return (
    <div></div>
  )
}

export default BusinessByCategory