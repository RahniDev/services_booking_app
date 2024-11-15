"use client"
import { useState, useEffect } from 'react'
import GlobalApi from '@/app/_services/GlobalApi'
import Image from 'next/image'
import Link from "next/link"
import { usePathname } from 'next/navigation'
const CategorySidebar = () => {
  const [categoryList, setCategoryList] = useState([])
  const [selectedCategory, setSelectedCategory] = useState()
  const params = usePathname()

  useEffect(() => {
    getCategoryList()
  }, [])

  useEffect(() => {
    params && setSelectedCategory(params.split('/')[2])
  }, [params])

  const getCategoryList = () => {
    GlobalApi.getCategory().then(resp => {
      setCategoryList(resp.categories)
    })
  }

  return (
    <div>
      <h2 className='font-bold mb-3 text-lg text-primary'>Categories</h2>
      <div>
        {categoryList.map((category, index) => (
          <Link href={'/search/' + category.name} key={index}
            className={`flex gap-2 p-3 border 
      rounded-lg mb-3 md:mr-10 cursor-pointer hover:bg-blue-50
      hover:text-primary hover:border-primary hover:shadow-md
      items-center
      ${selectedCategory == category.name &&
              'border-primary text-primary shadow-md bg-blue-50'}
        `}>
            <Image src={category.icon.url}
              alt='icon'
              width={30}
              height={30}
            />
            <h2> {category.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategorySidebar