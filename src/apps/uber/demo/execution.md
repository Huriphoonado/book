---
layout: layout.hbs
---

# Execution

* [x]Better Icons
          * [x]Premium chefs should have icons that match the food they cook
* [x]Better Login
          * [x]Authentication through Facebook on top of GitHub
          * [ ]More fields to input in
* [ ]User Profile
          * [ ]Include Position, favorite food, name
          * [ ]Ability to rate?
          * [ ]Request a service could be a pop-up button that opens a form…
* [x]Unified Nav Bars (make sure they are all using the same CSS Library)
* [x]Overall Visual Improvement
          * [x]User page green blocks and image that does not fill the whole screen

* [x]Reconsider how to do both the premium and standard subscribers

We completely reworked the appearence of the application including unified nav bars, new images, better color schemes, and icons representing all types of users. We even discovered the componentDidMount() function in React which calls any javascript code inside only after components have been successfully added to the DOM. This allowed us to get some of the animations in Materialize like collapsibles and tabs to work with React. Additionally, users may now login using GitHub or Facebook.

While we struggled with completing a User Profile feature, we made significant progress and simply ran out of time with the Friday deadline to deploy a bug-free version for the demo. We tried to give users the ability to rank currently existing chefs and dynamically append a form to the page to do so, but this was difficult to figure out with React. We were also able to get the form to post to our firebase, but at some point this broke and we were unable to determine the cause.

I tried giving the user the ability to submit their own ratings for each of the available drivers. I tried to create a button that would dynamically create a div below the map that would allow the user to input its own field. However, with react that was a bit more difficult due to binding. I had to remove _.map() and call a function that will handle the onClick event. I was able to create the div, and append an input box to it that allows the user to submit a rating, but it would flash for a few seconds before disappearing again. I briefly got the form to modify our firebase data, but something broke, and I had to revert it back to its initial stages.