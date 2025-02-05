# Modes

- The main logic of the game mode should go here.
- Stored in *client/src/components/games*

## Example Mode

```jsx title="client/src/components/games/MyGameMode.js"
/**
 * MyGameMode Component
 */
const MyGameMode = (props) => {

    /**
     * Game Logic Here
     */

	// Default events you need to implement
	const events = {
		PlayersDone: (lobby, lobbyData) => {
			// Handle when all players are done

			// Prepare lobby data structure how you want
			const newData = {
				...lobbyData,
				// new data here
			};

			// Message server to move to the next screen
			socket.emit('message', {
				type: 'NextScreen',
				data: {
					lobbyCode: lobby.code,
					lobbyData: newData
				}
			});
		},
		NextScreen: (lobby) => {
			// Handle when the game moves to the next screen
		}
	}

	useEffect(() => {
		// Attach the events to the web socket
		for(const name in events) {
			socket.on(name, events[name]);
		}

		// Detach the events from the web socket
		return () => {
			for(const name in events) {
				socket.off(name, events[name]);
			}
		}
	}, []);

    return (
        <>
        {props.gameScreen === 0 && <Screen0 {...props} />}
        {props.gameScreen === 1 && <Screen1 {...props} />}
        </>
    )
}

export default MyGameMode;

/**
 * Component config and settings
 */
export const title = 'MyGameMode';
export const description = 'My mode plays like this...';
export const settings = {
    // See below
}
```

## Mode settings

You may add any settings you need, but there are a few pre-defined you should implement:
- **maxPlayers**: The maximum number of players allowed in the lobby
- **groupSize**: If the game requires multiples of players (ex. player count divisible by 3)
- **time**: The seconds allowed for each game screen

## Settings Structure
```ts
{
	name:string							// Storage key (lobby.settings.name)

	displayName:string					// Name to display in settings dialog

	default:mixed						// The default value, this should match the intitial value
										// This value changes temporarily when adjusting the settings

	component:function(newProps:object)	// Function that returns a JSX.Element for adjusting the value
										// in the settings dialog. New props passed are:
										// initialValue:number		Updated value from settings dialog
										// onUpdate:function(value)	Used to hook value updates from component
}
```

## Example Settings
```ts
export const settings = [
	{
		name: 'maxPlayers',
		displayName: 'Max Players',
		default: 15,
		component: (newProps) => {
			let props = {
				initialValue: 15,
				minValue: 1,
				maxValue: 15,
				required: true
			}
			props = {...props, ...newProps};
			return <GameNumericInput {...props} />
		}
	},
	{
		name: 'groupSize',
		displayName: 'Group Size',
		default: 1,
		component: (newProps) => {
			let props = {
				initialValue: 1,
				minValue: 1,
				maxValue: 7,
				required: true
			}
			props = {...props, ...newProps};
			return <GameNumericInput {...props} />
		}
	},
	{
		name: 'timer',
		displayName: 'Timer',
		default: 0,
		component: (newProps) => {
			let props = {
				initialValue: 0,
				minValue: 0,
				required: true
			}
			props = {...props, ...newProps};
			return <GameNumericInput {...props} />
		}
	}
];
```

## API

Game Mode Components receive the following props.

```ts
// Game Lobby properties
{
code:string,           // The lobby code

owner:string,          // Name of the player that owns the lobby

status:string,         // LobbyStatus Constants:
                       // OPEN - Players are in the lobby waiting for game to start
                       // STARTED - The game has been started. No new players allowed.
                       // GAME - The game has ended

appScreen:string,      // AppScreen Constants:
                       // LOGIN - The login screen
                       // LOBBY - The lobby screen
                       // GAME  - This screen is what shows while a game is being played.

gameScreen:number,     // Automatically increments by 1 for each game screen.
                       // (So you can track what screen to show)

round:number,          // Automatically increments by 1 for each round of the game.
                       // Currently Not implemented

mode:string,           // The title of the game mode. This is set in your game component.

settings:object,       // This is the json object of options available to your game mode.
                       // You must configure the predefined settings. You may add any others you want.
                       // Predefined settings:
                       // maxPlayers:number   - The maximum number of players allowed.
                       // groupSize:number    - Required group amount.
                       //                        (Groups of 2: 2, Groups of 3: 3, etc.)
                       //                        (This is not currently implemented)
                       // time:number         - Per game screen timer in seconds.
                       //                        (0 = infinite)
                       //                        (This is not currently implemented)

players:Array<object>, // List of players in the game and their info
                       // Each player has the following properties
                       // name:string      - The name of the player
                       // owner:boolean    - Flag of lobby ownership
                       // status:string    - PlayerStatus Constant
                       //                    ACTIVE        - Player is ready
                       //                    DONE          - Player has pressed done
                       // connected:string - ConnectionStatus Constant
                       //                    CONNECTED     - Player is connected
                       //                    DISCONNECTED  - Player is disconnected

// Other properties
socket:object,          // The websocket to emit/listen for custom events
playerName:string,      // Name of the the player

lobbyData:object,       // Json data store that can be used to store images, text, etc
                        // Formatting is completely up to the game mode

onGameEnd:function,     // Callback to fire when you want the game to end

onRoundEnd:function,     // Callback to fire when you want the round to end (Not yet implemented)

onDone:function(data:object),    // Callback to fire when you want to mark a player as done
                                 // data:object    - Data to save in the lobbyData storage

onQuit:function(),       // Callback to fire when a player quits the lobby
}
```