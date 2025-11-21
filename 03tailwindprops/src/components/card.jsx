import React from 'react'

function Card({username,btnText="visit me"}) {{/*deafault value is being set incase no btntext is paased*/}
  return (
    <div className="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
      
      {/* Image */}
      <img
        src="https://picsum.photos/400/250"
        alt="Random"
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-6">
        <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-600 rounded-full mb-3">
          Featured
        </span>
        <h2 className="text-lg font-bold text-gray-800 mb-2">
          {username}
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          Discover modern design components and patterns that bring elegance
          to your web apps.
        </p>

        {/* Button + Stats */}
        <div className="flex items-center justify-between">
          <button className="px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            {btnText}
          </button>
          <span className="text-xs text-gray-500">234 views</span>
        </div>
      </div>
    </div>
  )
}

export default Card
