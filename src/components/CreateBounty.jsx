import { Input } from 'antd';

function CreateBounty() {
    return (
    //background//
    <div className="relative bg-slate flex items-center justify-center">
    
        Test
    
        <div className="relative bg-slate flex-col items-center justify-center h-3/4 w-3/4 p-10 m-10 rounded-xl overflow-auto">
        
            {/*Heading - Bounties*/}
            <div className="mb-20 mt-10 text-left">
                <span className="text-6xl font-bold items-center justify-center text-white p-10 m-10">CREATING BOUNTY</span>
            </div>

            {/*Input 1 - Org Name*/}
            <div className="mb-20 mt-10 text-left">
                <span className="text-lg font-bold items-center justify-center text-white p-10 mx-10">Organization Name</span>
                <br></br>
                <Input className="items-center justify-center rounded-xl w-1/2 ml-20 mt-4" placeholder="" />
            </div>

            {/*Input 2 - First Time Posting*/}
            <div className="mb-20 mt-10 text-left">
                <span className="text-lg font-bold items-center justify-center text-white p-10 mx-10">is this your first time posting a bounty?</span>
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

            {/*Input 3 - Organization Website*/}
            <div className="mb-20 mt-10 text-left">
                <span className="text-lg font-bold items-center justify-center text-white p-10 mx-10">Organization Website</span>
                <br></br>
                <Input className="items-center justify-center rounded-xl w-1/2 ml-20 mt-4" placeholder="" />
            </div>

            {/*Input 4 - Bounty Title*/}
            <div className="mb-20 mt-10 text-left">
                <span className="text-lg font-bold items-center justify-center text-white p-10 mx-10">Bounty Title</span>
                <br></br>
                <Input className="items-center justify-center rounded-xl w-1/2 ml-20 mt-4" placeholder="" />
            </div>

            {/*Input 5 - Bounty Description*/}
            <div className="mb-20 mt-10 text-left">
                <span className="text-lg font-bold items-center justify-center text-white p-10 mx-10">Bounty Description</span>
                <br></br>
                <Input className="items-center justify-center rounded-xl w-1/2 ml-20 mt-4" placeholder="" />
            </div>

            {/*Input 6 - Bounty Tags / Categories*/}
            <div className="mb-20 mt-10 text-left">
                <span className="text-lg font-bold items-center justify-center text-white p-10 mx-10">What category does this bounty belong in? (maximum 3 categories)</span>
                <br></br>
                <Input className="items-center justify-center rounded-xl w-1/2 ml-20 mt-4" placeholder="" />
            </div>

            {/*Input 7 - Is there a reward?*/}
            <div className="mb-20 mt-10 text-left">
                <span className="text-lg font-bold items-center justify-center text-white p-10 mx-10">Is there a reward for this?</span>
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
                <br></br>
                <span className="text-lg font-bold items-center justify-center text-white p-10 mx-10">What's the reward amount?</span>
                <br></br>
                <Input className="items-center justify-center rounded-xl w-1/4 ml-20 mt-4" placeholder="" />
            </div>

            {/*Submit, save, and cancel buttons*/}
            <div className="flex ml-20 mt-4">
                    <div className="bg-primary-turquoise hover:bg-gray-200 rounded-xl w-32 h-10 flex justify-center text-center mr-4">
                        <button className="font-semibold text-base">
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
