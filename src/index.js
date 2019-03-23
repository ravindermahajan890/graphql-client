import React from "react";
import ReactDOM from "react-dom";
import ExchangeRates from "./components/ListPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://graphql-server.ravindermahajan890.now.sh/graphql"
  }),
  cache: new InMemoryCache()
});
ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Route exact path="/" component={ExchangeRates} />
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
