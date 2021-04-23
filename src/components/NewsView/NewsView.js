import './newsView.css';
import React from 'react';
import Story from '../Story/Story';

const NewsView = ({ stories, filteredStories }) => {
  let storiesToDisplay = [];
  if (!filteredStories.length && stories.length) {
    storiesToDisplay = stories;
  } else if (filteredStories.length) {
    storiesToDisplay = filteredStories;
  }


  const storyCards = storiesToDisplay.map((story) => {
    return (
      <Story
        publishedDate={story.publishedDate}
        key={story.id}
        title={story.title}
        author={story.author}
        image={story.photo}
        altText={story.photoAlt}
      />
    )
  })

  return (
    <section className='news-view'>
      {storyCards}
    </section>
  )
}

export default NewsView;