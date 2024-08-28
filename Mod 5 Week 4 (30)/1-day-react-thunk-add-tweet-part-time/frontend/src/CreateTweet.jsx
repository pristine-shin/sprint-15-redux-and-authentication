// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { postTweet } from './store/tweet';
import { useState } from 'react';

export default function CreateTweet() {
  const [tweet, setTweet] = useState('')
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTweet = { tweet }
    
    if (!newTweet) {
      window.alert('Please enter a tweet');
    } else {
      dispatch(postTweet(newTweet));
      setTweet('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={tweet} onChange={e => setTweet(e.target.value)}/>
      <button>Submit</button>
    </form>
  )
}
