HTML Fundamentals: The Structure Layer of the Web
Introduction: Defining the Document Structure
HTML (HyperText Markup Language) is the foundational technology for all web pages. It serves as the Structure Layer of the web, responsible for organizing content (text, images, links, forms) into a meaningful, hierarchical document. The current standard is HTML5, which introduced crucial elements for media handling and semantic organization.

Core Role
The primary purpose of HTML is to define the meaning and structure of content, ensuring that a browser (or assistive technology like screen readers) can correctly interpret and render the page. It answers the question: "What is this piece of content? Is it a heading, a list item, a paragraph, or a navigation link?"

I. HTML Syntax and Document Anatomy
Elements, Tags, and Attributes
Tags: The delimiters that mark the start and end of an element. Tags are enclosed in angle brackets (e.g., <h1>).

Elements: Consist of an opening tag, the content, and a closing tag (e.g., <h1>Page Title</h1>). Some elements are self-closing or void elements (e.g., <br>, <img>).

Attributes: Provide extra information about an element and appear in the opening tag (e.g., <a href="index.html" class="nav-link">). Key global attributes include id, class, and style.

Mandatory Document Structure
Every valid HTML document must include the following minimum structure:

<!DOCTYPE html>: The document type declaration, which tells the browser to render the page using the HTML5 standard.

<html>: The root element that wraps all content on the page. It often includes the lang attribute to declare the document's language.

<head>: Contains essential metadata about the HTML document that is not displayed directly on the page (e.g., title, character set, external file links).

<body>: Contains all the visible content of the page, including headings, paragraphs, images, and links.

II. Essential Metadata (<head> Content)
The <head> section is non-visual but critical for browser behavior, search engine optimization (SEO), and linking external files:

<title>: Defines the text that appears in the browser tab or window title.

<meta>: Used for various metadata definitions, most commonly the character set (charset="UTF-8") and the viewport settings (name="viewport" content="width=device-width, initial-scale=1.0"), which are crucial for responsive design.

<link>: Used to link external resource files, most commonly CSS stylesheets (e.g., <link rel="stylesheet" href="styles.css">).

<script>: Used to include or reference JavaScript code, often placed at the end of the <body> for performance.

III. Core Body Elements (<body> Content)
The <body> contains the elements that users interact with directly:

Text Structure
Headings: <h1> through <h6> define content hierarchy, where <h1> is the most important title.

Paragraphs: <p> groups and formats blocks of text.

Lists: Organized content using <ul> (unordered/bulleted), <ol> (ordered/numbered), and <li> (list item).

Links and Navigation
Anchor Tag (<a>): Creates hyperlinks. The href attribute is mandatory and specifies the destination URL or file path.

Media and Embedding
Image (<img>): Embeds an image. It is a self-closing tag and requires the src (source path) and alt (alternative text for accessibility) attributes.

Audio/Video: <audio> and <video> tags allow native embedding of media content.
