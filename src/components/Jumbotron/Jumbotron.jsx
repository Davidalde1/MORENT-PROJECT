import React from "react";
import Button from "../ReusableComponents/Button";

const Jumbotron = ({
  style,
  className,
  headText,
  desc,
  img,
  buttonStyle,
  backdropImg,
  backdropPos,
}) => {
  return (
    <div style={style} className={`${className} bg-blue-700 lg:w-[100%] w-[90%] h-[360px] relative rounded-[6px] px-[1rem] py-[2.2rem]`}>
      <div className={`absolute top-[-100px] left-[-110px] ${backdropPos}`}>
        <img src={backdropImg} alt="" className="w-[100%] h-[100%] z-[-999px]" />
      </div>
      <div className="z-[-3px] h-[100%]">
        <div className="lg:w-[50%] w-[100%] flex flex-col items-start justify-start text-white gap-0">
          <h2 className="w-[90%] text-[32px] items-start font-medium">{headText}</h2>
          <p className="font-normal text-[16px] items-start mt[-10px]">{desc}</p>
          <Button btnText="Rental Car" className={`${buttonStyle} jumb_btn bg-blue-950`} />
        </div>

        <div>
          <img src={img} alt="" className="mt-[25px] lg:w-[406px] w-[100%] h-[111px] z-[999px]" />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
