// import InputRange from "../components/InputRange";
import React, { useState } from 'react';
import { useCars } from '../components/Context/CarContext';

const Sidebar = () => {
  const { updateFilters } = useCars();
  const [selectedType, setSelectedType] = useState([]);
  const [selectedCapacity, setSelectedCapacity] = useState([]);
  const [maxPrice, setMaxPrice] = useState(100);

  const handleTypeClick = (type) => {
    const updatedType = selectedType.includes(type)
      ? selectedType.filter((t) => t !== type)
      : [...selectedType, type];

    setSelectedType(updatedType);
    updateFilters({ type: updatedType });
  };

  const handleCapacityClick = (capacity) => {
    const updatedCapacity = selectedCapacity.includes(capacity)
      ? selectedCapacity.filter((c) => c !== capacity)
      : [...selectedCapacity, capacity];

    setSelectedCapacity(updatedCapacity);
    updateFilters({ capacity: updatedCapacity });
  };

  const handlePriceChange = (e) => {
    const newMaxPrice = parseFloat(e.target.value);
    setMaxPrice(newMaxPrice);
    updateFilters({ price: { min: 0, max: newMaxPrice } });
  };

  return (
     <div className="px-6 mt-6 font-plus">
      <h3 className="text-[#90A3BF] text-[12px]">Type</h3>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center gap-1" onClick={() => handleTypeClick('Sport')}>
          <input type="checkbox" checked={selectedType.includes('Sport')} className="rounded-full" />
          <span className="text-gray-700">Sport (10)</span>
        </div>
        <div className="flex items-center gap-1" onClick={() => handleTypeClick('SUV')}>
          <input type="checkbox" checked={selectedType.includes('SUV')} className="rounded-full" />
          <span className="text-gray-700">SUV (12)</span>
        </div>
        <div className="flex items-center gap-1" onClick={() => handleTypeClick('MPV')}>
          <input type="checkbox" checked={selectedType.includes('MPV')} className="rounded-full" />
          <span className="text-gray-700">MPV (16)</span>
        </div>
        <div className="flex items-center gap-1" onClick={() => handleTypeClick('Sedan')}>
          <input type="checkbox" checked={selectedType.includes('Sedan')} className="rounded-full" />
          <span className="text-gray-700">Sedan (20)</span>
        </div>
        <div className="flex items-center gap-1" onClick={() => handleTypeClick('Coupe')}>
          <input type="checkbox" checked={selectedType.includes('Coupe')} className="rounded-full" />
          <span className="text-gray-700">Coupe (14)</span>
        </div>
        <div className="flex items-center gap-1" onClick={() => handleTypeClick('Hatchback')}>
          <input type="checkbox" checked={selectedType.includes('Hatchback')} className="rounded-full" />
          <span className="text-gray-700">Hatchback (14)</span>
        </div>
        </div>


        <h3 className="text-[#90A3BF] text-[12px] mt-6">Capacity</h3>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center gap-1" onClick={() => handleCapacityClick('2Person')}>
          <input type="checkbox" checked={selectedCapacity.includes('2Person')} className="rounded-full" />
          <div>
       <p className="text-[#90A3BF] text-[14px]">
           <span className="text-gray-700">2 Person</span>(10)
         </p>
       </div>
       </div>
       </div>

       <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center gap-1" onClick={() => handleCapacityClick('4Person')}>
          <input type="checkbox" checked={selectedCapacity.includes('4Person')} className="rounded-full" />
          <div>
       <p className="text-[#90A3BF] text-[14px]">
           <span className="text-gray-700">4 Person</span>(14)
         </p>
       </div>
       </div>
       </div>

       <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center gap-1" onClick={() => handleCapacityClick('6Person')}>
          <input type="checkbox" checked={selectedCapacity.includes('6Person')} className="rounded-full" />
          <div>
       <p className="text-[#90A3BF] text-[14px]">
           <span className="text-gray-700">6 Person</span>(12)
         </p>
       </div>
       </div>
       </div>

       <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center gap-1" onClick={() => handleCapacityClick('8 or More')}>
          <input type="checkbox" checked={selectedCapacity.includes('8 or More')} className="rounded-full" />
          <div>
       <p className="text-[#90A3BF] text-[14px]">
           <span className="text-gray-700">8 or More</span>(16)
         </p>
       </div>
       </div>
       
  
      <h3 className='text-gray-700'>Price</h3>
      <div className="price-range">
        <input
          type="range"
          min="0"
          max="100"
          value={maxPrice}
          onChange={handlePriceChange}
        />
        <div className='text-gray-700'>
          <span>Max Price: ${maxPrice}</span>
        </div>
      </div>
    </div>
    </div>
  );
};




















    // <div className="px-6 mt-6 font-plus">
    //   <p className="text-[#90A3BF] text-[12px]">Type</p>
    //   <div className="flex flex-col gap-4 mt-4">
    //     <div className="flex items-center gap-1">
    //       <div>
    //         <input type="checkbox" className="rounded-full" />
    //       </div>
    //       <div>
    //         <p className="text-[#90A3BF] text-[12px]">
    //           <span className="text-gray-700">Sport</span>(10)
    //         </p>
    //       </div>
    //     </div>
    //     <div className="flex items-center gap-1">
    //       <div>
    //         <input type="checkbox" className="rounded-full" />
    //       </div>
    //       <div>
    //         <p className="text-[#90A3BF] text-[12px]">
    //           <span className="text-gray-700">SUV</span>(12)
    //         </p>
    //       </div>
    //     </div>
    //     <div className="flex items-center gap-1">
    //       <div>
    //         <input type="checkbox" className="rounded-full" />
    //       </div>
    //       <div>
    //         <p className="text-[#90A3BF] text-[12px]">
    //           <span className="text-gray-700">MPV</span>(16)
    //         </p>
    //       </div>
    //     </div>
    //     <div className="flex items-center gap-1">
    //       <div>
    //         <input type="checkbox" className="rounded-full" />
    //       </div>
    //       <div>
    //         <p className="text-[#90A3BF] text-[12px]">
    //           <span className="text-gray-700">Sedan</span>(20)
    //         </p>
    //       </div>
    //     </div>
    //     <div className="flex items-center gap-1">
    //       <div>
    //         <input type="checkbox" className="rounded-full" />
    //       </div>
    //       <div>
    //         <p className="text-[#90A3BF] text-[12px]">
    //           <span className="text-gray-700">Coupe</span>(14)
    //         </p>
    //       </div>
    //     </div>
    //     <div className="flex items-center gap-1">
    //       <div>
    //         <input type="checkbox" className="rounded-full" />
    //       </div>
    //       <div>
    //         <p className="text-[#90A3BF] text-[12px]">
    //           <span className="text-gray-700">Hatchback</span>(14)
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <p className="mt-6 text-[#90A3BF] text-[10px]">CAPACITY</p>
    //   <div className="flex flex-col gap-4 mt-3">
    //     <div className="flex items-center gap-1">
    //       <div>
    //         <input type="checkbox" className="rounded-full" />
    //       </div>
    //       <div>
    //         <p className="text-[#90A3BF] text-[14px]">
    //           <span className="text-gray-700">2 Person</span>(10)
    //         </p>
    //       </div>
    //     </div>
    //     <div className="flex items-center gap-1">
    //       <div>
    //         <input type="checkbox" className="rounded-full" />
    //       </div>
    //       <div>
    //         <p className="text-[#90A3BF] text-[14px]">
    //           <span className="text-gray-700">4 Person</span>(14)
    //         </p>
    //       </div>
    //     </div>
    //     <div className="flex items-center gap-1">
    //       <div>
    //         <input type="checkbox" className="rounded-full" />
    //       </div>
    //       <div>
    //         <p className="text-[#90A3BF] text-[14px]">
    //           <span className="text-gray-700">6 Person</span>(12)
    //         </p>
    //       </div>
    //     </div>
    //     <div className="flex items-center gap-1">
    //       <div>
    //         <input type="checkbox" className="rounded-full" />
    //       </div>
    //       <div>
    //         <p className="text-[#90A3BF] text-[14px]">
    //           <span className="text-gray-700">8 or More</span>(16)
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <p className="mt-2 text-[#90A3BF] text-[12px]">Price</p>
    //   <div className="mt-3">
    //     <InputRange />
    //     <p className="text-[#596780] text-[14px]">MAX.$100.00</p>
    //   </div>
    // </div>
//   );
// };

export default Sidebar;



