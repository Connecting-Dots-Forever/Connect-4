import React from 'react'
import tick from "public/images/tick.svg"
import Image from "next/image"

type Props = {
    color: string;
    current: string;
    setColor: React.Dispatch<React.SetStateAction<string>>;
}

const Color = (props: Props) => {
    const handleColorClick = () => {
        props.setColor(props.color)
    }
    return (
        <div 
            className='rounded-full w-7 h-7 hover:scale-110 duration-100 cursor-pointer flex justify-center items-center' style={{ backgroundColor: props.color }}
            onClick={handleColorClick}
        >
            {props.color === props.current && <Image
                src={tick}
                width="18px"
                alt="tick"
            />}
        </div>
    )
}

export default Color;