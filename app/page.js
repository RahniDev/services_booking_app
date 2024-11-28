"use client"
import { useEffect, useState } from 'react';
import CategoryList from './_components/CategoryList';
import BusinessList from './_components/BusinessList'
import GlobalApi from "./_services/GlobalApi"
import Hero from './_components/Hero'

export default function Home() {
  const [categoryList, setCategoryList] = useState([])
  const [businessList, setBusinessList] = useState([])
 
  useEffect(() => {
    getCategoryList()
    getAllBusinessList()
  }, [])
  const getCategoryList = () => {
    GlobalApi.getCategory().then(resp => {
      setCategoryList(resp.categories)
    })
  }

  const getAllBusinessList = () => {
    GlobalApi.getAllBusinessList().then(resp=> {
      setBusinessList(resp.businessLists)
    })
  }
  return (
    <div>
      <Hero />
      <CategoryList categoryList={categoryList} />
      <BusinessList businessList={businessList} title='Popular Businesses' />
    </div>
    );
}
