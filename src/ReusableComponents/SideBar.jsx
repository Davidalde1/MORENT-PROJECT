import InputRange from "../components/InputRange";

const SideBar = () => {
  return (
    <div className="px-6 mt-6 font-plus">
      <p className="text-[#90A3BF] text-[12px]">Type</p>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center gap-1">
          <div>
            <input type="checkbox" className="rounded-full" />
          </div>
          <div>
            <p className="text-[#90A3BF] text-[12px]">
              <span className="text-gray-700">Sport</span>(10)
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div>
            <input type="checkbox" className="rounded-full" />
          </div>
          <div>
            <p className="text-[#90A3BF] text-[12px]">
              <span className="text-gray-700">SUV</span>(12)
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div>
            <input type="checkbox" className="rounded-full" />
          </div>
          <div>
            <p className="text-[#90A3BF] text-[12px]">
              <span className="text-gray-700">MPV</span>(16)
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div>
            <input type="checkbox" className="rounded-full" />
          </div>
          <div>
            <p className="text-[#90A3BF] text-[12px]">
              <span className="text-gray-700">Sedan</span>(20)
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div>
            <input type="checkbox" className="rounded-full" />
          </div>
          <div>
            <p className="text-[#90A3BF] text-[12px]">
              <span className="text-gray-700">Coupe</span>(14)
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div>
            <input type="checkbox" className="rounded-full" />
          </div>
          <div>
            <p className="text-[#90A3BF] text-[12px]">
              <span className="text-gray-700">Hatchback</span>(14)
            </p>
          </div>
        </div>
      </div>
      <p className="mt-6 text-[#90A3BF] text-[10px]">CAPACITY</p>
      <div className="flex flex-col gap-4 mt-3">
        <div className="flex items-center gap-1">
          <div>
            <input type="checkbox" className="rounded-full" />
          </div>
          <div>
            <p className="text-[#90A3BF] text-[14px]">
              <span className="text-gray-700">2 Person</span>(10)
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div>
            <input type="checkbox" className="rounded-full" />
          </div>
          <div>
            <p className="text-[#90A3BF] text-[14px]">
              <span className="text-gray-700">4 Person</span>(14)
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div>
            <input type="checkbox" className="rounded-full" />
          </div>
          <div>
            <p className="text-[#90A3BF] text-[14px]">
              <span className="text-gray-700">6 Person</span>(12)
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div>
            <input type="checkbox" className="rounded-full" />
          </div>
          <div>
            <p className="text-[#90A3BF] text-[14px]">
              <span className="text-gray-700">8 or More</span>(16)
            </p>
          </div>
        </div>
      </div>
      <p className="mt-2 text-[#90A3BF] text-[12px]">Price</p>
      <div className="mt-3">
        <InputRange />
        <p className="text-[#596780] text-[14px]">MAX.$100.00</p>
      </div>
    </div>
  );
};

export default SideBar;



