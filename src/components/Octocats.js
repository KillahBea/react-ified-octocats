import React, { Component } from 'react'

class Octocat extends Component {
  render() {
    return (
      <li>
        <article className="octocat">
          <img className="image-area" src={this.props.image} />
          <p>{this.props.number}</p>
          <p>{this.props.name}</p>
          <img src={this.props.author} />
          {/* <img src={this.props.author2} /> */}
        </article>
      </li>
    )
  }
}

export default Octocat
