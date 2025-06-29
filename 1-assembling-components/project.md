Customizing the project with Components based architecture

So far, you’ve learned about React components, but now you will focus on learning how to customize the project. You will learn about the software development approach, detailing the creation of separate associated files, the requirements gathering and the subsequent folder structure to be created.

Building a Layout
Imagine that you've been given the task of building a somewhat more complex website layout using React.

At this point, you still don't know too much about how React works, but even with your limited knowledge, you can still build some relatively interesting designs.

Currently, you need to build a simple typography-focused layout for a coding blog.

This means that you will not have to use images, which simplifies your task significantly.

The layout you're supposed to build will consist of the following sections:

Main navigation 

Promo (main advertisement)

A list of newest posts' previews (intros)

The footer 

Building The App
Since this app's focus is on customization, let’s name the app customizing-example. 

What follows is the command to run in a suitable folder on your own computer. By "a suitable folder", I mean: "a folder where you feel comfortable installing a boilerplate React application".

npm init react-app customizing-example

This will produce a brand-new starter app with a familiar structure.

Inspecting the src folder of the starter app, it looks like this:
src/
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
    reportWebVitals.js
    setupTests.js

Then simply add a components folder to it. Since the components folder is currently empty, you can add a component for each of the sections of the typography-focused blog. Here's the structural update:

src/
    components/
        Nav.js
        Promo.js
        Intro1.js
        Intro2.js
        Intro3.js
        Footer.js
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
    reportWebVitals.js
    setupTests.js

At this point, there's no need to complicate things. You have the Nav component, the Promo component, the Intro1, Intro2, and the Intro3 component. Finally, there's also a Footer.js component.

This means you've fully planned the app, based on some best practices as suggested by the official React docs website, and based on the level of complexity of the project itself. Since this project is relatively simple, this structure feels right.

In this reading, you’ll just build all the components inside the components folder, and then, in the upcoming lesson items, import them into the App.js file.

<Look at the above components implemented in this project>
Now that you have completed all the components for the app, here are a few more interesting things about the syntax.

These are:
The use of the className attribute in JSX
The use of separate components for repetitive code
Where are all the props?
Why was I not using the <a> element for empty links? 

Discussing the Syntax

Now let’s briefly discuss the four bullet points above.

Why use the className attribute in the JSX syntax?

Well, with JSX, it looks like HTML so much that it's easy to forget that it's actually JavaScript code - not HTML.

While regular HTML does indeed have a class attribute, which is used to list one or more CSS classes to be used on a given HTML element, this cannot really work in JSX. The reason is that JSX is a special kind of JavaScript syntax, and the word class is a reserved keyword in JSX. That's why the React team had to make a compromise and so className is used in JSX to list one or more CSS classes to be used on a given element or component.

But why use Intro1.js, Intro2.js, and Intro3.js? Isn't one of the tenets of coding the DRY approach - that is, the "Don't repeat yourself" approach?

Indeed, it is. However, there are still a few concepts to discuss before you learn how to re-use a single component with variations in its content. This has to do with data in components, but don’t worry, we’ll be getting to that later. 

The third question is about the props object. It has been mentioned before, but so far it hasn't been used. It hasn’t been used in this example either.

The answer to this question has to do with the next lesson, titled Component Use and Styling. In this lesson, you’ll see in practice how you can make components work better, with the help of props.

The final question is about not using the <a> element for empty links in my app.

The answer here depends on whether those links are "internal" - inside an app, or "external", meaning, leading to some external link, such as 
https://www.coursera.org
. If the links are internal to the app - as they are envisioned here - using the <a> tag is simply not the React way of doing things. You'll learn why that is the case when discussing the use of React Router.

Conclusion
Having finished this reading, you have now learned about the software development approach, detailing the creation of separate associated files, the requirements gathering, and the subsequent folder structure to be created.