import React from "react";
import "./VideoCard.css";
//import Avatar from "@material-ui/core/Avatar";

function BountyCard({ description, bounty, logoSrc }) {
  //image, title, channel, timestamp, views, channelImage }
  return (
    <div className="relative justify-center">
      {/*card turquoise background & gray foreground*/}
      <div>
        <div className="absolute rounded-xl w-72 h-72 left-1 inset-y-1 bg-purple-600 text-gray-50 p-8 z-0"></div>
        <div className="transform relative rounded-xl w-72 h-72 bg-black text-gray-50 p-8 space-y-7 z-10 hover:-translate-y-2 hover:-translate-x-2 ease-in-out duration-300">
          {/*card logo*/}
          {/* <div className="h-2 w-20">
            <img src={logoSrc}></img>
          </div> */}
          {/*card name*/}
          <div className="text-lg font-bold text-white">{logoSrc}</div>

          {/*card heading*/}
          <div className="text-lg font-bold text-white">{description}</div>

          {/*card tags*/}
          <div className="flex">
            <div className="bg-white text-black rounded px-3 py-1 text-sm mx-1 font-semibold items-center text-center">
              Development
            </div>
            <div className="bg-white text-black rounded px-3 py-1 text-sm mx-1 font-semibold items-center text-center">
              Design
            </div>
            {/* <div className="bg-white text-black rounded px-3 py-1 text-sm mx-1 font-semibold items-center text-center">
              Marketing
            </div> */}
          </div>

          {/*card button*/}
          <div>
            <button className="block bg-purple-600 p-3 rounded-xl font-bold text-white">
              <span className="text-white">
                Reward: <b>{bounty}</b>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BountyCard;

// <div className="relative justify-center">
//       <img className="videoCard__thumbnail" src={image} alt="" />
//       <div className="videoCard__info ">
//         <Avatar
//           className="videoCard__avatar"
//           alt={channel}
//           src={channelImage}
//         />
//         <div className="videoCard__text">
//           <h4>{title}</h4>
//           <p>{channel}</p>
//           <p>
//             {views} • {timestamp}
//           </p>
//         </div>
//       </div>
//     </div>

// <div className="relative justify-center">
//             {/*card turquoise background & gray foreground*/}
//             <div>
//               <div className="absolute rounded-xl w-72 h-72 left-1 inset-y-1 bg-primary-turquoise text-gray-50 p-8 z-0"></div>
//               <div className="transform relative rounded-xl w-72 h-72 bg-black text-gray-50 p-8 space-y-7 z-10 hover:-translate-y-2 hover:-translate-x-2 ease-in-out duration-300">
//                 {/*card logo*/}
//                 <div className="h-2 w-20">
//                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/American_Red_Cross_logo.svg/1280px-American_Red_Cross_logo.svg.png"></img>
//                 </div>

//                 {/*card heading*/}
//                 <div className="text-lg font-bold text-white">
//                   Rebranding our whole organization for 50th anniversary.
//                 </div>

//                 {/*card tags*/}
//                 <div className="flex">
//                   <div className="bg-tag-blue rounded px-3 py-1 text-tiny mx-1 font-semibold items-center text-center">
//                     Website Design
//                   </div>
//                   <div className="bg-tag-blue rounded px-3 py-1 text-tiny mx-1 font-semibold items-center text-center">
//                     Brand Design
//                   </div>
//                   <div className="bg-tag-blue rounded px-3 py-1 text-tiny mx-1 font-semibold items-center text-center">
//                     Mobile App
//                   </div>
//                 </div>

//                 {/*card button*/}
//                 <div>
//                   <button className="block text-slate bg-primary-turquoise p-3 rounded font-bold">
//                     <span>
//                       Reward: <b>800 Coins</b>
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
