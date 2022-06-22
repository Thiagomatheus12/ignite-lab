import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient ({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4prtiaf2kf501z48y7k27ly/master",
    cache: new InMemoryCache()
})