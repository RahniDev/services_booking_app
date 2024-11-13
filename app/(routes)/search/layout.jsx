const layout = ({children}) => {
  return (
    <div>
        <div className="grid grid-cols-4">
            <div className="">
                {/* Categories sidebar */}
            </div>
            <div className="col-span-3">
            {children}
            </div>
        </div>
        </div>
  )
}

export default layout