import React from 'react'

class Speed extends React.Component {
  constructor () {
    super()
    this.state = {
      color: 'white'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    if (this.state.color === 'white') {
      this.setState({
        color: 'gray'
      })
    } else {
      this.setState({
        color: 'white'
      })
    }
  }

  render () {
    return (
      <div>
        <div className='compo'>
          <input type='checkbox' id='check' value="checked"/>
          <p
            id='para'
            style={{ color: this.state.color }}
            onClick = {this.handleClick}>{this.props.item}
          </p>
        </div>
      </div>
    )
  }
}
export default Speed
