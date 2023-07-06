import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigator/RootNavigator';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	gql,
} from '@apollo/client';

const client = new ApolloClient({
	uri: 'https://greencovesprings.stepzen.net/api/fuzzy-sheep/__graphql',
	headers: {
		Authorization:
			'apikey greencovesprings::stepzen.io+1000::884cc659f322a56bc54bfd90204df4278375c94ca65b4d86c97cabda7738054b',
	},
	cache: new InMemoryCache(),
});

export default function App() {
	return (
		//@ts-ignore
		<TailwindProvider utilities={utilities}>
			<ApolloProvider client={client}>
				<NavigationContainer>
					<RootNavigator />
				</NavigationContainer>
			</ApolloProvider>
		</TailwindProvider>
	);
}
