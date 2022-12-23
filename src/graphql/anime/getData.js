import {useQuery} from '@apollo/client'
import {useDispatch} from 'react-redux'
import { GET_ANIME_PAGE , GET_POPULAR_ANIME , GET_ALLTIME_FAV , GET_TOP_100} from './queries'
import {getAnimePage , getPopularPage , getAlltimePage , getTop100Page} from '../../redux/animeRedux'

function GetData() {
  const dispatch = useDispatch();
  
  const {data} = useQuery(GET_ANIME_PAGE , {
    variables : {
      page: 1,
      perPage: 102
    }
  })
// getAnimePage(data);
if(data) dispatch(getAnimePage(data));

const {data:popular_data} = useQuery(GET_POPULAR_ANIME , {
  variables : {
    page: 1,
    perPage: 102
  }
});
if(popular_data) dispatch(getPopularPage(popular_data));

const {data:alltime_data} = useQuery(GET_ALLTIME_FAV , {
  variables : {
    page: 1,
    perPage: 102
  }
});
if(alltime_data) dispatch(getAlltimePage(alltime_data));

const {data:top100_data} = useQuery(GET_TOP_100 , {
  variables : {
    page: 1,
    perPage: 102
  }
});
if(top100_data) dispatch(getTop100Page(top100_data));
}

export default GetData
