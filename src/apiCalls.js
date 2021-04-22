export const getAllStories = () => {
  return fetch('https://api.nytimes.com/svc/topstories/v2/climate.json?api-key=b3M1MC9DPZ6AYoCBVQ98cGQZYXRjwuoZ')
    .then(response => response.json())
} 