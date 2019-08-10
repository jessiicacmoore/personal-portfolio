import React from 'react'
import Particles from 'react-particles-js'


const ParticlesBG = () => {
  const style = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  }

  return (
    <div style={style}>
      <Particles />
    </div>
  )
}

export default ParticlesBG
