# Widgets

- Smaller components that are combined together to form game screens.
- Stored in *client/src/components/widgets*
- Widgets should also contain their own state/logic if appropriate.

## Example

```jsx title="client/src/components/widgets/Widget0.js"
/**
 * Widget 0
 */
const Widget0 = (props) => {
	return (
		<>
			<Typography>Hello from Widget 0.</Typography>
		</>
	)
}

export default Widget0;
```

## Existing Widgets
### Bubble
Creates chat bubbles. *(ex. Standard end screen)*
```ts
side:string		// BUBBLE_LEFT or BUBBLE_RIGHT constants
children:mixed	// Child nodes
```

### DrawingArea
Combines *DrawingBoard*, *DrawingTools* and *DrawingSidePanel* to form an entire drawing set.
```ts
showTools:boolean					// Whether to display the drawing tools panel
stageRef:React.MutableRefObject 	// Link to the stage component in DrawingBoard
displayShapes:Array 				// Array of shapes to display on the DrawingBoard on load
lockBoard:boolean					// Whether the drawing board is locked to prevent drawing
MAX_WIDTH:number					// Maximum width of the drawing board
MAX_HEIGHT:number					// Maximum height of the drawing board
onChange:function(shapes:Array)		// Function that receives shape data when the state changes
```

### DrawingBoard
The board to draw on
```ts
brushColor:string					// Hexidecimal stroke color
bgColor:string						// Hexidecimal background color
opacity:number						// Drawing opacity
strokeWidth:number					// The width of the stroke
lineCap:string						// The type of line cap ('butt', 'round', or 'square')
tension:number						// Higher values result in a more curvy line. 0 = no interpolation.
tool:object 						// One of the drawing tool objects defined in DrawingTools
displayShapes:Array 				// Array of shapes to display on the DrawingBoard on load
lockBoard:boolean					// Whether the drawing board is locked to prevent drawing
MAX_WIDTH:number					// Maximum width of the drawing board
MAX_HEIGHT:number					// Maximum height of the drawing board
onChange:function(shapes:Array)		// Function that receives shape data when the state changes
```

### DrawingSidePanel
Combines *DrawToolPanel* and *ColorPalette* to form an
entire tool/color selection set.
```ts
toolSettings:object 				// Object with all the tool settings
									// (brushColor, bgColor, opacity, strokeWidth, lineCap, tension, tool)
setTool:function(toolName:string, value:mixed)	// Hook that returns the name of the tool and it's new value
resetTools:function 				// Function to call that resets all the tool settings
```

### ColorPalette
Color selection.
```ts
setColor:function(color:string)		// Hook that returns the selected color (as hexidecimal)
```

### DrawToolPanel
Panel that displays all the drawing tools.
```ts
activeTool:object 								// One of the drawing tool objects defined in DrawingTools
setTool:function(toolName:string, value:mixed)	// Function that receives the name of the tool to and it's new value
```

### GameButton
MUI Button component styled like other buttons.

> Accepts all the same props as a MUI Button. Except 'variant' which is locked to 'contained'
> See: [MUI Button](https://mui.com/material-ui/react-button/)

### GameInput
MUI TextField component styled like other inputs.

> Accepts all the same props as a MUI TextField.
> See: [MUI TextField](https://mui.com/material-ui/react-text-field/)
```ts
initialValue:string			// Value to automatically populate the input
onUpdate:function(value)	// Hook to return updated values during change
```

### GameNumericInput
MUI TextField component styled like other inputs. Accepts only numbers.
Can be used for number ranges.
> Accepts all the same props as a MUI TextField.
> See: [MUI TextField](https://mui.com/material-ui/react-text-field/)
```ts
initialValue:number 		// Value to automatically populate the input
onUpdate:function(value)	// Hook to return updated values during change
minValue:number 			// Minimum value to allow (optional)
maxValue:number 			// Maximum value to allow (optional)
```

### GameSwitch
MUI Switch component.

> Accepts all the same props as a MUI Switch. This may change in the future.
> See: [MUI Switch](https://mui.com/material-ui/react-switch/)

### GameText
MUI Typography component.
```ts
displayText:string		// Text to display
```

### GameTimer
CountdownCircleTimer component. See [react-countdown-circle-timer](https://github.com/vydimitrov/react-countdown-circle-timer)
```ts
timerKey:string					// Key prop for the component (default 'gameTimer')
isPlaying:boolean				// Whether the timer is active (default 'true')
duration:number					// Number of seconds
initialRemainingTime:number 	// The initial remaining time on the timer if different from the duration (default 'null')
size:number 					// Width and height of the element (default '60')
colors:Array 					// Colors that change as the timer counts
colorsTime:number 				// Indicates the time when a color should switch to the next color.
								// The first number is the countdown duration and the last one is 0 or goal.
strokeWidth:number 				// Stroke width of the timer (default '5')
onUpdate:function(remainingTime:number) 	// Remaining time update handler
onComplete:function 			// On timer complete handler
children:mixed					// Render function to customize the time/content in the center of the circle
```

### PlayerList
Displays list of players.
```ts
icons:boolean					// Displays the owner and kick icon buttons (default 'true')
buttonList:boolean				// Whether the list items are buttons or not (default 'false')
code:string						// Lobby code for when player kick button is clicked
owner:string					// Name of the lobby owner
playerName:string				// Name of the player
players:Array<object>			// Player object list
breakpoints:object 				// Define breakpoints for the list (default {xs:4})
								// (see: https://mui.com/material-ui/customization/breakpoints/)
onPlayerKick:function(code:string, playerName:string)		// Function called when a player kick button is clicked
onPlayerClick:function(index:number)	// Function called when a player list item button is clicked (when buttonList is 'true')
```