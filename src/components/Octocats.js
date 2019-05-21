import React, { Component } from 'react'

class Octocat extends Component {
  render() {
    return (
      <div class="outer-image">
        <img class="image-area" src={this.props.image} />
        <section class="caption">
          <p>#{this.props.number}</p>
          <div class="name-pic">
            <p>
              the <em>{this.props.name}</em> by
            </p>
            <img src={this.props.author} />
          </div>
        </section>
      </div>
    )
  }
}

export default Octocat
