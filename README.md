CSS 101: Styling the Web (Bridgelabz Frontend Development)
👋 Welcome to the Presentation Layer!
You've learned that HTML is the skeleton (the Structure), and JavaScript is the brain (the Behavior). CSS (Cascading Style Sheets) is the clothes, makeup, and style—it's the Presentation Layer that makes the web beautiful and usable.

What Is CSS?
CSS is a powerful language that tells the browser how to display HTML elements. It dictates everything:

Look: Colors, fonts, and text styles.

Layout: Spacing, positioning, and alignment.

Design: Animations, responsiveness, and visual appeal.

Why "Cascading"? 🌊
The word "Cascading" is key! It refers to the order of priority when multiple style rules try to control the same element. Think of it as a set of style rules falling like a waterfall—the rule that lands last and has the highest specific gravity (priority) is the one that wins.
Priority Level (Highest to Lowest)	Description
1. Inline CSS	Styles written directly on the element. (The ultimate boss!)
2. Internal CSS	Styles inside the <style> tag in the <head>.
3. External CSS	Styles in a separate linked .css file.
4. Browser Defaults	The default styles built into Chrome, Firefox, etc.
Three Ways to Connect CSS to HTML
We have three methods for applying CSS, each with its own trade-offs:

1. External CSS (Best Practice) 📁
How: Write all CSS in a separate .css file and link it in the <head> of your HTML.

Pros: Cleanest code, reusable across all pages, easiest to maintain and scale.

Example: <link rel="stylesheet" href="styles.css">

2. Internal CSS 📌
How: Write CSS inside a <style> tag within the HTML <head>.

Pros: Keeps styles contained to a single page.

Cons: Not reusable across the site; clutter for large styles.

3. Inline CSS (Use Sparingly) 💨
How: Write CSS directly inside the HTML element using the style attribute.

Pros: Quick for testing or one-off changes.

Cons: Highest priority (hard to override), clutters HTML, not reusable.

Example: <p style="color: red; font-weight: bold;">Hello</p>
 The CSS Box Model (Crucial for Layout)The Box Model is the single most important concept in CSS layout. It says that every single HTML element is a rectangular box. Understanding its layers is essential for spacing and sizing elements correctly.Layer (Inside to Out)What it Controls1. ContentThe text/image itself (Controlled by width and height).2. PaddingInternal space between the content and the border.3. BorderThe visible line around the element.4. MarginExternal space outside the border, pushing other elements away.
 🏗️ Modern Layout Techniques
Forget old-school float tricks; modern CSS gives us two powerful layout tools:

1. Flexbox (One-Dimensional)
Great for arranging items in a single row or column.

Perfect for navigation bars, aligning form elements, or distributing space.

Start with: display: flex;

2. CSS Grid (Two-Dimensional)
Great for structuring a full-page layout (rows AND columns).

Perfect for main site structure, complex dashboards, or gallery layouts.

Start with: display: grid;

📱 Responsive Design (Media Queries)
CSS is what makes a site look great on a phone, tablet, or desktop. Media Queries are the engine for this.

A media query allows you to apply styles only when a certain condition is met, typically screen width:
