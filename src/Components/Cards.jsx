import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloading } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import {motion} from "framer-motion"

function Cards ({data,reference}){
return(
<React.Fragment>
<motion.div drag dragConstraints={reference} whileDrag={{scale : 1.2}} dragTransition={{ bounceStiffness: 500, bounceDamping: 30 }} className="relative p-5  min-w-[12vw] sm:w-[12vw] md:w-[25vw] lg:w-[10vw] min-h-[50px] h-[30vh] rounded-3xl bg-zinc-500 overflow-hidden">
<FaRegFileAlt />
<p className=" py-3 ">{data.desc}</p>
<div className=" flex items-center justify-between absolute w-full h-10 bottom-0 left-0 px-5 mb-7">
<h5 className="">{data.fileSize}</h5>
<span className="flex items-center justify-center rounded-full bg-slate-800">
{data.closeIcon ? <IoMdCloseCircleOutline color="#fff" size="1.2em"  /> : <MdDownloading color="#fff" size="1.2em" />}
    
</span> 
</div>
{
    data.PBar.isOpen && (<div className={`flex items-center justify-center py-4 absolute w-full  h-5 ${data.PBar.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} bottom-0 left-0`}>
    <h3 className="font-semibold text-white text-sm">{data.PBar.tagTitle}</h3>
     </div>)


}
</motion.div>

</React.Fragment>

)

}

export default Cards;