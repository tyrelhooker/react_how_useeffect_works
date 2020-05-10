import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';

const RedditFetch = ({ subreddit }) => {
  // Init state to hold fetched posts
  const [posts, setPosts] = useState([]);

  // Effect functions cannot be async, so declare the async function inside the // effect and then call it. 
  useEffect(() => {
    const fetchData = async () => {
      // Call fetch
      const res = await fetch(`https://www.reddit.com/r/${subreddit}.json`);

      // Pull out data
      const json = await res.json();

      // Save posts to state (check network tab to see why data is like this)
      setPosts(json.data.children.map(item => item.data));
    }

    fetchData();
  }, [subreddit, setPosts]);

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default RedditFetch;