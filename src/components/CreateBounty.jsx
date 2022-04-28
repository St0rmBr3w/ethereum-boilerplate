import { Input } from "antd";
import { useMoralis } from "react-moralis";

function CreateBounty() {
  const { Moralis } = useMoralis();
  const serverUrl = "https://10qsie3bmezz.usemoralis.com:2053/server";
  const appId = "u4rYrjm7EDM2CifQKI0FYYVvrAA49AhYe1YNCoJm";
  Moralis.start({ serverUrl, appId });

  async function submitBounty() {
    let orgName = document.getElementById("org-name").value;
    let orgWeb = document.getElementById("org-web").value;
    let bountyTitle = document.getElementById("b-title").value;
    let bountyDesc = document.getElementById("b-desc").value;
    let bountyTags = document.getElementById("b-tags").value;
    let rewardAmt = document.getElementById("reward-amt").value;
    const bountyData = Moralis.Object.extend("bountyData");
    const bountyInstance = new bountyData();
    bountyInstance.set("OrganizationName", orgName);
    bountyInstance.set("OrganizationWebsite", orgWeb);
    bountyInstance.set("BountyTitle", bountyTitle);
    bountyInstance.set("BountyDescription", bountyDesc);
    bountyInstance.set("BountyTags", bountyTags);
    bountyInstance.set("Reward", rewardAmt);
    bountyInstance.save();
    document.getElementById("logger").innerHTML = "Task successfully created!";


  }
  return (
    //background//
    <div className="relative bg-slate flex items-center justify-center">
      <div className="relative bg-white flex-col items-center justify-center h-full w-full p-10 overflow-auto">
        {/*Heading - Bounties*/}
        <div className="mb-20 mt-10 text-center">
          <span className="text-6xl font-bold items-center justify-center text-black p-10 m-10">
            CREATING BOUNTY
          </span>
        </div>

        {/*Input 2 - First Time Posting*/}
        <div className="mb-20 mt-10 text-left">
          <span className="text-lg font-bold items-center justify-center text-black p-10 mx-10">
            Is this your first time posting a bounty?
          </span>
          <br></br>
          <div className="flex ml-20 mt-4">
            <div className="bg-mustardYellow hover:bg-gray-200 rounded-xl w-20 h-10 flex justify-center text-center mr-4">
              <button className="font-semibold text-base">
                <span>Yes</span>
              </button>
            </div>
            <div className="bg-white hover:bg-purple-800 bg-gray-200 hover:text-gray-200 rounded-xl w-20 h-10 flex justify-center text-center text-black">
              <button className="text-base text-md font-semibold">
                <span>No</span>
              </button>
            </div>
          </div>
        </div>

        {/*Input 1 - Org Name*/}
        <div className="mb-20 mt-10 text-left inline-block">
          <span className="text-lg font-bold items-center justify-center text-black p-10 mx-10">
            Organization Name
          </span>
          <br></br>
          <Input
            id="org-name"
            className="items-center justify-center rounded-xl w-5/6 ml-20 mt-4"
            placeholder=""
          />
        </div>

        {/*Input 3 - Organization Website*/}
        <div className="mb-20 mt-10 text-left inline-block">
          <span className="text-lg font-bold items-center justify-center text-black p-10 mx-10">
            Organization Website
          </span>
          <br></br>
          <Input
            id="org-web"
            className="items-center justify-center rounded-xl w-5/6 ml-20 mt-4"
            placeholder=""
          />
        </div>

        {/*Input 4 - Bounty Title*/}
        <div className="mb-20 mt-10 text-left">
          <span className="text-lg font-bold items-center justify-center text-black p-10 mx-10">
            Bounty Title
          </span>
          <br></br>
          <Input
            id="b-title"
            className="items-center justify-center rounded-xl w-1/2 ml-20 mt-4"
            placeholder=""
          />
        </div>

        {/*Input 5 - Bounty Description*/}
        <div className="mb-20 mt-10 text-left">
          <span className="text-lg font-bold items-center justify-center text-black p-10 mx-10">
            Bounty Description
          </span>
          <br></br>
          <Input
            id="b-desc"
            className="items-center justify-center rounded-xl w-1/2 pt-10 pb-10 lh-100 mx-20 mt-4"
            placeholder=""
          />
        </div>

        {/*Input 6 - Bounty Tags / Categories*/}
        <div className="mb-20 mt-10 text-left">
          <span className="text-lg font-bold items-center justify-center text-black p-10 mx-10">
            What category does this bounty belong in? (maximum 3 categories)
          </span>
          <br></br>
          <form>
            <span className="bg-grey">
              <Input
                type="checkbox"
                id="dev-tag"
                className="items-center justify-center rounded-xl w-10 ml-20 text-black"
                value="dev"
              />
              <label htmlFor="dev-tag" className="text-black ml-4">
                Development
              </label>
            </span>

            <span className="">
              <Input
                type="checkbox"
                id="des-tag"
                className="items-center justify-center rounded-xl w-10 ml-20 text-black"
                value="design"
              />
              <label htmlFor="des-tag" className="text-black ml-4">
                Design
              </label>
            </span>

            <span className="">
              <Input
                type="checkbox"
                id="mark-tag"
                className="items-center justify-center rounded-xl w-10 ml-20 text-black"
                value="marketing"
              />
              <label htmlFor="mark-tag" className="text-black ml-4">
                Marketing
              </label>
            </span>

            <span className="">
              <Input
                type="checkbox"
                id="other-tag"
                className="items-center justify-center rounded-xl w-10 ml-20"
                value="other"
              />
              <label htmlFor="other-tag" className="text-black ml-4">
                Other
              </label>
            </span>
          </form>
        </div>

        {/*Input 7 - Is there a reward?*/}
        <div className="mb-20 mt-10 text-left">
          <span className="text-lg font-bold items-center justify-center text-black p-10 mx-10">
            Is there a reward for this?
          </span>
          <br></br>
          
          <div>
            <div className="mt-1 relative rounded-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm mx-20"> $ </span>
              </div>
              <input type="text" name="price" id="price" className="focus:ring-indigo-500 mx-20 block w-1/4 pl-7 sm:text-sm border-gray-600 rounded-md mb-20" placeholder="0.00"></input>
              <div className="absolute inset-y-0 left-1/4 flex items-center">
                <label htmlFor="currency" className="sr-only">Currency</label>
                <select id="currency" name="currency" className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                  <option>USD</option>
                  <option>CAD</option>
                  <option>EUR</option>
                </select>
              </div>
            </div>
          </div>

          <br></br>
          <span className="text-lg font-bold items-center justify-center text-black p-10 mx-10">
            Is there a Deadline?
          </span>
          <br></br>
          <div inline-datepicker data-date="02/25/2022"></div>
          <Input
            id="deadline"
            className="items-center justify-center rounded-xl w-1/4 ml-20 mt-4"
            placeholder=""
          />
        </div>

        {/*Submit, save, and cancel buttons*/}
        <div className="flex ml-20 mt-4">
          <div className="bg-primary-turquoise hover:bg-gray-200 rounded-xl w-32 h-10 flex justify-center text-center mr-4">
            <button onClick={submitBounty} className="font-semibold text-base">
              <span>Submit Bounty</span>
            </button>
          </div>
          <div className="bg-white hover:bg-purple-800 hover:text-gray-200 rounded-xl w-28 h-10 flex justify-center text-center text-black mr-4">
            <button className="text-base text-md font-semibold">
              <span>Save Draft</span>
            </button>
          </div>
          <div className="bg-white hover:bg-purple-800 hover:text-gray-200 rounded-xl w-24 h-10 flex justify-center text-center text-black">
            <button className="text-base text-md font-semibold">
              <span>Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBounty;
