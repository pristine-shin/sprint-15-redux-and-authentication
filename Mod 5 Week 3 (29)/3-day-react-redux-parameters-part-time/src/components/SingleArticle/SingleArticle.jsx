import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './SingleArticle.css';

const SingleArticle = () => {

  let { id } = useParams();

  const articles = useSelector(state=>state.articleState.entries);

  const selectedArticle = articles.find(article => article.id === id)

  // console.log(selectedArticle.id)
  return (
    <div className='singleArticle'>
      <h1>{`${selectedArticle.title}`}</h1>
      <img
        src={`${selectedArticle.imageUrl}`}
        alt='home'
      />
      <p>
        {`${selectedArticle.imageUrl}`}
      </p>
    </div>
  );
};

export default SingleArticle;
