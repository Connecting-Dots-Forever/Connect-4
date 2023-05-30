import React from 'react'
import Color from './Color'
import cross from "public/images/cross.png"
import Image from 'next/dist/client/image'

type Props = {
    color: string;
    setColor: React.Dispatch<React.SetStateAction<string>>;
    setToggleColorPicker: React.Dispatch<React.SetStateAction<boolean>>;
}

const ColorPicker = (props: Props) => {
    const colors = [
        "#FF6900",
        "#FCB900",
        "#7BDCB5",
        "#00D084",
        "#8ED1FC",
        "#0693E3",
        "#ABB8C3",
        "#EB144C",
        "#F78DA7",
        "#9900EF",
        "#795548",
        "#000000",
    ];
    return (
        <div className='absolute'>
            <div className='relative'>
                <div className='absolute top-0 right-auto bottom-auto left-0 w-4 h-4 rotate-45 shadow-md bg-white border ml-5 z-0'></div>
            </div>

            <div className='relative bg-white shadow-md p-3 mt-2 border rounded z-10'>
                <div 
                    className='absolute top-2 right-2 bottom-auto left-auto rounded-full w-4 h-4 bg-violet-100 flex justify-center items-center hover:bg-violet-300 cursor-pointer duration-100'
                    onClick={() => props.setToggleColorPicker(false)}
                >
                    <Image
                        src={cross}
                        width="11px"
                        height="11px"
                        alt='cross'
                    />
                </div>
                <div className='inline-grid gap-4 grid-cols-6 mt-5'>
                    <Color
                        color={colors[0]}
                        current={props.color}
                        setColor={props.setColor}
                    />
                    <Color
                        color={colors[1]}
                        current={props.color}
                        setColor={props.setColor}
                    />
                    <Color
                        color={colors[2]}
                        current={props.color}
                        setColor={props.setColor}
                    />
                    <Color
                        color={colors[3]}
                        current={props.color}
                        setColor={props.setColor}
                    />
                    <Color
                        color={colors[4]}
                        current={props.color}
                        setColor={props.setColor}
                    />
                    <Color
                        color={colors[5]}
                        current={props.color}
                        setColor={props.setColor}
                    />
                    <Color
                        color={colors[6]}
                        current={props.color}
                        setColor={props.setColor}
                    />
                    <Color
                        color={colors[7]}
                        current={props.color}
                        setColor={props.setColor}
                    />
                    <Color
                        color={colors[8]}
                        current={props.color}
                        setColor={props.setColor}
                    />
                    <Color
                        color={colors[9]}
                        current={props.color}
                        setColor={props.setColor}
                    />
                    <Color
                        color={colors[10]}
                        current={props.color}
                        setColor={props.setColor}
                    />
                    <Color
                        color={colors[11]}
                        current={props.color}
                        setColor={props.setColor}
                    />
                </div>

            </div>
        </div>
    )
}

export default ColorPicker;