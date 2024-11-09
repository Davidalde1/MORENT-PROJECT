import React, { useState } from 'react'
import Button from '../ReusableComponents/Button'
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import PaymentMethod from '../components/PaymentMethod';


const Confirmation = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRentNow = async () => {
    try {
      setIsLoading(true);
      // Add your payment processing logic here
      await PaymentMethod.processPayment();
      // Handle successful payment
    } catch (error) {
      // Handle payment error
      console.error('Payment failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='bg-[#ffffff] px-4 py-2 mt-5 rounded-[10px]'>
        <h4 className="mt-3 text-[18px] text-[#1A202C] font-bold">
        Confirmation
      </h4>
      <p className="flex items-center justify-between lg:text-[12px] text-[8px] text-[#90A3BF]">
        <span>We are getting to the end. Just few clicks and your rental is ready!</span>Step4of4
      </p>
      <div className="flex items-center gap-4 bg-[#f6f7f9] px-3 py-2 mt-5">
            <span>
              <input type="checkbox"/>
            </span>
            <p className="text-[12px] text-[#1F2544] font-bold">I agree with sending an Marketing and newsletter emails. No spam, promissed!</p>
          </div>
          <div className="flex items-center gap-4 bg-[#f6f7f9] mt-4 px-3 py-2">
            <span>
              <input type="checkbox"/>
            </span>
            <p className="text-[12px] text-[#1F2544] font-bold">I agree with our terms and conditions and privacy policy.</p>
          </div>
          <div className='mt-4'>
            <Button
            btnText={isLoading ? "Processing..." : "Rent Now"}
            className="px-3 py-2 rounded-[10px] text-[12px] text-[#ffffff]"
            onClick={handleRentNow}
            disabled={isLoading}
            />
          </div>
          <div className='mt-4'>
          <AiTwotoneSafetyCertificate className='w-[32px] h-[32px]' />
          </div>
          <p className='mt-2 text-[14px] text-[#1A202C] font-bold'>All your data are safe</p>
          <p className='text-[12px] text-[#90A3BF]'>We are using the most advanced security to provide you the best experience ever.</p>
    </div>
  )
}

export default Confirmation