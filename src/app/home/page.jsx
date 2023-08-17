"use client";
import Image from "next/image";
import React from "react";
import Bubble from "../../../public/images/bubble.webp";
import Ball1 from "../../../public/images/ball-1.webp";
import Ball2 from "../../../public/images/ball-2.webp";
import Ball3 from "../../../public/images/ball-3.webp";

const Page = () => {
  return (
    <div className="bg-black">
      <div className="back-cover">
        <div className="flex justify-between items-center py-6 px-10 text-white">
          <div className="text-2xl font-semibold">Design3</div>
          <div className="flex gap-3 max-[600px]:hidden">
            <div className="text-lg cursor-pointer hover:opacity-[0.60]">
              About
            </div>
            <div className="text-lg cursor-pointer hover:opacity-[0.60]">
              Portfolio
            </div>
            <div className="text-lg cursor-pointer hover:opacity-[0.60]">
              Contact
            </div>
          </div>
          <div>
            <button className="rounded-[80px] py-3 px-6 bg-[#ffffff33] hover:opacity-[0.60]">
              Wallet Connect
            </button>
          </div>
        </div>
        <div className="p-10">
          <div className="flex max-[1100px]:flex-wrap">
            <div className="w-[50%] max-[1100px]:w-[100%]">
              <div className="text-white text-8xl max-[620px]:text-5xl font-semibold mt-10">
                Designing the Future of the
                <span className="text-[#bef84f]">Web3</span>
              </div>
              <div className="text-2xl text-white mt-6">
                We help companies design their products to be ready for web3
                world.
              </div>
            </div>
            <div className="w-[50%] max-[1100px]:w-[100%]">
              <Image
                src={Bubble}
                alt="bubble picture"
                className="max-[1100px]w-[60%] max-[500px]:w-[100%] m-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-5xl text-center font-semibold text-white my-11">
          Side Projects
        </div>
        <div className="flex max-[735px]:flex-wrap">
          <div className="w-[50%] max-[735px]:w-[100%] p-9">
            <div className="back-image-one h-[385px]">
              <div className="flex justify-between p-4 w-[100%] text-white bg-[#ffffff33] b-box">
                <div>
                  <div>KAAY Web3</div>
                  <div>Brand Strategy</div>
                </div>
                <div>
                  <div>2022</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50%] max-[735px]:w-[100%] p-9">
            <div className="back-image-two h-[385px]">
              <div className="flex justify-between p-4 w-[100%] text-white bg-[#ffffff33] b-box">
                <div>
                  <div>WebChain</div>
                  <div>Brand Identity, Web Design</div>
                </div>
                <div>
                  <div>2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-9">
        <div className="text-[144px] max-[800px]:text-[60px] text-white text-center">
          Ready for <span className="text-[#bef84f]">Web3</span>
        </div>
        <div className="flex max-[800px]:flex-wrap">
          <div className="w-[33.33%] max-[800px]:w-[50%] max-[500px]:w-[100%] p-2">
            <div>
              <Image src={Ball1} alt="picture" />
              <div className="text-4xl font-semibold text-white text-center">
                Product Strategy
              </div>
              <div className="text-white text-center mt-2">
                Are you at the idea stage? We will help you identify the
                critical MVP product scope
              </div>
            </div>
          </div>
          <div className="w-[33.33%] max-[800px]:w-[50%] max-[500px]:w-[100%] p-2">
            <div>
              <Image src={Ball2} alt="picture" />
              <div className="text-4xl font-semibold text-white text-center">
                Product Design
              </div>
              <div className="text-white text-center mt-2">
                Sharp look, great experience and memorable brand as deliverables
                to launch.
              </div>
            </div>
          </div>
          <div className="w-[33.33%] max-[800px]:w-[50%] max-[500px]:w-[100%] p-2">
            <div>
              <Image src={Ball3} alt="picture" />
              <div className="text-4xl font-semibold text-white text-center">
                Maintain & Support
              </div>
              <div className="text-white text-center mt-2">
                After launch cooperation. We will work closely to bring new
                features and guide product market fit.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center p-6 text-white back-cover">
        <div className="text-lg">Design3</div>
        <div>Copy Right @2023</div>
        <div></div>
      </div>
    </div>
  );
};

export default Page;
