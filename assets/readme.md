### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
ans - the key differnet is selection criteria, and their return type

2. How do you **create and insert a new element into the DOM**?
ans - const newDiv = document.createElement('div');
       createElement() is use to creat new element in DOM

3. What is **Event Bubbling** and how does it work?
ans - in DOM it allows event handlers attached to ancestor elements to also respond to the event

4. What is **Event Delegation** in JavaScript? Why is it useful?
ans - Event delegation is a technique for handling events on multiple child elements by attaching a single event listener to their common parent element. This approach the concept of event bubbling.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
ans - preventDefault() >>> Stops the default browser behavior for an event.
      stopPropagation() >>> Stops the event from bubbling (propagating) up the DOM tree or capturing down.