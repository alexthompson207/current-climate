import './App.css';
import { getAllStories } from '../../apiCalls';
import { cleanStoriesData } from '../../utilities';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NewsView from '../NewsView/NewsView';
import Header from '../Header/Header';
import StoryDetails from '../StoryDetails/StoryDetails';
import SearchBar from '../SearchBar/SearchBar';
import Error from '../Error/Error';

class App extends Component {
  constructor() {
    super()
    this.state = {
      stories: [],
      filteredStories: [],
      searching: false,
      storiesError: ''
    }
  }

  componentDidMount() {
    getAllStories()
      .then(stories => {
        console.log(stories)
        this.setState({ stories: cleanStoriesData(stories), storiesError: '' })
      })
      .catch(err => this.setState({ storiesError: 'fetch error' }))
  }

  searchStories = (event) => {
    const search = event.target.value;
    const searchStories = this.state.stories.filter(story => story.title.toLowerCase().includes(search.toLowerCase()));
    this.setState({ filteredStories: searchStories, searching: true })
  }

  resetSearch = () => {
    this.setState({ searching: false })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          {this.state.storiesError && <Error errorMessage='Oops, something went wrong' />}
          <Switch>
            <Route exact path='/' render={() => {
              return (
                <>
                  <SearchBar search={this.searchStories} reset={this.resetSearch} />
                  {!this.state.stories.length && !this.state.storiesError && <h2>Loading...</h2>}
                  <NewsView stories={this.state.stories} filteredStories={this.state.filteredStories} searching={this.state.searching} />
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
            <Route path='*' render={() => <Error errorMessage='Not a valid story' />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;