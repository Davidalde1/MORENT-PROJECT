import React from 'react'
import RentalInfo from '../components/RentalInfo';
import PaymentMethod from '../components/PaymentMethod';
import Confirmation from '../components/Confirmation';
import Summary from '../components/Summary';

const Payment = () => {

  return (
    <div className='lg:flex md:flex-row flex-row gap-6 mt-4 w-[87%] mx-auto font-plus'>
      <div className='w-full md:w-full lg:w-3/5'>
        <div className='bg-[#ffffff] px-4 py-4 rounded-[10px]'>
          <h3 className='text-[18px] text-[#1A202C] font-bold'>Billing Info</h3>
          <div>
            <p className='flex items-center justify-between text-[12px] text-[#90A3BF]'><span>Please enter your billing info</span>Step1of4</p>
          </div>
          <div className='lg:flex md:flex-row flex-row items-center gap-6 mt-4'>
            <div>
              <h4 className='mb-2 text-[14px] text-[#1A202C] font-bold'>Name</h4>
              <input type="text" placeholder='Your name' className='bg-[#f5f4f3] px-4 py-2 rounded-[10px] lg:w-[50vh] w-full'/>
            </div>
            <div>
            <h4 className='mb-2 text-[14px] text-[#1A202C] font-bold'>Phone Number</h4>
            <input type="text" placeholder='Phone number' className='bg-[#f5f4f3] px-4 py-2 rounded-[10px] lg:w-[50vh] w-full'/>
            </div>
          </div>
          <div className='lg:flex md:flex-row flex-row items-center gap-6 mt-4'>
            <div>
              <h4 className='mb-2 text-[14px] text-[#1A202C] font-bold'>Address</h4>
              <input type="text" placeholder='Address' className='bg-[#f5f4f3] px-4 py-2 rounded-[10px] lg:w-[50vh] w-full'/>
            </div>
            <div>
            <h4 className='mb-2 text-[14px] text-[#1A202C] font-bold'>Town/City</h4>
            <input type="text" placeholder='Town or city' className='bg-[#f5f4f3] px-4 py-2 rounded-[10px] lg:w-[50vh] w-full'/>
            </div>
          </div>
        </div>
        <div className='bg-[#ffffff] mt-4 px-4 py-4 rounded-[10px]'>
          <h3 className='text-[18px] text-[#1A202C] font-bold'>Rentalinfo</h3>
          <div>
            <p className='flex items-center justify-between text-[12px] text-[#90A3BF]'><span>Please select your rental date</span>Step2of4</p>
          </div>
          <RentalInfo
          description="Pick-up"
          className="mt-4"
          />
          <div>
            <RentalInfo
            description="Drop-off"
            className="mt-4"
            />
          </div>
        </div>
        <div>
          <PaymentMethod/>
        </div>
        <div>
          <Confirmation/>
        </div>
      </div>
      <div className='lg:w-2/5 md:w-full w-full mt-3 lg:mt-0'>
      <Summary/>
      </div>
    </div>
  )
}

export default Payment