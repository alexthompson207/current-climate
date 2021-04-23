import './App.css';
import { getAllStories } from '../../apiCalls';
import { cleanStoriesData } from '../../utilities';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NewsView from '../NewsView/NewsView';
import Header from '../Header/Header';
import StoryDetails from '../StoryDetails/StoryDetails';
import SearchBar from '../SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super()
    this.state = {
      stories: [],
      filteredStories: [],
      storiesError: ''
    }
  }

  componentDidMount() {
    getAllStories()
      .then(stories => this.setState({ stories: cleanStoriesData(stories), storiesError: '' }))
      .catch(err => this.setState({ storiesError: 'Oops, something went wrong' }))
  }

  searchStories = (event) => {
    const search = event.target.value;
    const searchStories = this.state.stories.filter(story => story.title.toLowerCase().includes(search.toLowerCase()));
    this.setState({ filteredStories: searchStories })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          {this.state.storiesError && <h2>{this.state.storiesError}</h2>}
          <Switch>
            <Route exact path='/' render={() => {
              return (
                <>
                  {!this.state.stories.length && !this.state.storiesError && <h2>Loading...</h2>}
                  <SearchBar search={this.searchStories} />
                  <NewsView stories={this.state.stories} filteredStories={this.state.filteredStories} />
                </>
              )
            }}
            />
            <Route exact path='/:publishedDate' render={({ match }) => {
              const foundStory = this.state.stories.find(story => story.publishedDate === match.params.publishedDate);
              return (
                <>
                  {!foundStory && <h2>Loading your article...</h2>}
                  {foundStory && <StoryDetails currentStory={foundStory} />}
                </>
              )
            }}
            />
            <Route path='*' render={() => <h2>Not a valid story</h2>} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;