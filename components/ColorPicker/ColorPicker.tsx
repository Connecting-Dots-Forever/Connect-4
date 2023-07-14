import React from "react";
import Color from "./Color";
import cross from "public/images/cross.png";
import Image from "next/dist/client/image";

type Props = {
  color: string;
  handleColorChange: (color: string) => void;
  setToggleColorPicker: React.Dispatch<React.SetStateAction<boolean>>;
};

const ColorPicker = (props: Props) => {
  const [inputHex, setInputHex] = React.useState<string>("");

  const setColor = (color: string) => {
    props.handleColorChange(color);
    props.setToggleColorPicker(false);
  };

  const changeInputHex = (e: React.ChangeEvent<HTMLInputElement>) => {
    var hexColorRegex = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    const { value } = e.target;
    const maxLen = 6;

    setInputHex(value.length > maxLen ? value.slice(0, maxLen) : value);
    if (hexColorRegex.test('#' + value)) {
        setColor('#' + value);
        props.setToggleColorPicker(false);
    }
  };

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
  ];

  const ColorComponents = colors.map(color => <Color key={color} color={color} current={props.color} setColor={setColor} />)

  return (
    <div className="absolute">
      <div className="relative">
        <div className="absolute top-0 right-auto bottom-auto left-0 w-4 h-4 rotate-45 border-solid border-t border-l bg-white ml-5 z-10"></div>
      </div>

      <div className="relative bg-white shadow-md p-3 mt-2 rounded z-0 border">
        <div
          className="absolute top-2 right-2 bottom-auto left-auto rounded-full w-4 h-4 bg-violet-100 flex justify-center items-center hover:bg-violet-300 cursor-pointer duration-100"
          onClick={() => props.setToggleColorPicker(false)}
        >
          <Image src={cross} width="11px" height="11px" alt="cross" />
        </div>
        <div className="grid gap-2 grid-cols-7 mt-5">
          {ColorComponents}
          <div className="col-span-4">
            <div className="flex w-36">
              <div className="bg-gray-200 w-7 h-7 flex justify-center items-center text-gray-500 rounded-l border">
                #
              </div>
              <div>
                <input
                  type="text"
                  className="w-28 h-7 focus-visible:outline-none border rounded-r px-1 uppercase text-gray-700 text-sm"
                  value={inputHex}
                  onChange={changeInputHex}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
