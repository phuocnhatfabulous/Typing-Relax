import { useDispatch } from 'react-redux';
import * as action from './redux/actions'

function App() {
  const dispatch = useDispatch();
  dispatch(action.getPosts.getPostsRequest());
  
  return <p>This is a blog</p>
}

export default App;
