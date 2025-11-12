# 🧱 HTML Inline and Block Elements — A Complete Guide

In HTML, every element has a **display behavior** — it determines how the element is rendered in the browser.  
The two most common display types are **block-level** and **inline-level** elements.  

Understanding the difference between them is essential for proper page structure, layout, and styling.

---

## 📖 Overview

### 🧩 What Are Block and Inline Elements?

- **Block Elements**  
  Start on a new line and take up the **full width** available.  
  They are used to define **large structural sections** of a page such as paragraphs, divs, and headings.

- **Inline Elements**  
  Do **not start on a new line**. They only take up as much **width as their content requires**.  
  Inline elements are used for **styling or formatting** small parts of text or content within block elements.

---

## 🧱 Block-Level Elements

Block-level elements are the **building blocks** of a webpage.  
They always start on a new line and typically stretch across the container’s full width.

### 🧩 Common Block Elements:
| Element | Description |
|----------|--------------|
| `<div>` | Generic container for content and layout |
| `<p>` | Paragraph of text |
| `<h1>` to `<h6>` | Headings, from largest to smallest |
| `<section>` | A thematic grouping of content |
| `<header>` | Introductory content for a page or section |
| `<footer>` | Footer or closing section |
| `<article>` | Self-contained piece of content |
| `<nav>` | Section for navigation links |
| `<ul>`, `<ol>`, `<li>` | Lists and list items |
| `<form>` | Form container |
| `<table>` | Data table |
| `<blockquote>` | Long quotations |

### 🧱 Example of Block Elements:
```html
<h1>My Favorite Foods</h1>
<p>I love pizza, sushi, and pasta.</p>
<div>
  <h2>Details</h2>
  <p>Pizza is great with extra cheese.</p>
</div>
