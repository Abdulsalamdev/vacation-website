import React from "react";

export function Subscribe() {
  return (
    <div className="bg-[#E5FBF3] flex justify-center items-center p-[50px]" id="Contact">
      <div className="flex flex-col gap-[20px]">
        <p className="text-[clamp(30px,3.2vw,40px)] font-medium font-Work-Sans max-w-[670px] text-[#000000]">
          Subscribe to our Newsletter to get useful traveling information.
        </p>
        <div className="flex justify-between items-center bg-[white] p-[10px] rounded-[8px] gap-[30px] flex-wrap">
          <input
            placeholder="Enter your email address .."
            className="grow p-[10px]"
          />
          <button className="bg-[#1FC28B] text-[white] p-[10px] rounded-[8px]">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
}
