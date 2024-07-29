import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="bg-cyan-400 flex">
      <div className="flex items-center justify-center">
        <Image
          className="w-full h-full"
          alt="Home Gym"
          src="https://www.thespruce.com/thmb/1PZ2ZkfWIPKdh7aLaHYRPPOgJgs=/5184x3456/filters:no_upscale():max_bytes(150000):strip_icc()/fin-2-rustic-home-gym-5a4428559e94270037b7d45e.jpg"
          width={5184}
          height={3456}
          layout="responsive"
        />
      </div>
    </div>
  );
}

export default Banner;
