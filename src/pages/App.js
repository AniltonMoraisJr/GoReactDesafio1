import React, { Component, Fragment } from 'react';

import '../assets/css/app.scss';

/* Components */

import Head from '../components/Head';
import Post from '../components/Post';

class App extends Component {
  state = {
    posts: [
      {
        img: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
        name: 'Anilton',
        time: 'há 3min',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium dui dui, non eleifend augue posuere quis. Sed at lectus quam. Nam vulputate massa ut risus blandit ullamcorper. Fusce iaculis mauris ac porttitor commodo. Ut lacus lectus, mollis non eros dictum, imperdiet vehicula nulla. Mauris quis bibendum ligula. Curabitur ac congue lorem. Proin elit sem, faucibus sagittis leo et, volutpat sagittis ligula. Fusce ut commodo justo, quis bibendum magna. Praesent aliquam tincidunt metus, sit amet convallis orci tincidunt nec. Nam faucibus egestas ligula quis tincidunt. Praesent aliquam laoreet tincidunt.',
      },
      {
        img: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
        name: 'Junior',
        time: 'há 3min',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium dui dui, non eleifend augue posuere quis. Sed at lectus quam. Nam vulputate massa ut risus blandit ullamcorper. Fusce iaculis mauris ac porttitor commodo. Ut lacus lectus, mollis non eros dictum, imperdiet vehicula nulla. Mauris quis bibendum ligula. Curabitur ac congue lorem. Proin elit sem, faucibus sagittis leo et, volutpat sagittis ligula. Fusce ut commodo justo, quis bibendum magna. Praesent aliquam tincidunt metus, sit amet convallis orci tincidunt nec. Nam faucibus egestas ligula quis tincidunt. Praesent aliquam laoreet tincidunt.',
      },
      {
        img: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
        name: 'Rodolfo',
        time: 'há 3min',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium dui dui, non eleifend augue posuere quis. Sed at lectus quam. Nam vulputate massa ut risus blandit ullamcorper. Fusce iaculis mauris ac porttitor commodo. Ut lacus lectus, mollis non eros dictum, imperdiet vehicula nulla. Mauris quis bibendum ligula. Curabitur ac congue lorem. Proin elit sem, faucibus sagittis leo et, volutpat sagittis ligula. Fusce ut commodo justo, quis bibendum magna. Praesent aliquam tincidunt metus, sit amet convallis orci tincidunt nec. Nam faucibus egestas ligula quis tincidunt. Praesent aliquam laoreet tincidunt.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Head />
        <Post data={posts} />
      </Fragment>
    );
  }
}

export default App;
