import React, { Component } from 'react';

import { Heading, Slide, Appear } from 'spectacle';

class AppearsState extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      steps: 0
    };
    this.updateSteps = this.updateSteps.bind(this);
  }

  updateSteps(steps) {
    if (this.state.steps !== steps) {
      this.setState({ steps });
    }
  }

  render() {
    return (
      <Slide
        transition={['slide']}
        bgDarken={0.75}
        getAnimStep={this.updateSteps}
      >
        <Appear>
          <Heading size={1} caps textColor="tertiary">
            Can
          </Heading>
        </Appear>
        <Appear>
          <Heading size={1} caps textColor="secondary">
            Count
          </Heading>
        </Appear>
        <Appear>
          <Heading size={1} caps textColor="tertiary">
            Steps
          </Heading>
        </Appear>
        <Heading size={1} caps fit textColor="secondary">
          Steps: {this.state.steps}
        </Heading>
      </Slide>
    );
  }
}

export default AppearsState;
