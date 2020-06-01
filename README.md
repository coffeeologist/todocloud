# todocloud
Todocloud is a new way of organizing your todo list in the form of a word cloud. Important tasks are large and centered while unimportant, back-burner tasks are smaller and off to the side. This project is developed as a React app, and it is intended to be a chrome extension that will replace the New Tab.

![mockup](https://github.com/coffeeologist/todocloud/blob/master/app/src/img/example/mockup.jpg?raw=true)

# Enter a task with importance level
### End your task with "fl:*x*" where *x* is a number between 0 to 9.  
- 0 is the lowest level of importance; the task will be given the smallest font. 
- 9 is the highest level of importance; the task will be given the largest font. Numbers out of range will be rounded to the nearest extreme (0 or 9). 
### Invalid inputs or no "fl:*x*" flag attached tasks will be given a default importance level of 4.

![crossout](https://github.com/coffeeologist/todocloud/blob/master/app/src/img/example/enter_task.jpg?raw=true)

# Cross out a task by hovering over it and click!
<img src="https://github.com/coffeeologist/todocloud/blob/master/app/src/img/example/cross_out.jpg?raw=true" width="300">

# Contribution
Inspired by my previous hackathon project [NewsCloud](https://github.com/coffeeologist/newsCloud) where I worked with one other partner Allen Liu.
