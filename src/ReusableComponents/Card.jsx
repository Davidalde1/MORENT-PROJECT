import React from "react";
import Button from "../ReusableComponents/Button";

const Card = ({
  label,
  heart,
  labelType,
  image,
  imageAlt,
  gasIcon,
  gasUnit,
  steeringIcon,
  motor,
  userIcon,
  userName,
  amount,
}) => {
  return (
    <div className="w-[200px] h-[240px] m-auto px-3 py-3 bg-white font-plus">
      <div className="flex justify-between items-center text-[12px]">
        <span className="text-[#1A202C] text-[14px] font-bold">{label}</span>
        <span className="text-red-700">{heart}</span>
      </div>
      <div className="text-[#90A3BF] text-[10px]">{labelType}</div>
      <div className="mt-4 w-[140px] h-[40px] mx-auto">
        <img src={image} alt={imageAlt} />
      </div>
      <div className="flex items-center justify-around mt-9">
        <div className="flex items-center text-[#90A3BF] text-[12px] gap-1">
          <span>{gasIcon}</span>
          {gasUnit}
        </div>
        <div className="flex items-center text-[#90A3BF] text-[14px] gap-1">
          <span>{steeringIcon}</span>
          {motor}
        </div>
        <div className="flex items-center text-[#90A3BF] text-[14px] gap-1">
          <span>{userIcon}</span>
          {userName}
        </div>
      </div>
      <div className="flex items-center justify-around mt-7">
        <div className="text-[16px]">
          <p className="text-[8px]">
            <span className="text-[12px] text-[#1A202C] font-bold">
              {amount}
            </span>
            day
          </p>
        </div>
        <div>
          <a href="/details">
            <Button btnText="Rent Now" className="text-[10px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
