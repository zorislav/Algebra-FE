import {ApolloClient, ApolloProvider, gql, useQuery, InMemoryCache} from '@apollo/client';
import './App.css';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache()
})

function ShowCountries (){
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
  const {loading, error, data } = useQuery(CTRY_QUERY);
  if(loading) return <p>loading....</p>;
  if(error) return <p>error....</p>
    return data.countries.map(country => <li key={country.code}>{country.name} : {country.capital}:{country.currency}</li>)
}

function App() {
  return (
    <div className="App">
        <ApolloProvider client={client}>
          <h1>graphql</h1>
          <h3>Upit serveru</h3>
          <h3>https://countries.trevorblades.com/graphql</h3>
          <ul>
            <ShowCountries />
          </ul>
        </ApolloProvider>
    </div>
  );
}

export default App;
