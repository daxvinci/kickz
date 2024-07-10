

const GridItem = ({image,price,stars,name}) => {

    const rating = Math.max(0,Math.min(5,stars))
    const starArray = Array.from({length:rating})     
    
    return ( 
        <>
        <div className="flex-item flex flex-col gap-1 basis-[100%] md:basis-[30%]">
            <div className="flex-img rounded-lg overflow-hidden h-full"><img src={image} className=" object-cover h-full" alt="shoe" /></div>
            <div className="flex-details flex justify-between">
                <h2 className="text-lg lg:text-xl font-semibold">{name.substring(0,15)}</h2>
                <div className="amount text-md text-lg border rounded-lg px-1 border-[#F1AA39]">${price}</div>
            </div>
            <div className="stars flex justify-between items-end">
                <div className="star flex">
                {starArray.map((_,index)=>
                <img key = {index} className="w-5 lg:w-8" src="../../assets/stars.png" alt="shoe pic"></img>
                )}
                </div>
                <div className="add-cart border border-[#F1AA39] rounded-2xl hover:bg-[#F1AA39] cursor-pointer px-2">Add to cart</div>
            </div>
        </div>
        </>
     );
}
 
export default GridItem;