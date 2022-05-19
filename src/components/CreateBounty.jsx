import { Input } from "antd";
import { useMoralis } from "react-moralis";

function CreateBounty() {
  const { Moralis } = useMoralis();
  const serverUrl = "https://fqm6xvk1bz3n.usemoralis.com:2053/server";
  const appId = "8jqUFih6aO47wx0MKH0I10CaHkFTKCIGtI5F0WSV";
  Moralis.start({ serverUrl, appId });

  async function submitBounty() {
    let orgName = document.getElementById("org-name").value;
    let orgWeb = document.getElementById("org-web").value;
    let bountyTitle = document.getElementById("b-title").value;
    let bountyDesc = document.getElementById("b-desc").value;
    // let bountyTags = document.getElementById("b-tags").value;
    let rewardAmt = document.getElementById("reward-amt").value;
    const bountyData = Moralis.Object.extend("bountyData");
    const bountyInstance = new bountyData();
    bountyInstance.set("OrganizationName", orgName);
    bountyInstance.set("OrganizationWebsite", orgWeb);
    bountyInstance.set("BountyTitle", bountyTitle);
    bountyInstance.set("BountyDescription", bountyDesc);
    //bountyInstance.set("BountyTags", bountyTags);
    bountyInstance.set("Reward", rewardAmt);
    bountyInstance.save();
    document.getElementById("logger").innerHTML = "Task successfully created!";
  }
  return (
    //background//
    <div className="relative bg-slate flex items-center justify-center">
      Test
      <div className="relative bg-slate flex-col items-center justify-center h-3/4 w-3/4 p-10 m-10 rounded-xl overflow-auto">
        {/*Heading - Bounties*/}
        <div className="mb-20 mt-10 text-left">
          <span className="text-6xl font-bold items-center justify-center text-white p-10 m-10">
            CREATING BOUNTY
          </span>
        </div>
        <text id="logger">log</text>

        {/*Input 2 - First Time Posting*/}
        <div className="mb-20 mt-10 text-left">
          <span className="text-lg font-bold items-center justify-center text-white p-10 mx-10">
            Is this your first time posting a bounty?
          </span>
          <br></br>
          <div className="flex ml-20 mt-4">
            <div className="bg-primary-turquoise hover:bg-gray-200 rounded-xl w-20 h-10 flex justify-center text-center mr-4">
              <button className="font-semibold text-base">
                <span>Yes</span>
              </button>
            </div>
            <div className="bg-white hover:bg-purple-800 hover:text-gray-200 rounded-xl w-20 h-10 flex justify-center text-center text-black">
              <button className="text-base text-md font-semibold">
                <span>No</span>
              </button>
            </div>
          </div>
        </div>

        {/*Input 1 - Org Name*/}
        <div className="mb-20 mt-10 text-left inline-block">
          <span className="text-lg font-bold items-center justify-center text-white p-10 mx-10">
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
          <span className="text-lg font-bold items-center justify-center text-white p-10 mx-10">
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
          <span className="text-lg font-bold items-center justify-center text-white p-10 mx-10">
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
          <span className="text-lg font-bold items-center justify-center text-white p-10 mx-10">
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
          <span className="text-lg font-bold items-center justify-center text-white p-10 mx-10">
            What category does this bounty belong in? (maximum 3 categories)
          </span>
          <br></br>
          <form>
            <span className="border-white rounded-xl">
              <Input
                type="checkbox"
                id="dev-tag"
                className="items-center justify-center rounded-xl w-10 ml-20 text-white"
                value="dev"
              />
              <label htmlFor="dev-tag" className="text-white ml-4">
                Development
              </label>
            </span>

            <span className="border-white rounded-xl">
              <Input
                type="checkbox"
                id="des-tag"
                className="items-center justify-center rounded-xl w-10 ml-20 text-white"
                value="design"
              />
              <label htmlFor="des-tag" className="text-white ml-4">
                Design
              </label>
            </span>

            <span className="border-white rounded-xl">
              <Input
                type="checkbox"
                id="mark-tag"
                className="items-center justify-center rounded-xl w-10 ml-20 text-white"
                value="marketing"
              />
              <label htmlFor="mark-tag" className="text-white ml-4">
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
              <label htmlFor="other-tag" className="text-white ml-4">
                Other
              </label>
            </span>
          </form>
        </div>

        {/*Input 7 - Is there a reward?*/}
        <div className="mb-20 mt-10 text-left">
          <span className="text-lg font-bold items-center justify-center text-white p-10 mx-10">
            Is there a reward for this?
          </span>
          <br></br>
          <div className="flex ml-20 mt-4">
            <div className="bg-primary-turquoise hover:bg-gray-200 rounded-xl w-20 h-10 flex justify-center text-center mr-4">
              <button className="font-semibold text-base">
                <span>Yes</span>
              </button>
            </div>
            <div className="bg-white hover:bg-purple-800 hover:text-gray-200 rounded-xl w-20 h-10 flex justify-center text-center text-black mb-10">
              <button className="text-base text-md font-semibold">
                <span>No</span>
              </button>
            </div>
          </div>
          <span className="text-lg font-bold items-center justify-center text-white p-10 mx-10">
            Bounty Reward
          </span>
          <br></br>
          <script src="https://unpkg.com/flowbite@1.4.2/dist/datepicker.js"></script>
          <div inline-datepicker data-date="02/25/2022"></div>
          <Input
            id="reward-amt"
            className="items-center justify-center rounded-xl w-1/4 ml-20 mt-4"
            placeholder=""
          />
          <br></br>
          <br></br>
          <span className="text-lg font-bold items-center justify-center text-white p-10 mx-10">
            Is there a Deadline?
          </span>
          <br></br>
          <script src="https://unpkg.com/flowbite@1.4.2/dist/datepicker.js"></script>
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
