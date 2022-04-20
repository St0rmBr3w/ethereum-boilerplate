//import CreateBounty from "./CreateBounty";

function BountyDetails() {
  return (
    <div className="relative bg-slate flex items-center justify-center">
      <div className="relative bg-white flex-col items-center content-center justify-center h-3/4 w-3/4 p-10 m-10 rounded-3xl overflow-auto">
        {/*Bounty Title*/}
        <div className="text-black m-10">
          {/*Task title*/}
          <span className="text-4xl font-bold mx-10">
            Rebranding our whole organization for 50th anniversary
          </span>
          <br></br>
          <br></br>
          {/*Task tags*/}
          <div className="flex mx-10">
            <div className="bg-purple-600 text-white  rounded-xl px-4 py-2 text-lg mx-1 my-1 font-semibold justify-center items-center text-center">
              <span>Reward: 500 Karma</span>
            </div>
            <div className="bg-slate text-white rounded-xl px-4 py-3 text-small mx-1 my-1 font-semibold items-center justify-center text-center">
              <span>Development</span>
            </div>
            <div className="bg-slate text-white rounded-xl px-4 py-3 text-small mx-1 my-1 font-semibold items-center justify-center text-center">
              <span>Design</span>
            </div>
            <div className="bg-slate text-white rounded-xl px-4 py-3 text-small mx-1 my-1 font-semibold items-center justify-center text-center">
              <span>Marketing</span>
            </div>
          </div>

          {/*Task date opened and deadline */}
          <div className="ml-10 text-base flex">
            <span className="mr-5">
              <b>Bounty Opened:</b> 02/28/2022
            </span>
            <br></br>
            <span>
              <b>Bounty Deadline:</b> None
            </span>
          </div>

          {/*Task description*/}
          <div className="m-10">
            <span className="text-lg font-semibold">Description</span>
            <br></br>
            <span className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus,
              dui amet, nunc dolor. Amet tincidunt vel purus faucibus volutpat
              mattis molestie. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Tempus, dui amet, nunc dolor. Amet tincidunt vel
              purus faucibus volutpat mattis molestie. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Tempus, dui amet, nunc dolor.
              Amet tincidunt vel purus faucibus volutpat mattis molestie. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Tempus, dui
              amet, nunc dolor. Amet tincidunt vel purus faucibus volutpat
              mattis molestie.
            </span>
          </div>

          <div className="flex gap-5 mx-10">
            {/*Open bounties button*/}
            <div className="bg-purple-600 text-white hover:bg-gray-200 hover:text-black rounded-xl w-48 h-12 flex justify-center text-center">
              <button className="font-semibold text-base">
                <span>View Applicants</span>
              </button>
            </div>

            {/*Closed bounties button*/}
            <div className="bg-slate hover:bg-purple-600 hover:text-gray-200 rounded-xl w-28 h-12 flex justify-center text-center text-white">
              <button className="text-base text-md font-semibold">
                <span>Share</span>
              </button>
            </div>
          </div>

          {/*Black bar divider*/}
          <hr className="bg-slate w-full h-3 rounded-lg m-10"></hr>

          {/*Bounty Creator*/}
          <div className="flex m-10">
            <div className="border-slate border-4 w-72 h-36 rounded-xl mr-6 py-5 px-2">
              <span className="font-semibold text-3xl text-center mx-2 my-5">
                Bounty Creator
              </span>
              <br></br>
              {/*Bounty Creator profile pic goes here*/}
              <span className="text-lg text-center mx-2 my-5">
                Jane Sterling
              </span>
              <br></br>
              <span className="mx-2 my-5">
                <b>Email:</b> jane@sterlingco.com
              </span>
              <br></br>
              <span className="mx-2 my-5">
                <b>Website:</b> www.janesterlingco.com
              </span>
            </div>
            {/*Bounty Funder*/}
            <div className="border-slate border-4 w-72 h-36 rounded-xl py-5 px-2">
              <span className="font-semibold text-3xl text-center mx-2 my-5">
                Bounty Funder
              </span>
              <br></br>
              {/*Bounty Funder profile pic goes here*/}
              <span className="text-lg text-center mx-2 my-5">
                Dan Sterling
              </span>
              <br></br>
              <span className="mx-2 my-5">
                <b>Email:</b> dan@sterlingco.com
              </span>
              <br></br>
              <span className="mx-2 my-5">
                <b>Website:</b> www.danesterlingco.com
              </span>
            </div>
          </div>

          {/*Bounty Applicants*/}
          <div className="border-slate border-4 w-full h-full rounded-xl py-5 px-2 m-10">
            <span className="font-semibold text-3xl text-center mx-2 my-5">
              Bounty Applicants
            </span>
            {/*Bounty Applicant 1*/}
            <div>
              <div className="m-10 flex">
                <span className="font-semibold text-2xl text-center mr-64 w-100">
                  John Doe
                </span>
                <div className="flex absolute ml-96 mx-5">
                  {/*Bounty Applicants Accept*/}
                  <div className="bg-accept hover:bg-purple-600 hover:text-gray-200 rounded-xl w-24 h-8 flex justify-center text-center text-white mr-5">
                    <button className="text-base text-md font-semibold">
                      <span>Accept</span>
                    </button>
                  </div>
                  {/*Bounty Applicants Chat*/}
                  <div className="bg-chat hover:bg-purple-600 hover:text-gray-200 rounded-xl w-24 h-8 flex justify-center text-center text-white mr-5">
                    <button className="text-base text-md font-semibold">
                      <span>Chat</span>
                    </button>
                  </div>
                  {/*Bounty Applicants Decline*/}
                  <div className="bg-slate hover:bg-purple-600 hover:text-gray-200 rounded-xl w-24 h-8 flex justify-center text-center text-white mr-10">
                    <button className="text-base text-md font-semibold">
                      <span>Decline</span>
                    </button>
                  </div>
                </div>
                {/*Bounty Applicants Time*/}
                <div className="absolute ml-96 right-24">
                  <span className="text-xl text-center font-light">
                    2 hours ago
                  </span>
                </div>
                {/*Bounty Applicants' Message*/}
              </div>
              <div className="w-7/8 h-full border-slate border-2 mx-10 rounded-xl p-5">
                <span className="text-xl">
                  This seems like an exciting project! You can check out my work
                  at the link submitted and I really want to work on this
                  project!
                </span>
              </div>
            </div>
            {/*Bounty Applicant 2*/}
            <div>
              <div className="m-10 flex">
                <span className="font-semibold text-2xl text-center mr-64 w-100">
                  Lucy Hales
                </span>
                <div className="flex absolute ml-96 mx-5">
                  {/*Bounty Applicants Accept*/}
                  <div className="bg-accept hover:bg-purple-600 hover:text-gray-200 rounded-xl w-24 h-8 flex justify-center text-center text-white mr-5">
                    <button className="text-base text-md font-semibold">
                      <span>Accept</span>
                    </button>
                  </div>
                  {/*Bounty Applicants Chat*/}
                  <div className="bg-chat hover:bg-purple-600 hover:text-gray-200 rounded-xl w-24 h-8 flex justify-center text-center text-white mr-5">
                    <button className="text-base text-md font-semibold">
                      <span>Chat</span>
                    </button>
                  </div>
                  {/*Bounty Applicants Decline*/}
                  <div className="bg-slate hover:bg-purple-600 hover:text-gray-200 rounded-xl w-24 h-8 flex justify-center text-center text-white mr-10">
                    <button className="text-base text-md font-semibold">
                      <span>Decline</span>
                    </button>
                  </div>
                </div>
                {/*Bounty Applicants Time*/}
                <div className="absolute ml-96 right-24">
                  <span className="text-xl text-center font-light">
                    2 hours ago
                  </span>
                </div>
                {/*Bounty Applicants' Message*/}
              </div>
              <div className="w-7/8 h-full border-slate border-2 mx-10 rounded-xl p-5">
                <span className="text-xl">
                  OMG yes! I believe in you and the work that you do so much!
                  I’d love to be a part of this project!
                </span>
              </div>
            </div>
            {/*Bounty Applicant 3*/}
            <div>
              <div className="m-10 flex">
                <span className="font-semibold text-2xl text-center mr-64 w-100">
                  Ryan Morningstar
                </span>
                <div className="flex absolute ml-96 mx-5">
                  {/*Bounty Applicants Accept*/}
                  <div className="bg-accept hover:bg-purple-600 hover:text-gray-200 rounded-xl w-24 h-8 flex justify-center text-center text-white mr-5">
                    <button className="text-base text-md font-semibold">
                      <span>Accept</span>
                    </button>
                  </div>
                  {/*Bounty Applicants Chat*/}
                  <div className="bg-chat hover:bg-purple-600 hover:text-gray-200 rounded-xl w-24 h-8 flex justify-center text-center text-white mr-5">
                    <button className="text-base text-md font-semibold">
                      <span>Chat</span>
                    </button>
                  </div>
                  {/*Bounty Applicants Decline*/}
                  <div className="bg-slate hover:bg-purple-600 hover:text-gray-200 rounded-xl w-24 h-8 flex justify-center text-center text-white mr-10">
                    <button className="text-base text-md font-semibold">
                      <span>Decline</span>
                    </button>
                  </div>
                </div>
                {/*Bounty Applicants Time*/}
                <div className="absolute ml-96 right-24">
                  <span className="text-xl text-center font-light">
                    2 hours ago
                  </span>
                </div>
                {/*Bounty Applicants' Message*/}
              </div>
              <div className="w-7/8 h-full border-slate border-2 mx-10 rounded-xl p-5">
                <span className="text-xl">
                  This project is going to be EPIC, I really want to be a part
                  of the team!
                </span>
              </div>
            </div>
          </div>
          {/*All Activity*/}
          <div className="border-slate border-4 w-full h-full rounded-xl py-5 px-2 m-10">
            <span className="font-semibold text-3xl text-center mx-2 my-5">
              All Activity
            </span>
            {/*Bounty Applicant 3*/}
            <div>
              {/*User Activity 1*/}
              <div className="m-10 flex">
                <span className="font-semibold text-2xl text-center mr-64">
                  Jeremy Jimbo
                </span>
                {/*User Title*/}
                <div className="absolute mx-96 h-8 flex justify-center text-center text-black text-xl text-center font-light mr-5">
                  <span>Bounty Applicant</span>
                </div>
                {/*Bounty Applicants Time*/}
                <div className="absolute ml-96 right-24">
                  <span className="text-xl text-center font-light">
                    2 hours ago
                  </span>
                </div>
              </div>
              {/*User Activity 2*/}
              <div className="m-10 flex">
                <span className="font-semibold text-2xl text-center mr-64">
                  Lucy Hales
                </span>
                {/*User Title*/}
                <div className="absolute mx-96 h-8 flex justify-center text-center text-black text-xl text-center font-light mr-5">
                  <span>Bounty Applicant</span>
                </div>
                {/*Bounty Applicants Time*/}
                <div className="absolute ml-96 right-24">
                  <span className="text-xl text-center font-light">
                    5 hours ago
                  </span>
                </div>
              </div>
              {/*User Activity 3*/}
              <div className="m-10 flex">
                <span className="font-semibold text-2xl text-center mr-64">
                  Ryan Morningstar
                </span>
                {/*User Title*/}
                <div className="absolute mx-96 h-8 flex justify-center text-center text-black text-xl text-center font-light mr-5">
                  <span>Bounty Applicant</span>
                </div>
                {/*Bounty Applicants Time*/}
                <div className="absolute ml-96 right-24">
                  <span className="text-xl text-center font-light">
                    8 hours ago
                  </span>
                </div>
              </div>
              {/*User Activity 4*/}
              <div className="m-10 flex">
                <span className="font-semibold text-2xl text-center mr-64">
                  Dan Sterling
                </span>
                {/*User Title*/}
                <div className="absolute mx-96 h-8 flex justify-center text-center text-black text-xl text-center font-light mr-5">
                  <span className="mr-2">Funded Bounty @ </span>
                  <span className="font-bold"> .123 Karma</span>
                </div>
                {/*Bounty Applicants Time*/}
                <div className="absolute l-96 right-24">
                  <span className="text-xl text-center font-light">
                    1 day ago
                  </span>
                </div>
              </div>
              {/*User Activity 5*/}
              <div className="m-10 flex">
                <span className="font-semibold text-2xl text-center mr-64">
                  Jane Sterling
                </span>
                {/*User Title*/}
                <div className="absolute mx-96 h-8 flex justify-center text-center text-black text-xl text-center font-light mr-5">
                  <span>Created Bounty</span>
                </div>
                {/*Bounty Applicants Time*/}
                <div className="absolute ml-96 right-24">
                  <span className="text-xl text-center font-light">
                    2 days ago
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BountyDetails;
