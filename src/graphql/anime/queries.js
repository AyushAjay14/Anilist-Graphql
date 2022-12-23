import { gql } from "graphql-tag";

const GET_ANIME_PAGE = gql`
  query ($page: Int!, $perPage: Int!) {
    Page(page: $page, perPage: $perPage) {
      mediaTrends {
        media {
          title {
            userPreferred
          }
          coverImage {
            extraLarge
          }
        }
      }
    }
  }
`;
const GET_POPULAR_ANIME = gql`
  query ($page: Int!, $perPage: Int!) {
    Page(page: $page, perPage: $perPage) {
      media(popularity_greater: 20000) {
        title {
          userPreferred
        }
        coverImage {
          extraLarge
        }
      }
    }
  }
`;

const GET_ALLTIME_FAV = gql`
  query ($page: Int!, $perPage: Int!) {
    Page(page: $page, perPage: $perPage) {
      media(sort: POPULARITY_DESC) {
        title {
          userPreferred
        }
        popularity
        coverImage {
          extraLarge
        }
      }
    }
  }
`;

const GET_TOP_100 = gql`
  query ($page: Int!, $perPage: Int!) {
    Page(page: $page, perPage: $perPage) {
      media(sort: SCORE_DESC) {
        title {
          userPreferred
        }
        genres
        averageScore
        startDate {
          year
        }
        endDate {
          year
        }
        coverImage {
          medium
        }
      }
    }
  }
`;
export { GET_ANIME_PAGE, GET_POPULAR_ANIME, GET_ALLTIME_FAV , GET_TOP_100};
