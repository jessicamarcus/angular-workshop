##class 1:

~~Quest 1~~: Open the hello-world app again. Can make a button that hides and shows everything else on the page? Can you include a picture of something incredible (a baby hippo?) and a button (<button>Show me something magical</button>) that shows and hides the baby hippo?

~~Quest 2~~: Open the hello-world app again. Can you refactor it to use a controller and $scope instead of ng-init? (hint: look at example1 app for controller syntax).

~~Quest 3~~: In the hello-world app, can you rig up a second input element and link it to a different part of the view? Instead of a text input box, try check boxes, radio buttons, number fields, or other inputs.

~~Quest 4~~: In the hello-world app, can you use JavaScript to capitalize any input made to the box? User types 'world' but the H1 displays 'WORLD' or 'World'. (hint: Angular calls this kind of text transformation a filter, and you can use [pre-built angular filters](https://docs.angularjs.org/api/ng/filter/uppercase) or [roll your own](http://codepen.io/WinterJoey/pen/sfFaK).)

~~Quest 5~~: In the example1 app, there is a remoteUsers form to add another user to the list. Can you expand this form with more input boxes and more fields on the person object? How about a number input box for age? (Bonus challenge: can you set it to validate the age input and not accept ages over 120 or under 18?) Can you add email and password inputs?

Quest 6: Can you use ng-hide and ng-show to switch between showing remote users and local users?

Quest 7: Can you use the example1 project as a basis to build a rudimentary online dating app or puppy adoption service? Think about what fields you would need on the person object, and make a form to create more of them. Can you use the input field (with ng-model) or a series of input fields to search the list for specific kinds of puppies or people? How can you set an input box to only search inside a specific field on the object? Check out the documentation for [$filter](https://docs.angularjs.org/api/ng/filter/filter) and bring your questions to class.

##class 2:
~~Issue 1~~:
In class, we refactored the task status so it can be toggled back and forth, and tasks can be marked as uncompleted. Your manager wants this feature implemented by Monday.

~~Issue 2~~:
Your colleague has feedback after a code review. She points out that tasks are only ever completed or not completed, and that your code might be clearer if you represent isCompleted as a boolean value instead of task.status as a magic number. Refactor the code to use an isCompleted flag on tasks. Remember that you still want to update the server every time a task is marked as completed or not completed.

~~Issue 3~~:
Your manager comes to you with a new feature request. She wants to see the categories in the UI of the app as well as the tasks. Can you create a categories factory and fetch the existing categories when the app boots up? How do you want to display them in the view?

~~Issue 4~~:
Your colleague points out that createTask and removeCompleted are really functions that ought to be the responsibility of the TaskFactory and not in the controller. Refactor the business logic and REST calls out of the controller and into the TaskFactory, so that you can call TaskFactory.create(taskObject) from inside $scope.createTask, and just use the controller to wire these functions to the view.

~~Issue 5~~:
Your product owner comes to you with ideas for a UI that shows the existing categories on the screen and each one is clickable. When one category is selected, only tasks belonging to that category are displayed in the list. When no category is selected, all tasks are displayed.  (Hints: save the selected category as $scope.selectedCategory, and use ng-repeat with a filter to show only a subset of tasks. Stuck? look at the [angular documentation for filter filter](https://docs.angularjs.org/api/ng/filter/filter) or search stack overflow for [examples](http://stackoverflow.com/questions/17793751/how-to-filter-by-object-property-in-angularjs).)

Issue 6:
Your product owner comes to you with a glimmer in her eye. She wants to know if it's possible to color code the tasks based on which category they belong to. You say, "sure, it's possible, but I'm not sure how long it will take." Investigate the possibility of using angular to manipulate the CSS class of tasks based on their category. You might add color as an attribute on categories (which could require back end changes), or assign colors programmatically to each new category.