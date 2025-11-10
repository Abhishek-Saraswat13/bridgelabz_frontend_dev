📚 CSS Fundamentals: Core Concepts & Layout

🎯 Overview: The Presentation Layer

This documentation serves as a complete guide to understanding Cascading Style Sheets (CSS). CSS is the presentation layer of the web, responsible for defining the style, layout, and visual appearance of HTML content.

It covers everything from basic syntax and the critical Box Model to modern layout techniques like Flexbox and CSS Grid.

💡 Key CSS Concepts

1. The Cascade (Priority Order)

The term "Cascading" explains how the browser decides which styles to apply when multiple rules conflict. Styles are applied in order of priority (Highest to Lowest):

Inline CSS (style attribute)

Internal CSS (<style> tag)

External CSS (Linked .css file)

Browser Default Styles

2. Basic Syntax

Every CSS rule consists of a Selector (what to target) and a Declaration Block (the styles to apply).

selector {
    property: value; /* Declaration: property-value pair */
    color: blue;
    font-size: 16px;
}
📦 The CSS Box Model (The Foundation of Layout)
Every HTML element is treated as a rectangular box, structured by four layers. Understanding this model is essential for controlling spacing and sizing.
Here is the breakdown of each layer, starting from the inside out:

Content: This is the innermost layer.

Definition: The inner area that holds the text, images, or media of your HTML element.

What it Controls: Primarily controlled by the width and height properties.

Padding:

Definition: The internal space surrounding the Content layer and extending to the Border.

What it Controls: Inner spacing, which prevents the content from being squished directly against the border.

Border:

Definition: The line or frame that surrounds the Padding and Content.

What it Controls: The visual boundary, including the line's style, width, and color.

Margin:

Definition: The external space outside the Border.

What it Controls: Outer spacing, which determines the distance between this element and other adjacent elements on the page.
The purpose of CSS Selectors is to define exactly which elements get styled, which is key to writing efficient and maintainable code.

A Type selector, like h1, targets all elements matching that specific HTML tag (e.g., all <h1> elements).

A Class selector, using a dot like .highlight, targets all elements that have class="highlight".

An ID selector, using a hash symbol like #main-header, targets the single, unique element with id="main-header".

A Descendant selector, such as div p (with a space), targets all <p> elements that are nested inside a <div> element.

A Pseudo-Class selector, like a:hover, targets an element when it is in a special state, for example, when a link (<a>) is being hovered over.

A Pseudo-Element selector, like p::first-letter, targets only a specific part of an element, such as the first letter of a paragraph.
