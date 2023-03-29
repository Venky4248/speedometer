// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state

    if (count < 200) {
      this.setState(prevState => ({speed: prevState.count + 10}))
    }
  }

  onDecrement = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => ({speed: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading1">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="pic"
          alt="speedometer"
        />

        <h1 className="heading2">Speed is {count}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 0mph</p>
        <div>
          <button
            type="button"
            onClick={this.onIncrement}
            className="accelerate"
          >
            Accelerate
          </button>
          <button type="button" onClick={this.onDecrement} className="brake">
            Apply brakes
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
