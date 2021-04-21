import './App.css';
import React, { Component } from 'react';
import NewsView from '../NewsView/NewsView';
import Header from '../Header/Header';



const cleanStoriesData = (stories) => {
  return stories.results.map(story => {
    return {
      title: story.title,
      author: story.byline,
      publishedDate: story.published_date,
      overview: story.abstract,
      link: story.url,
      photo: story.multimedia[0].url,
      photoAlt: story.multimedia[0].caption,
    }
  })
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      stories: [],
      storiesError: ''
    }
  }

  componentDidMount() {
    fetch('https://api.nytimes.com/svc/topstories/v2/climate.json?api-key=b3M1MC9DPZ6AYoCBVQ98cGQZYXRjwuoZ')
      .then(response => response.json())
      .then(stories => this.setState({ stories: cleanStoriesData(stories), storiesError: '' }))
      .catch(err => this.setState({ storiesError: 'Oops, something went wrong' }))
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.storiesError && <h2>{this.state.storiesError}</h2>}
        {!this.state.stories.length && !this.state.storiesError && <h2>Loading...</h2>}
        <NewsView stories={this.state.stories} />
      </div>
    );
  }
}

export default App;