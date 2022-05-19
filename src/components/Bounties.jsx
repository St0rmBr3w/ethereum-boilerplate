//import CreateBounty from "./CreateBounty";
import { useMoralis } from "react-moralis";
import "./Bounties.css";
import BountyCard from "./BountyCard";
import { useEffect, useState } from "react";
import BountyDetails from "./BountyDetails";


//var results;
function Bounties() {
  const [openModal, setOpenModal] = useState(false);
  const [tweetArr, setTweetArr] = useState();
  const { Moralis } = useMoralis();
  const serverUrl = "https://fqm6xvk1bz3n.usemoralis.com:2053/server";
  const appId = "8jqUFih6aO47wx0MKH0I10CaHkFTKCIGtI5F0WSV";
  Moralis.start({ serverUrl, appId });
  async function fetchData() {
    const bountyData = Moralis.Object.extend("bountyData");
    const query = new Moralis.Query(bountyData);
    query.limit(12);
    const results = await query.find();
    setTweetArr(results);
    console.log(results[0].get("BountyDescription"));
    console.log(results[1].get("BountyDescription"));
    console.log(results[2].get("BountyDescription"));
  }

  useEffect(() => {
    async function getTweets() {
      try {
        const bountyData = Moralis.Object.extend("bountyData");
        const query = new Moralis.Query(bountyData);
        query.limit(12);
        const results = await query.find();

        setTweetArr(results);
        console.log(results);
      } catch (error) {
        console.error(error);
      }
    }
    getTweets();
  });

  return (
    //background//
    
    <div
      // onLoad="fetchData()"
      className="relative bg-white flex items-center justify-center"
    >
      {openModal && <BountyDetails closeModal={setOpenModal} />}
      <div className="relative bg-white flex-col items-center justify-center h-3/4 w-3/4 p-10 m-10 rounded-xl overflow-auto">
        {/*Heading - Bounties*/}
        <div className="mb-20 mt-10 text-center">
          <span className="text-6xl font-bold items-center justify-center text-slate p-10 m-10">
            BOUNTIES
          </span>
        </div>

        <div className="gap-5 m-10">
          <div className="flex">
            <div className="mr-5 bg-purple-600 text-white hover:bg-gray-200 hover:text-black rounded-xl w-36 h-12 flex justify-center text-center mb-10">
              <button className="font-semibold text-base">
                <span>Organizations</span>
              </button>
            </div>
            <div className="bg-black text-white hover:bg-gray-200 hover:text-black rounded-xl w-36 h-12 flex justify-center text-center mb-10">
              <button className="font-semibold text-base">
                <span>Filters</span>
              </button>
            </div>
          </div>

          <div className="relative grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-20 gap-x-16 justify-center items-center m-10">
            {/*Org Card*/}
            <div className="relative justify-center">
              <div>
                <div className="absolute rounded-xl w-72 h-28 left-1 inset-y-1 bg-purple-600 text-gray-50 p-8 z-0"></div>
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
                <div className="absolute rounded-xl w-72 h-28 left-1 inset-y-1 bg-purple-600 text-gray-50 p-8 z-0"></div>
                <div className="transform flex relative rounded-xl w-72 h-28 bg-black text-gray-50 p-8 z-10 hover:-translate-y-2 hover:-translate-x-2 ease-in-out duration-300">
                  {/*card logo*/}
                  <div className="h-2 w-20 mx-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/UNICEF_Logo.png"></img>
                  </div>

                  {/*card heading*/}
                  <div className="text-lg font-bold text-white px-2">
                    UNICEF
                  </div>
                </div>
              </div>
            </div>

            {/*Org Card*/}
            <div className="relative justify-center">
              <div>
                <div className="absolute rounded-xl w-72 h-28 left-1 inset-y-1 bg-purple-600 text-gray-50 p-8 z-0"></div>
                <div className="transform flex relative rounded-xl w-72 h-28 bg-black text-gray-50 p-8 z-10 hover:-translate-y-2 hover:-translate-x-2 ease-in-out duration-300">
                  {/*card logo*/}
                  <div className="h-2 w-20 mx-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/World_Health_Organization_Logo.svg/1280px-World_Health_Organization_Logo.svg.png"></img>
                  </div>

                  {/*card heading*/}
                  <div className="text-lg font-bold text-white px-2">
                    World Health Organization
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Left hand buttons*/}
        <div className="flex gap-5 mx-10">
          {/*Open bounties button*/}
          <div className="bg-purple-600 hover:bg-gray-200 text-white hover:text-black rounded-xl w-24 h-12 flex justify-center text-center">
            <button onClick={fetchData} className="font-semibold text-base">
              <span>Open</span>
            </button>
          </div>

          {/*Closed bounties button*/}
          <div className="bg-slate hover:bg-gray-200 text-white hover:text-black rounded-xl w-28 h-12 flex justify-center text-center text-black">
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

        <br></br>
        <div
          id="testicles"
          className="relative grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-20 gap-x-12 justify-center items-center m-10"
        >

{/* <button
            onClick={() => {
              setOpenModal(true);
              window.scrollTo(0, 0);
            }}
          >
            <BountyCard
              bounty="400"
              description="Create a new logo for UCSD's Foundation"
              logoSrc="https://upload.wikimedia.org/wikipedia/commons/f/f6/UCSD_logo.png"
            />
          </button> */}
          {tweetArr?.map((e) => {

            return (
              <button
             onClick={() => {
               setOpenModal(true);
               window.scrollTo(0, 0);
             }} >
              <BountyCard
                bounty={e.attributes.Reward}
                description={e.attributes.BountyDescription}
                logoSrc={e.attributes.OrganizationName}
              />
              </button>
            );
          }).reverse()}
          {/* <BountyCard
            id="card1"
            bounty="400"
            description="hi"
            logoSrc="https://upload.wikimedia.org/wikipedia/commons/f/f6/UCSD_logo.png"
          />
          <BountyCard
            id="card2"
            bounty="250"
            description="Sign up to volunteer for a food distribution center."
            logoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/American_Red_Cross_logo.svg/1024px-American_Red_Cross_logo.svg.png"
          />
          <BountyCard
            id="card3"
            bounty="500"
            description="Build a new profile on our job board"
            logoSrc="https://upload.wikimedia.org/wikipedia/commons/5/57/UNICEF_Logo.png"
          />
          <BountyCard
            id="card4"
            bounty="100"
            description="Attend a World Health Orgnization seminar."
            logoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/World_Health_Organization_Logo.svg/1280px-World_Health_Organization_Logo.svg.png"
          />
          <BountyCard
            id="card5"
            bounty="100"
            description="Enroll in the FEEDING AMERICA reading list"
            logoSrc="https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Feeding_America_logo.svg/1200px-Feeding_America_logo.svg.png"
          />
          <BountyCard
            id="card6"
            bounty="100"
            description="Contribute 5 reviews on published journals."
            logoSrc="https://logos-download.com/wp-content/uploads/2016/11/YWCA_logo_logotype.png"
          />
          <BountyCard
            bounty="400"
            description="Fill out the CAPES for 3 of your professors!"
            logoSrc="https://upload.wikimedia.org/wikipedia/commons/f/f6/UCSD_logo.png"
          />
          <BountyCard
            bounty="250"
            description="Sign up to volunteer for a food distribution center."
            logoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/American_Red_Cross_logo.svg/1024px-American_Red_Cross_logo.svg.png"
          />
          <BountyCard
            bounty="500"
            description="Register and Vote on Public Health Policies."
            logoSrc="https://upload.wikimedia.org/wikipedia/commons/5/57/UNICEF_Logo.png"
          />

          <BountyCard
            bounty="100"
            description="Contribute 5 reviews on published journals."
            logoSrc="https://logos-download.com/wp-content/uploads/2016/11/YWCA_logo_logotype.png"
          />
          <BountyCard
            bounty="100"
            description="Attend a World Health Orgnization seminar."
            logoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/World_Health_Organization_Logo.svg/1280px-World_Health_Organization_Logo.svg.png"
          />
          <BountyCard
            bounty="100"
            description="Enroll in the FEEDING AMERICA reading list"
            logoSrc="https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Feeding_America_logo.svg/1200px-Feeding_America_logo.svg.png"
          /> */}
        </div>

        <div
          id="outer"
          className="relative grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-20 gap-x-12 justify-center items-center m-10"
        ></div>
      </div>
    </div>
  );
}

export default Bounties;
