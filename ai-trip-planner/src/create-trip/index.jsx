import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { SelectBudgteOptions, SelectTravelList } from '@/components/constants/optinos';

function CreateTrip() {
  const [place,setPlace] = useState();
  return (
    // <div className="mt-12 text-center">
    //     <h1 className="text-3xl">Tell us your travel preferences <span role="img" aria-label="tent">⛺</span> <span role="img" aria-label="palm tree">🌴</span></h1>
    //     <p className="text-gray-600 mt-4">Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.</p>
        
    //     <form className="mt-8 inline-block text-left">
    //       <label className="block mt-4">What is your destination of choice?</label>
    //       <select className="w-full p-2 mt-2 border border-gray-300 rounded">
    //         <option>Select...</option>
    //         {/* Add destination options here */}
    //       </select>
          
    //       <label className="block mt-4">How many days are you planning your trip?</label>
    //       <input type="number" placeholder="Ex. 3" className="w-full p-2 mt-2 border border-gray-300 rounded" />
          
    //       <label className="block mt-4">What is Your Budget?</label>
    //       <div className="flex justify-between mt-4">
    //         <div className="text-center p-4 border border-gray-300 rounded hover:transform hover:scale-105 hover:shadow-lg transition-transform duration-300">
    //           <img src="path_to_cheap_icon.png" alt="Cheap" className="h-10 mx-auto" />
    //           <div className="mt-2">Cheap</div>
    //           <p className="text-gray-600 mt-2">Stay conscious of costs</p>
    //         </div>
    //         <div className="text-center p-4 border border-gray-300 rounded hover:transform hover:scale-105 hover:shadow-lg transition-transform duration-300">
    //           <img src="path_to_moderate_icon.png" alt="Moderate" className="h-10 mx-auto" />
    //           <div className="mt-2">Moderate</div>
    //           <p className="text-gray-600 mt-2">Keep costs on the average side</p>
    //         </div>
    //         <div className="text-center p-4 border border-gray-300 rounded hover:transform hover:scale-105 hover:shadow-lg transition-transform duration-300">
    //           <img src="path_to_luxury_icon.png" alt="Luxury" className="h-10 mx-auto" />
    //           <div className="mt-2">Luxury</div>
    //           <p className="text-gray-600 mt-2">Don't worry about cost</p>
    //         </div>
    //       </div>
          
    //       <label className="block mt-4">Who do you plan on traveling with on your next adventure?</label>
    //       <div className="flex justify-between mt-4">
    //         <div className="text-center p-4 border border-gray-300 rounded hover:transform hover:scale-105 hover:shadow-lg transition-transform duration-300">
    //           <img src="path_to_just_me_icon.png" alt="Just Me" className="h-10 mx-auto" />
    //           <div className="mt-2">Just Me</div>
    //           <p className="text-gray-600 mt-2">A sole traveler in exploration</p>
    //         </div>
    //         <div className="text-center p-4 border border-gray-300 rounded hover:transform hover:scale-105 hover:shadow-lg transition-transform duration-300">
    //           <img src="path_to_couple_icon.png" alt="A Couple" className="h-10 mx-auto" />
    //           <div className="mt-2">A Couple</div>
    //           <p className="text-gray-600 mt-2">Two travelers in tandem</p>
    //         </div>
    //         <div className="text-center p-4 border border-gray-300 rounded hover:transform hover:scale-105 hover:shadow-lg transition-transform duration-300">
    //           <img src="path_to_family_icon.png" alt="Family" className="h-10 mx-auto" />
    //           <div className="mt-2">Family</div>
    //           <p className="text-gray-600 mt-2">A group of fun-loving adventurers</p>
    //         </div>
    //         <div className="text-center p-4 border border-gray-300 rounded hover:transform hover:scale-105 hover:shadow-lg transition-transform duration-300">
    //           <img src="path_to_friends_icon.png" alt="Friends" className="h-10 mx-auto" />
    //           <div className="mt-2">Friends</div>
    //           <p className="text-gray-600 mt-2">A bunch of thrill-seekers</p>
    //         </div>
    //       </div>
          
    //       <button type="button" className="mt-6 px-6 py-2 bg-black text-white rounded cursor-pointer">Generate Trip</button>
    //     </form>
    // </div>


    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
      <h1 className="text-3xl font-oswald">Tell us your travel preferences <span role="img" aria-label="tent">⛺</span> <span role="img" aria-label="palm tree">🌴</span></h1>
      <p className="text-gray-600 mt-4">Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.</p>

      <div className='mt-20 flex flex-col gap-10'>
        <div>
          <h2 className='text-lg mb-3'>What is your destination of choice?</h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onchange : (v)=>{setPlace(v);console.log(v)} 
            }}
          />
        </div>

        <div>
          <h2 className='text-lg mb-3'>What is your destination of choice?</h2>
          <Input placeholder={'ex-3'} type="number"/>
        </div>


        <div>
          <h2 className='text-lg mb-3'>What is Your Budget?</h2>
          <div className='grid grid-cols-3 gap-5 mt-3'>
            {SelectBudgteOptions.map((item,index) =>(
              <div key={index} className='p-4 border rounded-lg hover:shadow-lg'>
                <h2>{item.icon}</h2>
                  <h2 className='font-bold text-lg'>{item.title}</h2>
                  <h2>{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        <div >
          <h2 className='text-lg mb-3'>Who do you plan on traveling with on your next adventure?</h2>
          <div className='grid grid-cols-3 gap-5 mt-3'>
            {SelectTravelList.map((item,index)=>(
              <div key={index} className='p-4 border rounded-lg hover:shadow-md'>
                <h2>{item.icon}</h2>
                  <h2 className='font-bold text-lg'>{item.title}</h2>
                  <h2>{item.desc}</h2> 
                
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>

  )
}

export default CreateTrip
