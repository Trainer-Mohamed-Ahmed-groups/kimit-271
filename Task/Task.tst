Project: HTML Tag Validator & Dynamic Element Creator
The Objective
Build a web application that takes user input, validates it against a whitelist of HTML tags, and dynamically injects valid elements into the webpage.

Feature,Description
Input & Action,"An input field for the tag name and an ""Add Tag"" button."
Validation,"Check input against a predefined array (e.g., ['div', 'p', 'h1'])."
Success State,"Create the element, add default text, and append to #parent."
Error State,"Show ""Error: This is not a valid HTML tag"" in a <span> if invalid."
Clean Up,Clear errors on success and prevent empty submissions.
