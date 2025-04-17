import { ApolloClient, ApolloProvider, gql, useQuery, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache(),
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

  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error!</p>;

  return data.countries.map((country) => 
    <li key={country.code}>{country.name} : {country.capital} : {country.currency}</li>
  );

}

function App() {
  return (
    <ApolloProvider client={client}>
      <h1>GraphQL</h1>
      <h3>Upit serveru:</h3>
      <h3>https://countries.trevorblades.com/graphql</h3>
      <ul>
        <ShowCountries />
      </ul>
    </ApolloProvider>
  );
}

export default App;
