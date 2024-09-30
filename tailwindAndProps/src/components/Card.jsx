import React from 'react'

function Card({name, btnText}) {
    console.log(name, btnText);
    
  return (
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/28542950/pexels-photo-28542950.jpeg?cs=srgb&dl=pexels-regine-baeker-1861811996-28542950.jpg&fm=jpg&_gl=1*5acmvn*_ga*MTM1MzMyMDM1MC4xNzI3MzM0Nzc3*_ga_8JE65Q40S6*MTcyNzMzNDc3Ny4xLjEuMTcyNzMzNDgyOS4wLjAuMA.." alt="" width="384" height="512" />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div>
              {name}
            </div>
            <div>
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
        <button>{btnText}</button>
      </figure>
  )
}

export default Card

