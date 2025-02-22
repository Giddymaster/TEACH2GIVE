# Event Propagation 
Event propagation refers to how events flow through the DOM when an event occurs on an element inside another element. 

## Types:

1. Event Bubbling (Default)

The event starts from the target element and moves up through its ancestors.
Example: Clicking a paragraph inside a div first triggers the paragraph’s event, then the div’s event.

2. Event Capturing (Trickles Down)  

The event starts from the top-most ancestor and moves down to the target element.
Example: Clicking a paragraph inside a div first triggers the div’s event, then the paragraph’s event.

when using `addEventListener()`, you can control whether an event should use bubbling or capturing by passing a third argument, `useCapture`, which is either true or false:

- `false (default)` - Uses event bubbling, meaning the event starts at the target element and moves up to its ancestors.
- `true ` - Uses event capturing, meaning the event starts from the outermost ancestor and moves down to the target element.