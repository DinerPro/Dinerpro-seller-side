import React from "react";
import Image from "next/image";
import orderSuccess from "../../../../../public/images/Order-success.svg";
import Link from "next/link";

export default function OrderSuccess() {
  return (
    <div className="flex justify-center items-center">
      <div className="border border-[#B1B1B4] w-[1010px] h-[829px] rounded-lg mt-6 text-center ">
        <div className="flex justify-center mt-10">
          <Image src={orderSuccess} alt="success" />
        </div>

        <h1 className="font-[400px] text-[36px] mt-4">Order Confirmed</h1>
        <p className="text-lg">your Payment ID: 1234</p>
        <div className="mt-6 flex justify-center">
          <Link href="#">
            <button className="mt-10 bg-primary border border-[#4F4F4F] w-[311px] p-[15px] rounded-lg">
              Back to orders
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
