// see this live: https://codesandbox.io/s/GvWpGjKQ
import React, {Component} from 'react'

class Toggle extends Component {
  constructor(props, ...rest) {
    super(props, ...rest)
    this.state = {
      toggledOn: props.initialToggledOn || false,
    }
  }

  handleToggleClick = () => {
    const toggledOn = !this.state.toggledOn
    this.props.onToggle(toggledOn)
    this.setState({toggledOn})
  }

  render() {
    const {children} = this.props
    const {toggledOn} = this.state
    return (
      <button
        onClick={this.handleToggleClick}
        data-test="button"
      >
        {children}
      </button>
    )
  }
}

export default Toggle
