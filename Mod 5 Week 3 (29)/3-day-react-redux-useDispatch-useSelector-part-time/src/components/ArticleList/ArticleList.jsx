import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadArticles } from '../../store/articleReducer'

const ArticleList = () => {

  const dispatch = useDispatch();
  const articles = useSelector(state => state.articleState.entries
  );

  useEffect(() => {
    dispatch(loadArticles())
  }, [dispatch])


  return (
    <div>
      <h1>Article List</h1>
      <ol>
        {articles && articles.map(({id, title}) => ( //articles && is a conditional, checks if it is available/rendered before trying to map
          <li key={id}>
            <NavLink to={`${id}`}>{title}</NavLink>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ArticleList;
