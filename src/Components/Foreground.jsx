import React, { useRef, useState } from "react"
import Cards from "./Cards"


function Foreground(){

    const ref = useRef(null);
    

    const data = [
        {
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            fileSize: ".9mb",
            closeIcon: false,
            PBar: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
        },
        {
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            fileSize: ".9mb",
            closeIcon: false,
            PBar: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
        },
        {
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            fileSize: ".9mb",
            closeIcon: true,
            PBar: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
        },
        {
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            fileSize: ".9mb",
            closeIcon: false,
            PBar: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
        },
        {
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            fileSize: ".9mb",
            closeIcon: true,
            PBar: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
        },
    ];



return(
<React.Fragment>
<div ref={ref}className='p-10 absolute w-full h-screen z-[2] flex flex-wrap gap-10 flex-shrink-0'>
{data.map((item,index)=>(
    <Cards data={item} reference={ref} />

))}
</div>

</React.Fragment>


)


}

export default Foreground;