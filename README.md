# Personal Portfolio Website

Personal portfolio built from scratch using pure HTML, CSS, and JavaScript as part of Exercise 00.

## Project Files
- index.html: Main HTML structure for all sections.
- style.css: Layout styling, flexbox grid, and responsive design.
- script.js: Logic for dark mode and mobile navigation menu.
- assets/: Profile photos and visual media.

## Main Features
- Responsive layout using CSS flexbox and media queries for mobile views.
- Sections: Header, About Me, Skills, Projects Showcase (00-03), Hobbies, Contact Form, and Footer.
- Interactive Dark/Light mode switcher without external UI frameworks or libraries.

## Theme Switcher Event Lifecycle
How the dark mode toggle works step-by-step:

1.User Action: The user clicks the theme toggle button in the navbar (`#theme-toggle`).
2.Event Firing: The browser triggers a `click` event on that button.
3.JavaScript Callback: The event listener runs the callback function in `script.js` to check the current `data-theme` attribute on the root element.
4.DOM/CSS Mutation: The JS function switches the `data-theme` attribute on `document.documentElement` between `dark` and `light`, saves it to `localStorage`, and the CSS updates the theme colors instantly.
