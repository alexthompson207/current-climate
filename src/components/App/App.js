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
      bigPhoto: story.multimedia[0].url,
      bigPhotoAlt: story.multimedia[0].caption,
      smallPhoto: story.multimedia[1].url,
      smallPhotoAlt: story.multimedia[0].caption
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
      .then(stories => {
        console.log(stories.results)
        this.setState({ stories: cleanStoriesData(stories) })
      })
  }



  render() {
    return (
      <div className="App">
        <Header />
        {!this.state.stories.length && <h2>Loading...</h2>}
        {/* <NewsView stories={this.state.stories} /> */}
      </div>
    );
  }
}


export default App;


// {
//   "section": "climate",
//   "title": "Amid Biden Climate Push, a Question Looms: Is America’s Word Good?",
//   "abstract": "After four years of “America First,” the president tries this week to reclaim U.S. leadership in the fight against climate change. Can the world trust his promises?",
//   "url": "https://www.nytimes.com/2021/04/19/climate/biden-climate-change.html",
//   "byline": "By Lisa Friedman",
//   "published_date": "2021-04-19T18:02:19-04:00",
//   "multimedia": [
//       {
//           "url": "https://static01.nyt.com/images/2021/04/19/climate/19CLI-BIDENCLIMATE1/19CLI-BIDENCLIMATE1-superJumbo.jpg",
//           "format": "superJumbo",
//           "height": 1365,
//           "width": 2048,
//           "type": "image",
//           "subtype": "photo",
//           "caption": "President Biden will convene a virtual summit this week to show that the U.S. is ready to reassert itself on the world stage on matters of climate change and others.",
//           "copyright": "Doug Mills/The New York Times"
//       }]
//     }