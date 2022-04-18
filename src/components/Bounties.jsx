//import CreateBounty from "./CreateBounty";
import { useMoralis } from "react-moralis";
import "./Bounties.css";
import BountyCard from "./BountyCard";

function Bounties() {
  const { Moralis } = useMoralis();
  const serverUrl = "https://10qsie3bmezz.usemoralis.com:2053/server";
  const appId = "u4rYrjm7EDM2CifQKI0FYYVvrAA49AhYe1YNCoJm";
  Moralis.start({ serverUrl, appId });

  async function fetchData() {
    const bountyData = Moralis.Object.extend("bountyData");
    const query = new Moralis.Query(bountyData);
    query.limit(9);
    const results = await query.find();
    document.getElementById("heading").innerText = results[0].get(
      "BountyDescription",
    );
    document.getElementById("tag").innerText = results[0].get("BountyTags");
    document.getElementById("reward").innerText = results[0].get("Reward");
    // var outer = document.getElementById('outer');
    // var children = outer.getElementsByTagName('div');
    // var i, e;
    // for (i = 0; i < children.length; ++i) {
    //     e = children[i]
    //     console.log(JSON.stringify(e.getAttribute("header")));
    // }
    // console.log(JSON.stringify(results[0].get("OrganizationName")));
    // console.log(JSON.stringify(results));
  }
  return (
    //background//
    <div className="relative bg-slate flex items-center justify-center">
      <div className="relative bg-slate flex-col items-center justify-center h-3/4 w-3/4 p-10 m-10 rounded-xl overflow-auto">
        {/*Heading - Bounties*/}
        <div className="mb-20 mt-10 text-center">
          <span className="text-6xl font-bold items-center justify-center text-white p-10 m-10">
            BOUNTIES
          </span>
        </div>

        <div className="gap-5 m-10">
          <div className="bg-primary-turquoise hover:bg-gray-200 rounded-xl w-36 h-12 flex justify-center text-center mb-10">
            <button className="font-semibold text-base">
              <span>Organizations</span>
            </button>
          </div>

          <div className="relative grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-20 gap-x-16 justify-center items-center m-10">
            {/*Org Card*/}
            <div className="relative justify-center">
              <div>
                <div className="absolute rounded-xl w-72 h-28 left-1 inset-y-1 bg-primary-turquoise text-gray-50 p-8 z-0"></div>
                <div className="transform flex relative rounded-xl w-72 h-28 bg-black text-gray-50 p-8 z-10 hover:-translate-y-2 hover:-translate-x-2 ease-in-out duration-300">
                  {/*card logo*/}
                  <div className="h-2 w-20 mx-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/American_Red_Cross_logo.svg/1280px-American_Red_Cross_logo.svg.png"></img>
                  </div>

                  {/*card heading*/}
                  <div className="text-lg font-bold text-white px-2">
                    American Red Cross
                  </div>
                </div>
              </div>
            </div>

            {/*Org Card*/}

            <div className="relative justify-center">
              <div>
                <div className="absolute rounded-xl w-72 h-28 left-1 inset-y-1 bg-primary-turquoise text-gray-50 p-8 z-0"></div>
                <div className="transform flex relative rounded-xl w-72 h-28 bg-black text-gray-50 p-8 z-10 hover:-translate-y-2 hover:-translate-x-2 ease-in-out duration-300">
                  {/*card logo*/}
                  <div className="h-2 w-20 mx-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/American_Red_Cross_logo.svg/1280px-American_Red_Cross_logo.svg.png"></img>
                  </div>

                  {/*card heading*/}
                  <div className="text-lg font-bold text-white px-2">
                    American Red Cross
                  </div>
                </div>
              </div>
            </div>

            {/*Org Card*/}
            <div className="relative justify-center">
              <div>
                <div className="absolute rounded-xl w-72 h-28 left-1 inset-y-1 bg-primary-turquoise text-gray-50 p-8 z-0"></div>
                <div className="transform flex relative rounded-xl w-72 h-28 bg-black text-gray-50 p-8 z-10 hover:-translate-y-2 hover:-translate-x-2 ease-in-out duration-300">
                  {/*card logo*/}
                  <div className="h-2 w-20 mx-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/American_Red_Cross_logo.svg/1280px-American_Red_Cross_logo.svg.png"></img>
                  </div>

                  {/*card heading*/}
                  <div className="text-lg font-bold text-white px-2">
                    American Red Cross
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Left hand buttons*/}
        <div className="flex gap-5 mx-10">
          {/*Open bounties button*/}
          <div className="bg-primary-turquoise hover:bg-gray-200 rounded-xl w-24 h-12 flex justify-center text-center">
            <button onClick={fetchData} className="font-semibold text-base">
              <span>Open</span>
            </button>
          </div>

          {/*Closed bounties button*/}
          <div className="bg-white hover:bg-purple-800 hover:text-gray-200 rounded-xl w-28 h-12 flex justify-center text-center text-black">
            <button className="text-base text-md font-semibold">
              <span>Claimed</span>
            </button>
          </div>

          {/*Create bounties button*/}
          <div className="bg-purple-600 hover:bg-purple-800 hover:text-gray-200 rounded-xl w-40 h-12 ml-auto mr-10 flex justify-center text-center text-white">
            <a
              href="/createbounty"
              className="hover:text-gray-200 justify-center text-center flex"
            >
              <button className="text-base justify-center text-md font-semibold">
                <span className="hover:text-gray-200 text-center">
                  • Create Bounty
                </span>
              </button>
            </a>
          </div>
        </div>
        {/* <BountyCard
          title="Become a Web Developer in 10 minutes | 2020"
          views="3.2M Views"
          timestamp="3 days ago"
          channelImage="https://avatars0.githubusercontent.com/u/55864051?s=400&u=d17ca8209ac548d3d3033ddbe93f9741b7123263&v=4"
          channel="Shaqib Habib"
          image="https://i.ytimg.com/vi/J6rVaFzOEP8/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC50RZg-h1YCrv-n8T8kNoUJH6BAg"
        /> */}
        <BountyCard className="relative justify-center" />
        <div
          id="outer"
          className="relative grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-20 gap-x-12 justify-center items-center m-10"
        ></div>
      </div>
    </div>
  );
}

export default Bounties;
