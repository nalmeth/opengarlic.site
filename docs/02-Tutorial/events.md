# Events

Games can have custom events if required.

## Client-side Event Code

```jsx title="client/src/components/games/MyGameMode.js"
const events = Object.freeze({
	MyEvent: (param1, param2) => {
		// Do stuff
	}
});


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
```

## Server-side Event Code

```jsx title="modules/Events/MyEvent.js"
import * as Lobby from '../Lobby.js';
import Logger from '../Logger.js';

/**
 * @param {object} io Server Object
 * @param {object} socket Socket Object
 * @param {object} data Event Data Object
 */
const MyEvent = async(io, socket, data) => {
	Logger.info('Log Stuff');

	// Process lobby actions

	// Broadcast response to clients if needed
}
```
:::info
All that's required on the server side is to place the event
in the *modules/Events* folder. It will automatically be handled.
:::