import Image from "next/image"

const CategoryList = ({ categoryList }) => {
  return (
    <div className="mx-4 md:mx-22 lg:mx-52 grid grid-cols-3
    md:grid-cols-4 lg:grid-cols-6 gap-4">
      {categoryList.length > 0 ? categoryList.map((category, index) => (
        <div className="flex flex-col items-center justify-center gap-2 p-5">
          <Image src={category.icon.url}
            alt="icon"
            width={35}
            height={35} />
          <h2 className="text-primary">{category.name}</h2>
        </div>
      ))
        : [1, 2, 3, 4, 5, 6].map((item, index) => (
          <div className="h-[120px] w-full bg-slate-200 animate-pulse
          rounded-lg">

          </div>
        )
        )}</div>
  )
}

export default CategoryList