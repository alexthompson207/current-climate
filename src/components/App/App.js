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
import FavoritesView from '../FavoritesView/FavoritesView';
import Scroll from './Scroll';

class App extends Component {
  constructor() {
    super()
    this.state = {
      stories: [],
      filteredStories: [],
      searching: false,
      favorites: [],
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
    const favorites = localStorage.getItem('favorites')
    favorites && this.setState({ favorites: JSON.parse(favorites) })

  }

  searchStories = (event) => {
    const search = event.target.value;
    const searchStories = this.state.stories.filter(story => story.title.toLowerCase().includes(search.toLowerCase()));
    this.setState({ filteredStories: searchStories, searching: true })
  }

  resetSearch = () => {
    this.setState({ searching: false })
  }

  addToFavorites = (storyData) => {
    const favorite = this.state.favorites.find(story => story.title === storyData.title);
    if (!favorite) {
      this.setState({ favorites: [...this.state.favorites, storyData] })

    } else {
      const removeFavorite = this.state.favorites.filter(story => story.title !== storyData.title);
      this.setState({ favorites: removeFavorite })
      localStorage.setItem('favorites', JSON.stringify(removeFavorite))
    }
  }

  render() {
    this.state.favorites.length && localStorage.setItem('favorites', JSON.stringify(this.state.favorites));
    return (
      <div className="App">

        <Header />
        {this.state.error && <Error errorMessage='Oops, something went wrong' />}
        {!this.state.error &&
          <main>
            <Switch>
              <Route exact path='/' render={() => {
                return (
                  <>
                    <Scroll />
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
                    {foundStory && <StoryDetails currentStory={foundStory} addFavorite={this.addToFavorites} favorites={this.state.favorites} />}
                  </>
                )
              }}
              />
              <Route exact path='/articles/favorites' render={(() => <FavoritesView favorites={this.state.favorites} />)} />
              <Route path='*' render={() => <Error errorMessage='Not a valid story' />} />
            </Switch>
          </main>}
      </div>
    );
  }
}

export default App;