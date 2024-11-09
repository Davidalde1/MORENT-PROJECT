import React, { useState } from "react";
import { IoEllipse } from "react-icons/io5";
import Pay from "../components/Pay";

const PaymentMethod = () => {
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    expirationDate: '',
    cardHolder: '',
    cvc: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-[#ffffff] mt-4 rounded-[10px] px-4 py-2 w-full">
      <h4 className="mt-3 text-[18px] text-[#1A202C] font-bold">
        Payment Method
      </h4>
      <p className="flex items-center justify-between text-[12px] text-[#90A3BF]">
        <span>Please enter your payment method</span>
        <span>Step 3 of 4</span>
      </p>
      <div className="bg-[#f6f7f9] rounded-[10px] mt-4 p-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="flex items-center gap-1 text-[#1A202C] text-[14px] font-bold">
              <span className="text-[#3563E9]">
                <IoEllipse className="border-2 border-gray-300 rounded-full" />
              </span>
              Credit Card
            </p>
          </div>
          <div>
            <div className="h-[20px] w-[92px]">
              <img src="/Visalogo.png" alt="visa logo" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
        <div className="lg:flex lg:flex-row md:flex-col flex-row items-center gap-4 mt-4">
          <div className="w-full">
            <h4 className="mb-2 text-[16px] text-[#1A202C] font-bold">
              Card Number
            </h4>
            <input
              type="text"
              name="cardNumber"
              value={cardInfo.cardNumber}
              onChange={handleInputChange}
              placeholder="Card Number"
              maxLength="16"
              pattern="\d*"
              className="bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#3563E9] text-[12px] px-4 py-2 w-full rounded-[10px]"
            />
          </div>
          <div className="w-full">
            <h4 className="mb-2 text-[16px] text-[#1A202C] font-bold">
              Expiration Date
            </h4>
            <input
              type="text"
              name="expirationDate"
              value={cardInfo.expirationDate}
              onChange={handleInputChange}
              placeholder="MM/YY"
              maxLength="5"
              pattern="\d\d/\d\d"
              className="bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#3563E9] text-[12px] px-4 py-2 w-full rounded-[10px]"
            />
          </div>
        </div>
        <div className="lg:flex lg:flex-row md:flex-col flex-row items-center gap-4 mt-2">
          <div className="w-full">
            <h4 className="mb-2 text-[16px] text-[#1A202C] font-bold mt-3">
              Card holder
            </h4>
            <input
              type="text"
              name="cardHolder"
              value={cardInfo.cardHolder}
              onChange={handleInputChange}
              placeholder="Card holder"
              className="bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#3563E9] text-[12px] px-4 py-2 w-full rounded-[10px]"
            />
          </div>
          <div className="w-full">
            <h4 className="mb-2 text-[16px] text-[#1A202C] font-bold mt-3">
              CVC
            </h4>
            <input
              type="text"
              name="cvc"
              value={cardInfo.cvc}
              onChange={handleInputChange}
              placeholder="CVC"
              maxLength="3"
              pattern="\d*"
              className="bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#3563E9] text-[12px] px-4 py-2 w-full rounded-[10px]"
            />
          </div>
        </div>
      </div>
      <Pay cardInfo={cardInfo} />
    </div>
  );
};

export default PaymentMethod;