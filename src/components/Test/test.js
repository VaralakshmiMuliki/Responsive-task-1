import React, { Component } from 'react'
 
import BeforeAfterSlider from 'react-before-after-slider'
 
class Example extends Component {
  render () {
    const before = 'https://...example1.jpg'
    const after = 'https://...example2.jpg'
 
    return (
      <BeforeAfterSlider
        before={before}
        after={after}
        width={640}
        height={480}
      />
    )
  }
}
export default Example;