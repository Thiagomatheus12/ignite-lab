import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient ({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4o9wqb01imq01xxbhb4edpl/master",
    cache: new InMemoryCache()
})