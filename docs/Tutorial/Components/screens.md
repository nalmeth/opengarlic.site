# Screens

- Components composed of widgets to build whatever interface you want.
- Secondary logic specific to this screen should go here.
- Stored in *client/src/components/screens*
- Can be namespaced by creating sub-folders. (*ex. screens/MyGameMode/screen.js*)

## Example

```jsx title="client/src/components/screens/Screen0.js"
/**
 * Screen 0
 */
const Screen0 = (props) => {
    /**
     * Screen specific logic
     */
    return (
        <>
            <Widget0 {...props} />
            <Widget1 {...props} />
        </>
    )
}

export default Screen0;
```