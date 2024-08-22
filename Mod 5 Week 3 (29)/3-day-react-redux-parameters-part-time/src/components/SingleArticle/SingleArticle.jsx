import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadArticles } from '../../store/articleReducer';
import './SingleArticle.css';

const SingleArticle = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const articles = useSelector(state=>state.articleState.entries);
  const selectedArticle = articles.find(article => article.id === id)

  useEffect(() => {
    dispatch(loadArticles());
  }, [dispatch]);

  if (!selectedArticle) {
    return <h1>Loading...</h1>
  }

  return (
    <div className='singleArticle'>
      <h1>{`${selectedArticle.title}`}</h1>
      <img
        src={`${selectedArticle.imageUrl}`}
        alt='home'
      />
      <p>
      {`${selectedArticle.body}`}
      </p>
    </div>
  );
};



export default SingleArticle;
