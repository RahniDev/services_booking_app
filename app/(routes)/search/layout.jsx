import CategorySidebar from "./_components/CatSidebar"

const layout = ({children}) => {
  return (
    <div>
        <div className="grid grid-cols-4 mt-8">
            <div className="">
               <CategorySidebar />
            </div>
            <div className="col-span-3">
            {children}
            </div>
        </div>
        </div>
  )
}

export default layout