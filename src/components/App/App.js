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
          <Route exact path='/:id' render={({ match }) => {
            const foundStory = this.state.stories.find(story => {
              console.log(match.params.id, story.id);
              return story.id === Number(match.params.id)
            })
            console.log(foundStory)
            return (
              <>
                {foundStory && <StoryDetails currentStory={foundStory} />}
              </>
            )
          }}
          />
        </main>
      </div>
    );
  }
}

export default App;