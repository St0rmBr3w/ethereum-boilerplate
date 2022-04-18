//import CreateBounty from "./CreateBounty";

function BountyDetails() {
  return (
    <div className="relative bg-slate flex items-center justify-center">
      <div className="relative bg-slate flex-col items-center justify-center h-3/4 w-3/4 p-10 m-10 rounded-xl overflow-auto">
        {/*Heading - Bounties*/}
        <div className="mb-20 mt-10 text-center">
          {/*Task title*/}
          <span className="text-6xl font-bold items-center justify-center text-white p-10 m-10">
            Rebranding our whole organization for 50th anniversary
          </span>

          {/*Task tags*/}
          <div className="flex">
            <div className="bg-tag-blue rounded px-3 py-1 text-tiny mx-1 font-semibold items-center text-center">
              Website Design
            </div>
            <div className="bg-tag-blue rounded px-3 py-1 text-tiny mx-1 font-semibold items-center text-center">
              Brand Design
            </div>
            <div className="bg-tag-blue rounded px-3 py-1 text-tiny mx-1 font-semibold items-center text-center">
              Mobile App
            </div>
          </div>

          {/*Task date opened and deadline */}
          <div className="flex">
            <div className="bg-tag-blue rounded px-3 py-1 text-tiny mx-1 font-semibold items-center text-center">
              Website Design
            </div>
            <div className="bg-tag-blue rounded px-3 py-1 text-tiny mx-1 font-semibold items-center text-center">
              Brand Design
            </div>
            <div className="bg-tag-blue rounded px-3 py-1 text-tiny mx-1 font-semibold items-center text-center">
              Mobile App
            </div>
          </div>

          {/*Task description*/}
          <div className="flex">
            <div className="bg-tag-blue rounded px-3 py-1 text-tiny mx-1 font-semibold items-center text-center">
              Website Design
            </div>
            <div className="bg-tag-blue rounded px-3 py-1 text-tiny mx-1 font-semibold items-center text-center">
              Brand Design
            </div>
            <div className="bg-tag-blue rounded px-3 py-1 text-tiny mx-1 font-semibold items-center text-center">
              Mobile App
            </div>
          </div>

          {/*Task description*/}
          <div className="flex">
            <div className="bg-tag-blue rounded px-3 py-1 text-tiny mx-1 font-semibold items-center text-center">
              Website Design
            </div>
            <div className="bg-tag-blue rounded px-3 py-1 text-tiny mx-1 font-semibold items-center text-center">
              Brand Design
            </div>
            <div className="bg-tag-blue rounded px-3 py-1 text-tiny mx-1 font-semibold items-center text-center">
              Mobile App
            </div>
          </div>

          <div className="flex gap-5 mx-10">
            {/*Open bounties button*/}
            <div className="bg-primary-turquoise hover:bg-gray-200 rounded-xl w-24 h-12 flex justify-center text-center">
              <button className="font-semibold text-base">
                <span>View Applicants</span>
              </button>
            </div>

            {/*Closed bounties button*/}
            <div className="bg-white hover:bg-purple-800 hover:text-gray-200 rounded-xl w-28 h-12 flex justify-center text-center text-black">
              <button className="text-base text-md font-semibold">
                <span>Share</span>
              </button>
            </div>

            {/*Black bar divider*/}
            <div className="bg-white hover:bg-purple-800 hover:text-gray-200 rounded-xl w-28 h-12 flex justify-center text-center text-black">
              <button className="text-base text-md font-semibold">
                <span>Share</span>
              </button>
            </div>

            {/*Bounty Creator*/}
            <div className="flex">
              <div className="bg-tag-blue rounded px-3 py-1 text-tiny mx-1 font-semibold items-center text-center">
                Website Design
              </div>
              <div className="bg-tag-blue rounded px-3 py-1 text-tiny mx-1 font-semibold items-center text-center">
                Brand Design
              </div>
              <div className="bg-tag-blue rounded px-3 py-1 text-tiny mx-1 font-semibold items-center text-center">
                Mobile App
              </div>
            </div>

            {/*Bounty Funder*/}
            <div className="flex">
              <div className="bg-tag-blue rounded px-3 py-1 text-tiny mx-1 font-semibold items-center text-center">
                Website Design
              </div>
              <div className="bg-tag-blue rounded px-3 py-1 text-tiny mx-1 font-semibold items-center text-center">
                Brand Design
              </div>
              <div className="bg-tag-blue rounded px-3 py-1 text-tiny mx-1 font-semibold items-center text-center">
                Mobile App
              </div>
            </div>

            {/*Bounty Applicants*/}
            <div className="flex">
              <div className="bg-tag-blue rounded px-3 py-1 text-tiny mx-1 font-semibold items-center text-center">
                Website Design
              </div>
              <div className="bg-tag-blue rounded px-3 py-1 text-tiny mx-1 font-semibold items-center text-center">
                Brand Design
              </div>
              <div className="bg-tag-blue rounded px-3 py-1 text-tiny mx-1 font-semibold items-center text-center">
                Mobile App
              </div>
            </div>

            {/*All Activity*/}
            <div className="flex">
              <div className="bg-tag-blue rounded px-3 py-1 text-tiny mx-1 font-semibold items-center text-center">
                Website Design
              </div>
              <div className="bg-tag-blue rounded px-3 py-1 text-tiny mx-1 font-semibold items-center text-center">
                Brand Design
              </div>
              <div className="bg-tag-blue rounded px-3 py-1 text-tiny mx-1 font-semibold items-center text-center">
                Mobile App
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BountyDetails;
