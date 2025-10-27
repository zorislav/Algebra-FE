import { ApolloClient, InMemoryCache, HttpLink, gql } from "@apollo/client";
import { ApolloProvider, useQuery } from "@apollo/client/react";
import "./App.css";

const GRAPHQL_API = "https://countries.trevorblades.com";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: GRAPHQL_API,
  }),
});

function ShowCountries() {
  const CTRY_QUERY = gql`
    {
      countries {
        code
        name
        capital
        currency
      }
    }
  `;

  const { loading, error, data } = useQuery(CTRY_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error!</p>;
  }

  return data.countries.map((country) => (
    <li key={country.code}>
      {country.code} : {country.name} : {country.capital} : {country.currency}
    </li>
  ));
}

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <h1>GraphQL</h1>
        <h3>Upit serveru: </h3>
        <h3>https://countries.trevorblades.com</h3>
        <ul style={{ listStyleType: "none" }}>
          <ShowCountries />
        </ul>
      </ApolloProvider>
    </div>
  );
}

export default App;
