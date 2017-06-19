import React, { Component } from 'react';

import {
  Container,
  Heading,
  Footer,
  PreviewContainer,
  Preview,
  Textarea,
  Heart,
  Link
} from './components/StyledComponents';

const options = {
  xhtmlOut: true,
  breaks: true,
  linkify: true,
  typographer: false,
  quotes: '“”‘’',
};

class App extends Component {
  props: Props;

  state = {
    markdown: 'Write some __Markdown__ in da box!'
  };

  handleChange = (e) => {
    this.setState({
      markdown: e.target.value
    })
  };

  render() {
    return (
      <Container>
        <Heading>
          GF Markdown Previewer
        </Heading>

        <PreviewContainer>
          <Textarea
            placeholder="Write some __Markdown__ in da box!"
            onChange={this.handleChange}
          />
          <Preview
            markdown={this.state.markdown}
            options={options}
          />
        </PreviewContainer>

        <Footer>
          Made with <Heart>❤</Heart> by <Link href="https://github.com/eugpoloz">Evgenia</Link>
          <br/>
          Uses <Link href="https://github.com/InsidersByte/react-markdown-renderer">react-markdown-renderer</Link> by <Link href="https://github.com/InsidersByte">InsidersByte</Link>
        </Footer>
      </Container>
    );
  }
}

export default App;