import React from 'react'

const About = () => {
  return (
    <div><h1>soy un about</h1>
            <div className="w-full">
      <video className="w-full" controls>
        <source src="/video.mp4" type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
    </div>
    </div>
    
  )
}

export default About