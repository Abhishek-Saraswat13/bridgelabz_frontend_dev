# 🎯 CSS Flexbox — The Flexible Box Layout Module

**CSS Flexbox (Flexible Box Layout)** is a modern CSS layout module designed to create **responsive**, **dynamic**, and **space-efficient** layouts easily.  

It helps you align, distribute, and organize content along one or two axes — **horizontally or vertically** — without using floats or complicated CSS positioning.

---

## 📖 Overview

Before Flexbox, developers used:
- `float` for layout positioning,
- `inline-block` hacks for alignment,
- and fixed widths that broke easily on different screens.

Flexbox solves these problems by allowing containers to **automatically adjust** the size, order, and alignment of their child elements.

### 🧠 Key Concept

- You define a **flex container** using `display: flex`.
- All **direct child elements** become **flex items**.
- You can then control their alignment, spacing, wrapping, and direction with powerful properties.

---

## 🧱 Basic Structure

```html
<div class="container">
  <div class="item">One</div>
  <div class="item">Two</div>
  <div class="item">Three</div>
</div>
