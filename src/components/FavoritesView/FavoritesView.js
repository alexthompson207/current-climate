import '.favoritesView.css';
import React from 'react';

const FavoritesView = ({ favorites }) => {

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
    <section className='fav-view'>
      <h2 className='fav-results'>Number of articles: ({storyCards.length})</h2>
      {!favorites.length && <h2>Loading...</h2>}
      {storyCards}
    </section>
  )
}

export default FavoritesView;