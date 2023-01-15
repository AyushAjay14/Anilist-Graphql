import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { GET_ANIME_PAGE, GET_POPULAR_ANIME, GET_ALLTIME_FAV, GET_TOP_100, GET_CHARACTERS } from './queries';
import { getAnimePage, getPopularPage, getAlltimePage, getTop100Page, getCharacters } from '../../redux/animeRedux';

function GetData() {
  const dispatch = useDispatch();

  const { data } = useQuery(GET_ANIME_PAGE, {
    variables: {
      page: 1,
      perPage: 102,
    },
  });

  useEffect(() => {
    if (data) {
      dispatch(getAnimePage(data));
    }
  }, [data, dispatch]);

  const { data: popular_data } = useQuery(GET_POPULAR_ANIME, {
    variables: {
      page: 1,
      perPage: 102,
    },
  });

  useEffect(() => {
    if (popular_data) {
      dispatch(getPopularPage(popular_data));
    }
  }, [popular_data, dispatch]);

  const { data: alltime_data } = useQuery(GET_ALLTIME_FAV, {
    variables: {
      page: 1,
      perPage: 102,
    },
  });

  useEffect(() => {
    if (alltime_data) {
      dispatch(getAlltimePage(alltime_data));
    }
  }, [alltime_data, dispatch]);

  const { data: top100_data } = useQuery(GET_TOP_100, {
    variables: {
      page: 1,
      perPage: 102,
    },
  });

  useEffect(() => {
    if (top100_data) {
      dispatch(getTop100Page(top100_data));
    }
  }, [top100_data, dispatch]);
}

export default GetData;
