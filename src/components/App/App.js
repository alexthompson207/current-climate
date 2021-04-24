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
      error: ''
    }
  }

  componentDidMount() {
    getAllStories()
      .then(stories => {
        if (stories.status === 'OK') {
          this.setState({ stories: cleanStoriesData(stories), error: '' })
        } else {
          this.setState({ error: 'fetch error' })
        }
      })
      .catch(err => this.setState({ error: 'fetch error' }))
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
          {this.state.error && <Error errorMessage='Oops, something went wrong' />}
          <Switch>
            <Route exact path='/' render={() => {
              return (
                <>
                  <SearchBar search={this.searchStories} reset={this.resetSearch} />
                  <NewsView stories={this.state.stories} filteredStories={this.state.filteredStories} searching={this.state.searching} error={this.state.error} />
                </>
              )
            }}
            />
            <Route exact path='/:publishedDate' render={({ match }) => {
              const foundStory = this.state.stories.find(story => story.publishedDate === match.params.publishedDate);
              return (
                <>
                  {!foundStory && <h1>Loading...</h1>}
                  {foundStory && <StoryDetails currentStory={foundStory} error={this.state.error} />}
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