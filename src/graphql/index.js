import {ApolloClient, InMemoryCache , HttpLink} from '@apollo/client'

export const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: "https://graphql.anilist.co/"
    })
});