// import React from "react";
// import  "./Item.module.css";
// const Item = () => {
//     return (
//       <div className="relative bg-dark w-full h-[1147px] overflow-hidden text-left text-base text-gray-3 font-paragraph-3-semibold">
//         <div className="absolute top-[40px] left-[1px] flex flex-col items-center justify-center gap-[30px]">
//           <div className="flex flex-row items-center justify-center gap-[20px]">
//             <div className="rounded-small bg-black-2 w-[627px] h-10 shrink-0 flex flex-row py-[7px] pr-[19px] pl-[15px] box-border items-center justify-start">
//               <input
//                 className="[border:none] font-paragraph-3-semibold text-xs bg-[transparent] flex flex-row items-center justify-end"
//                 type="text"
//               />
//             </div>
//             <div className="w-[253px] shrink-0 flex flex-row items-start justify-start gap-[20px]">
//               <div className="relative w-[59px] h-[21px] shrink-0">
//                 <div className="absolute w-[112.5%] top-[0%] left-[0%] font-semibold inline-block">
//                   Explore
//                 </div>
//               </div>
//               <div className="relative w-[76px] h-[21px] shrink-0">
//                 <div className="absolute top-[0%] left-[0%] font-semibold">
//                   My Items
//                 </div>
//               </div>
//               <div className="relative w-[68px] h-[21px] shrink-0">
//                 <div className="absolute top-[0%] left-[0%] font-semibold">
//                   Following
//                 </div>
//               </div>
//             </div>
//             <div className="relative w-[265px] h-10 shrink-0">
//               <button className="cursor-pointer [border:none] py-[9px] px-[30px] bg-[transparent] absolute top-[0px] left-[0px] rounded-small [background:linear-gradient(101.12deg,_#eb1484,_#c91cc3_99.99%,_#c81cc5,_#c81cc5)] h-10 flex flex-row box-border items-center justify-center">
//                 <div className="relative text-sm font-semibold font-paragraph-3-semibold text-default-white text-left">
//                   Create
//                 </div>
//               </button>
//               <button className="cursor-pointer [border:none] py-[9px] px-[30px] bg-[transparent] absolute top-[0px] left-[119px] rounded-small w-[146px] h-10 flex flex-row box-border items-center justify-center">
//                 <div className="relative text-sm font-semibold font-paragraph-3-semibold text-red-violet text-left">
//                   Connect
//                 </div>
//               </button>
//             </div>
//           </div>
//           <img
//             className="relative w-[1437px] h-px shrink-0"
//             alt=""
//             src="../vector-1.svg"
//           />
//         </div>
//         <div className="absolute top-[810px] left-[35px] flex flex-col items-center justify-center gap-[32px] text-lg text-default-white">
//           <img
//             className="relative w-[1437px] h-px shrink-0"
//             alt=""
//             src="../vector-2.svg"
//           />
//           <div className="flex flex-row items-start justify-start gap-[155px]">
//             <div className="flex flex-col items-start justify-start gap-[25px] text-base">
//               <div className="relative font-semibold">Get the lastes Updates</div>
//               <div className="relative w-[357px] h-10 shrink-0 text-sm">
//                 <input
//                   className="[border:none] bg-black-2 absolute top-[0px] left-[0px] rounded-small w-[283px] h-10"
//                   type="text"
//                 />
//                 <div className="absolute top-[13px] left-[18px] leading-[105.7%] font-medium">
//                   Your Email
//                 </div>
//                 <button className="cursor-pointer [border:none] py-[9px] px-[30px] bg-[transparent] absolute top-[0px] left-[239px] rounded-small [background:linear-gradient(101.12deg,_#eb1484,_#c91cc3_99.99%,_#c81cc5,_#c81cc5)] w-[118px] h-10 flex flex-row box-border items-center justify-center">
//                   <div className="relative text-sm font-semibold font-paragraph-3-semibold text-default-white text-left">
//                     Email Me!
//                   </div>
//                 </button>
//               </div>
//             </div>
//             <div className="overflow-hidden flex flex-col items-start justify-start gap-[24px]">
//               <div className="relative font-semibold inline-block w-40">
//                 CryptoKet
//               </div>
//               <div className="overflow-hidden flex flex-col items-start justify-start gap-[12px] text-base">
//                 <div className="relative leading-[26px] inline-block w-40">
//                   Explore
//                 </div>
//                 <div className="relative leading-[26px] inline-block w-40">
//                   How it Works
//                 </div>
//                 <div className="relative leading-[26px] inline-block w-40">
//                   Contact Us
//                 </div>
//               </div>
//             </div>
//             <div className="overflow-hidden flex flex-col items-start justify-start gap-[24px]">
//               <div className="relative font-semibold inline-block w-40">
//                 Support
//               </div>
//               <div className="overflow-hidden flex flex-col items-start justify-start gap-[12px] text-base">
//                 <div className="relative leading-[26px] inline-block w-40">
//                   Help center
//                 </div>
//                 <div className="relative leading-[26px] inline-block w-40">
//                   Terms of service
//                 </div>
//                 <div className="relative leading-[26px] inline-block w-40">
//                   Legal
//                 </div>
//                 <div className="relative leading-[26px] inline-block w-40">
//                   Privacy policy
//                 </div>
//               </div>
//             </div>
//           </div>
//           <img
//             className="relative w-[1437px] h-px shrink-0"
//             alt=""
//             src="../vector-2.svg"
//           />
//           <div className="flex flex-row items-start justify-start gap-[543px] text-base">
//             <div className="relative font-semibold">
//               The Brand Global, Inc. All Rights Reserved
//             </div>
//             <div className="flex flex-row items-start justify-start gap-[20px]">
//               <img
//                 className="relative w-[25px] h-[25px] shrink-0"
//                 alt=""
//                 src="../group-14.svg"
//               />
//               <img
//                 className="relative w-[25px] h-[25px] shrink-0"
//                 alt=""
//                 src="../group-15.svg"
//               />
//               <img
//                 className="relative w-[25px] h-[25px] shrink-0"
//                 alt=""
//                 src="../group-16.svg"
//               />
//               <img
//                 className="relative w-[25px] h-[25px] shrink-0"
//                 alt=""
//                 src="../group-13.svg"
//               />
//             </div>
//           </div>
//         </div>
//         <input
//           className="cursor-pointer absolute top-[589px] left-[-2820px] text-sm font-semibold font-paragraph-3-semibold text-black text-left inline-block w-3 h-2"
//           type="checkbox"
//         >{`        `}</input>
//         <img
//           className="absolute top-[17px] left-[18px] w-[78px] h-20 object-cover"
//           alt=""
//           src="../image-1@2x.png"
//         />
//         <div className="absolute top-[204px] left-[449px] w-[578px] h-[605.99px] text-center text-[11px] text-gray-300">
//           <div className="absolute top-[0px] left-[0px] rounded-large bg-black-3 w-[578px] h-[605.99px]" />
//           <img
//             className="absolute top-[0px] left-[0px] w-[578px] h-[605.99px]"
//             alt=""
//             src="../graphic.svg"
//           />
//           <div className="absolute top-[241px] left-[115px] inline-block w-[358px] h-[23px]">
//             <p className="[margin-block-start:0] [margin-block-end:0px]">{`The total value you derived here will be the amount you’ll `}</p>
//             <p className="m-0">{`be receiving during the total transaction process `}</p>
//           </div>
//           <div className="absolute top-[188.48px] left-[105.45px] text-[13px] text-gray-100 inline-block w-[367.11px] h-[15.62px]">
//             <b>N360.00</b>
//             <span>
//               {" "}
//               is our conversion rate for every amazon card on this platform.
//             </span>
//           </div>
//           <input
//             className="[border:none] font-paragraph-3-semibold text-sm bg-[transparent] absolute h-[6.44%] w-[39.08%] top-[50.16%] right-[30.41%] bottom-[43.39%] left-[30.52%]"
//             type="text"
//             placeholder="Card Type"
//           />
//           <input
//             className="[border:none] font-paragraph-3-semibold text-sm bg-[transparent] absolute h-[6.44%] w-[39.08%] top-[58.43%] right-[30.41%] bottom-[35.12%] left-[30.52%]"
//             type="text"
//             placeholder="Card Currency"
//           />
//           <input
//             className="[border:none] font-paragraph-3-semibold text-sm bg-[transparent] absolute h-[6.44%] w-[39.08%] top-[66.7%] right-[30.41%] bottom-[26.85%] left-[30.52%]"
//             type="text"
//             placeholder="Amount"
//           />
//           <div className="absolute h-[6.44%] w-[19.48%] top-[76.48%] right-[40.2%] bottom-[17.08%] left-[40.32%]">
//             <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xxs bg-default-white" />
//           </div>
//           <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[536px] left-[200px] w-[175.77px] h-[35.15px]">
//             <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] rounded-xxl [background:linear-gradient(101.12deg,_#eb1484,_#c91cc3_99.99%,_#c81cc5,_#c81cc5)] w-[175.77px] h-[35.15px]" />
//             <b className="absolute w-[57.96%] top-[calc(50%_-_10.51px)] left-[22.16%] text-sm inline-block font-paragraph-3-semibold text-default-white text-center h-[13.02px]">
//               PROCEED
//             </b>
//           </button>
//           <div className="absolute w-[15.22%] top-[calc(50%_+_168.01px)] left-[45.16%] text-[18px] leading-[20px] text-gray-700 text-left inline-block h-[13px]">
//             #0.00
//           </div>
//           <img
//             className="absolute top-[35.8px] left-[188.11px] w-[201.36px] h-[139.9px]"
//             alt=""
//             src="../amazon-card.svg"
//           />
//         </div>
//       </div>
  
//     );
//   };
  
//   export default Item;