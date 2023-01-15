import { gql } from "graphql-tag";

const GET_ANIME_PAGE = gql`
  query ($page: Int!, $perPage: Int!) {
    Page(page: $page, perPage: $perPage) {
      mediaTrends {
        media {
          id
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
        id
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
        id
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
        id
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
          extraLarge
        }
      }
    }
  }
`;
const GET_ANIME_DESC = gql`
  query ($id: Int!) {
    Page(page: 0, perPage: 50) {
      media(id: $id) {
        description
        bannerImage
        coverImage {
          medium
          extraLarge
        }
        title {
          userPreferred
        }
      }
    }
  }
`;
const GET_CHARACTERS = gql`
  query ($id: Int!) {
    Page(page: 0, perPage: 6) {
      media(id: $id) {
        characters(sort: FAVOURITES_DESC) {
          edges {
            node {
              id
              name {
                userPreferred
              }
              image {
                large
              }
            }
            role
            voiceActors(language: JAPANESE) {
              id
              image{large}
              languageV2
              name {
                userPreferred
              }
            }
          }
        }
      }
    }
  }
`;
export {
  GET_ANIME_PAGE,
  GET_POPULAR_ANIME,
  GET_ALLTIME_FAV,
  GET_TOP_100,
  GET_ANIME_DESC,
  GET_CHARACTERS,
};
