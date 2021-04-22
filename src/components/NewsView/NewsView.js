import './newsView.css';
import React from 'react';
import Story from '../Story/Story';

const NewsView = ({ stories }) => {

  const storyCards = stories.map((story) => {
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