# Creating a Game

## Create the components

- [Modes](Components/modes)
- [Screens](Components/screens)
- [Widgets](Components/widgets)

## Import the new mode
```jsx title="client/src/modules/Games.js"
import * as Standard from '../components/games/Standard'; // The standard game mode
// ...
import * as MyGameMode from '../components/games/MyGameMode'; // Add your game mode


const Games = [
	Standard,
	// ...
	MyGameMode // Add your game mode to the list
];

export default Games;
```

## Run the development server

[How to run dev server](/docs/rundevserver)