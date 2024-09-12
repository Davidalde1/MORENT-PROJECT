import React from "react";
import { IoEllipse } from "react-icons/io5";

const PaymentMethod = () => {
  return (
    <div className="bg-[#ffffff] mt-4 rounded-[10px] px-4 py-2 w-full">
      <h4 className="mt-3 text-[18px] text-[#1A202C] font-bold">
        Payment Method
      </h4>
      <p className="flex items-center justify-between text-[12px] text-[#90A3BF]">
        <span>Please enter your payment method</span>Step3of4
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
              <img src="/Visalogo.png" alt="visa logo" />
            </div>
          </div>
        </div>
        <div className="lg:flex md:flex-col flex-row items-center gap-4 mt-4">
          <div>
            <h4 className="mb-2 text-[16px] text-[#1A202C] font-bold">
              Card Number
            </h4>
            <input
              type="text"
              placeholder="Card Number"
              className="bg-[#ffffff] focus:outline-none text-[12px] px-4 py-2 lg:w-[49vh] w-full rounded-[10px]"
            />
          </div>
          <div>
            <h4 className="mb-2 text-[16px] text-[#1A202C] font-bold">
              Expiration Dtae
            </h4>
            <input
              type="text"
              placeholder="DD/MM/YY"
              className="bg-[#ffffff] focus:outline-none text-[12px] px-4 py-2 lg:w-[49vh] w-full rounded-[10px]"
            />
          </div>
        </div>
        <div className="lg:flex md:flex-col flex-row items-center gap-4 mt-2">
          <div>
            <h4 className="mb-2 text-[16px] text-[#1A202C] font-bold mt-3">
              Card holder
            </h4>
            <input
              type="text"
              placeholder="Card holder"
              className="bg-[#ffffff] focus:outline-none text-[12px] px-4 py-2 lg:w-[49vh] w-full rounded-[10px]"
            />
          </div>
          <div>
            <h4 className="mb-2 text-[16px] text-[#1A202C] font-bold mt-3">
              CVC
            </h4>
            <input
              type="text"
              placeholder="CVC"
              className="bg-[#ffffff] focus:outline-none text-[12px] px-4 py-2 lg:w-[49vh] w-full rounded-[10px]"
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between px-4 py-2 bg-[#f6f7f9] rounded-[10px]">
          <div className="flex items-center gap-4">
            <span>
              <input type="checkbox" className="bg-[#ffffff]" />
            </span>
            <p className="text-[14px]">PayPal</p>
          </div>
          <div className="w-[100px] h-[24px]">
            <img src="/PayPal .png" alt="PayPal" />
          </div>
        </div>
      </div>
      <div className="mt-4 mb-3">
        <div className="flex items-center justify-between px-4 py-2 bg-[#f6f7f9] rounded-[10px]">
          <div className="flex items-center gap-4">
            <span>
              <input type="checkbox" className="bg-[#ffffff]" />
            </span>
            <p className="text-[14px]">Bitcoin</p>
          </div>
          <div className="w-[100px] h-[24px]">
            <img src="/Bitcoin.png" alt="Bitcoin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
