import React from 'react'

function Hero() {
  return (
    <div>
      
      <div className="container mx-50 text-center py-10">
          <h1 className="text-7xl font-bold mb-4">Your Next Journey, Optimized</h1>
          <p className="text-lg font-sans mb-6 mx-60">Build, personalize, and optimize your itineraries with our free AI trip planner. Designed for vacations, workations, and everyday adventures.</p>
          <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-lg">Create a new trip</button>
      </div>

      <div className="flex flex-col items-center py-10">
        <h2 className="text-3xl font-semibold mb-4">Your AI-Powered Trip</h2>
        <p className="text-lg text-muted-foreground mb-6">The most optimal</p>
        <p className="text-base mb-6">
          Craft your perfect itinerary with Trip Planner AI. Our advanced algorithms take into account your selected explore-sights, dining, and lodging preferences to create the optimal travel plan
          tailored just for you.
        </p>
        <img aria-hidden="true" alt="trip-illustration" src="https://openui.fly.dev/openui/300x200.svg?text=🌴" />
      </div>
    </div>
  )
}

export default Hero