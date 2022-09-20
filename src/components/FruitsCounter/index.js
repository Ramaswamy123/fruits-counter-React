import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {banana: 0, mango: 0}

  mangoesCount = () => {
    const {mango} = this.state
    if (mango >= 0) {
      this.setState(prevState => ({mango: prevState.mango + 1}))
    }
  }

  bananasCount = () => {
    const {banana} = this.state
    if (banana >= 0) {
      this.setState(prevState => ({banana: prevState.banana + 1}))
    }
  }

  render() {
    const {banana, mango} = this.state

    return (
      <div className="bg-container">
        <div className="fruits-container">
          <h1>
            Bob ate {mango} Mangoes {banana} bananas
          </h1>
          <div className="box-container">
            <div className="fruit-box">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruit"
              />
              <button
                type="button"
                className="button"
                onClick={this.mangoesCount}
              >
                Eat Mango
              </button>
            </div>
            <div className="fruit-box">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="fruit"
              />
              <button
                type="button"
                className="button"
                onClick={this.bananasCount}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
