import React, { Component } from 'react'

class ClassCompo extends Component {
    constructor(){
        super()
        this.state ={
            count : 0
        }
    }
    increment = () => {
        this.setState({count : this.state.count + 1});
    }
    decrement = () => {
            this.setState({count : this.state.count - 1});
    }
    reset = () => {
        this.setState({count : 0});
    }
  render() {
    return (
      <div>
        <h2 className='mt-10 text-4xl font-semibold border-2 w-[20%] mx-auto rounded-3xl'>{this.state.count}</h2>
        <button onClick={this.increment} className='border-2 py-1 px-4 rounded-2xl font-semibold mt-4 mx-4 hover:bg-green-400 hover:text-white'>Increment</button>
        <button onClick={this.decrement} className='border-2 py-1 px-4 rounded-2xl font-semibold mt-4 mx-4 hover:bg-orange-400 hover:text-white'>Decrement</button>
        <button onClick={this.reset} className='border-2 py-1 px-4 rounded-2xl font-semibold mt-4 mx-4 hover:bg-red-400 hover:text-white'>Reset</button>
      </div>
    )
  }
}

export default ClassCompo;