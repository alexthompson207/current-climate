import './App.css';
import { getAllStories } from '../../apiCalls';
import { cleanStoriesData } from '../../utilities';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NewsView from '../NewsView/NewsView';
import Header from '../Header/Header';
import StoryDetails from '../StoryDetails/StoryDetails';

class App extends Component {
  constructor() {
    super()
    this.state = {
      stories: [],
      storiesError: ''
    }
  }

  componentDidMount() {
    getAllStories()
      .then(stories => this.setState({ stories: cleanStoriesData(stories), storiesError: '' }))
      .catch(err => this.setState({ storiesError: 'Oops, something went wrong' }))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          {this.state.storiesError && <h2>{this.state.storiesError}</h2>}
          <Route exact path='/' render={() => {
            return (
              <>
                {!this.state.stories.length && !this.state.storiesError && <h2>Loading...</h2>}
                <NewsView stories={this.state.stories} />
              </>
            )
          }}
          />
          {this.state.stories.length && <StoryDetails currentStory={this.state.stories[0]} />}
        </main>
      </div>
    );
  }
}

export default App;