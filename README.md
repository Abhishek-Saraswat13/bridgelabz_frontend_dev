# 🪟 HTML `<iframe>` — Inline Frames in Web Development

The `<iframe>` (Inline Frame) element in HTML allows you to **embed another HTML page or external resource** directly within your current webpage.  
It acts like a **window inside a page** — displaying another web document, media, or service while maintaining separation from the parent page’s content and JavaScript context.

---

## 📖 Overview

An **iframe** (short for *inline frame*) creates an embedded browsing context.  
This means that within your webpage, an iframe can load another webpage or document independently — complete with its own HTML, CSS, and JavaScript.

### 🧠 Key Concept:
An iframe **does not merge** with your main document. It’s a *separate context* — meaning scripts, styles, and cookies inside the iframe belong to that page’s origin unless explicitly allowed.

### 🔹 Common Uses:
- Embedding **external websites** (e.g., partner content or widgets)
- Embedding **YouTube videos** or **Vimeo players**
- Displaying **Google Maps** or **interactive charts**
- Integrating **third-party forms**, chat boxes, or tools
- Loading **internal documentation or dashboards**

---

## 🧱 Basic Syntax

```html
<iframe src="URL" title="description" width="value" height="value"></iframe>
