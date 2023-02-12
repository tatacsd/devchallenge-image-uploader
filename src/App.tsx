import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto h-screen content-center flex align-baseline justify-center items-center">
      {/* div in the center of the page */}
      <div className="shadow-lg md:w-[402px] md:h-[469px] rounded-lg py-8 px-8">
        <h1
          className="text-center 
          text-lg leading-4 tracking-tight text-[#4F4F4F] font-medium	font-poppins
        "
        >
          Upload your image
        </h1>

        <p className="text-center font-medium text-[#828282] font-poppins text-xs leading-4 mt-4 mb-7">
          File should be Jpeg, Png,...
        </p>

        {/* box to drop */}
        <div className="border-2 border-dashed bg-[#f6f8fb] border-[#97bef4] rounded-lg h-[180px] flex flex-col justify-center items-center">
          <div className="mt-8">
            <img
              className="w-[114.13px] h-[88.24px]"
              src="/image.svg"
              alt="image-uploader"
            />
          </div>
          <p className="text-center font-medium text-[#BDBDBD] font-poppins text-xs leading-4 my-8">
            Drag & Drop your image here
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="font-medium text-[#BDBDBD] font-poppins text-xs leading-4 mt-8">
            Or
          </p>
          <button className="text-white font-noto bg-[#2F80ED] px-4 py-3 font-medium text-xs leading-4 mt-5 rounded-md">
            Choose a file
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
