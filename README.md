<div align="center">

#  <img width="35" height="35" alt="image" src="https://github.com/user-attachments/assets/e10770a0-d745-4a73-800b-a79771004518" />Tkinter Tutorial

##### (Developed by M. Qasim Riaz)

##### Access at >>> https://qasimriaz002.github.io/tkinter-tutorial/

### An interactive, slide-based web course for GUI programming in Python

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)

**30 slides · Live demos · Dark mode · Mobile responsive · Zero dependencies**

[▶ Open Course](#-getting-started) · [📚 Slide Index](#-course-contents-30-slides) · [📁 File Structure](#-project-structure) · [🛠 Tech Stack](#-tech-stack)

---

</div>

## ✨ Features

| Feature | Details |
|---|---|
| 📊 **30 Interactive Slides** | Every slide has a live demo alongside a Python code example |
| 🌗 **Dark / Light Theme** | Instant toggle, persists across slides |
| ⌨️ **Keyboard Navigation** | `→` / `Space` to advance, `←` to go back |
| 🗂️ **Navigation Drawer** | Slide index panel — jump to any slide instantly by name |
| 📱 **Mobile Responsive** | Sticky header & footer, works on all screen sizes |
| 📈 **Progress Bar** | Always shows how far through the course you are |
| 🎨 **Syntax Highlighting** | Python code colour-coded in every slide |
| ⚡ **Zero Dependencies** | Pure HTML, CSS, JS — just open `index.html` |

---

## 🚀 Getting Started

No install, no build step, no internet required.

```bash
# Clone the repo
git clone https://github.com/qasimriaz002/tkinter-tutorial.git

# Open in browser
cd tkinter-tutorial
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

> **Tip:** Works with any modern browser — Chrome, Firefox, Safari, Edge.

---

## 🎮 Navigation Controls

| Action | Control |
|---|---|
| Next slide | `→` Arrow key or `Space` |
| Previous slide | `←` Arrow key |
| Toggle dark/light mode | Click `◑` button in the header |
| Open slide index drawer | Click `☰` hamburger button in the header |
| Jump to any slide | Open drawer → click any slide title |
| Close drawer | Click `✕`, click outside, or press `Esc` |
| Scroll slide content | Mouse wheel / touch scroll |

---

## 🗂️ Navigation Drawer

The drawer gives you a full, always-accessible index of every slide organised by module — so you never have to click through slides one by one to find what you need.

**How it works:**

- Click the **☰ hamburger icon** in the top-right of the header to open the drawer
- Slides are grouped into **6 colour-coded modules** for easy scanning
- The **currently active slide** is highlighted in blue with a left accent border
- The drawer list **auto-scrolls** to keep the active slide visible
- Click any slide title to **jump directly** to that slide — the drawer closes automatically
- A **dark overlay** appears behind the drawer; click it to dismiss
- Press **`Esc`** at any time to close the drawer with the keyboard
- The hamburger icon **animates into an ✕** when the drawer is open

```
☰  ←  click to open
│
├── 🟦 Foundations
│   ├── 01  Introduction to GUI Programming
│   ├── 02  Getting Started with Tkinter
│   └── 03  Architecture Overview
│
├── 🟩 Core Widgets
│   ├── 04  Widget: Label
│   ├── 05  Widget: Button
│   └── ...
│
└── (and so on for all 6 modules)
```

---

## 📚 Course Contents (30 Slides)

<details>
<summary><strong>🟦 Module 1 — Foundations (Slides 1–3)</strong></summary>

| # | Topic | Key Concepts |
|---|---|---|
| 1 | Introduction to GUI Programming | GUI vs CLI, why Tkinter, use cases |
| 2 | Getting Started with Tkinter | `tk.Tk()`, `mainloop()`, window setup |
| 3 | Architecture Overview | Root → Frame → Widget hierarchy |

</details>

<details>
<summary><strong>🟩 Module 2 — Core Widgets (Slides 4–17)</strong></summary>

| # | Topic | Key Concepts |
|---|---|---|
| 4 | Widget: Label | `text`, `font`, `fg`, `bg`, `anchor` |
| 5 | Widget: Button | `command`, `state`, callback functions |
| 6 | Widget: Entry | `.get()`, `.delete()`, `.insert()`, password field |
| 7 | Widget: Text | Multi-line input, `"1.0"` indexing, read-only state |
| 8 | Widget: Frame | `relief`, `bd`, grouping widgets |
| 9 | Widget: Canvas | `create_rectangle`, `create_oval`, `create_line` |
| 10 | Widget: Checkbutton | `IntVar`, `BooleanVar`, `onvalue` / `offvalue` |
| 11 | Widget: Radiobutton | Shared variable, mutually exclusive groups |
| 12 | Widget: Scale | `from_`, `to`, `orient`, `resolution` |
| 13 | Widget: Listbox | `.insert()`, `.curselection()`, `selectmode` |
| 14 | Widget: Spinbox | Numeric range, text values tuple |
| 15 | Widget: Combobox (ttk) | Drop-down + entry, `.current()` |
| 16 | Widget: Progressbar | `determinate` vs `indeterminate` mode |
| 17 | Widget: Notebook / Tabs | `ttk.Notebook`, `.add()`, tab frames |

</details>

<details>
<summary><strong>🟨 Module 3 — Layout & Geometry (Slides 18–20)</strong></summary>

| # | Topic | Key Concepts |
|---|---|---|
| 18 | Pack: Expand & Propagate | `expand=True`, `pack_propagate(False)`, `fill` |
| 19 | Creating Menus | `Menu`, `add_cascade`, `add_command`, `tearoff` |
| 20 | Geometry: Grid() | `row`, `column`, `sticky`, `columnconfigure` weight |

</details>

<details>
<summary><strong>🟧 Module 4 — Dialogs & Dynamic UI (Slides 21–24)</strong></summary>

| # | Topic | Key Concepts |
|---|---|---|
| 21 | Message Boxes | `showinfo`, `showerror`, `askyesno` |
| 22 | Dynamic Widget Properties | `.config()`, runtime colour & text changes |
| 23 | Displaying Images | `PhotoImage`, garbage collection bug & fix |
| 24 | Image Buttons | `compound` parameter, toolbar icons |

</details>

<details>
<summary><strong>🟥 Module 5 — Real-World Projects (Slides 25–29)</strong></summary>

| # | Topic | Key Concepts |
|---|---|---|
| 25 | Calculator | `grid()` layout, `eval()`, button loop |
| 26 | Responsive Frames | Header + Sidebar + Main layout with `pack` |
| 27 | Login Application | Screen switching, credential validation |
| 28 | Billing System | State management, running totals, input validation |
| 29 | Advanced Event Handling | `.bind()`, `<Enter>`, `<Leave>`, `<Button-3>`, `<Key>` |

</details>

<details>
<summary><strong>⬛ Module 6 — Design & Polish (Slide 30)</strong></summary>

| # | Topic | Key Concepts |
|---|---|---|
| 30 | UX/UI Design Principles | Contrast, spacing, alignment, accessibility |

</details>

---

## 📁 Project Structure

```
tkinter-tutorial/
│
├── 📄 index.html                ← Main entry point (all 30 slides embedded)
│
├── 📂 css/
│   └── 🎨 styles.css            ← All styles: themes, layout, widgets, drawer, mobile fixes
│
├── 📂 js/
│   ├── 🔀 navigation.js         ← Slide switching, progress bar, keyboard, theme toggle & drawer
│   └── 🎮 demos.js              ← Interactive demo functions (calculator, login, billing…)
│
├── 📂 slides/                   ← Individual slide fragments (for easy editing)
│   ├── slide-01.html            ← Introduction to GUI Programming
│   ├── slide-02.html            ← Getting Started with Tkinter
│   ├── slide-03.html            ← Architecture Overview
│   ├── slide-04.html            ← Widget: Label
│   ├── slide-05.html            ← Widget: Button
│   ├── slide-06.html            ← Widget: Entry
│   ├── slide-07.html            ← Widget: Text
│   ├── slide-08.html            ← Widget: Frame
│   ├── slide-09.html            ← Widget: Canvas
│   ├── slide-10.html            ← Widget: Checkbutton
│   ├── slide-11.html            ← Widget: Radiobutton
│   ├── slide-12.html            ← Widget: Scale (Slider)
│   ├── slide-13.html            ← Widget: Listbox
│   ├── slide-14.html            ← Widget: Spinbox
│   ├── slide-15.html            ← Widget: Combobox (ttk)
│   ├── slide-16.html            ← Widget: Progressbar
│   ├── slide-17.html            ← Widget: Notebook / Tabs
│   ├── slide-18.html            ← Pack: Expand & Propagate
│   ├── slide-19.html            ← Creating Menus
│   ├── slide-20.html            ← Geometry: Grid()
│   ├── slide-21.html            ← Message Boxes
│   ├── slide-22.html            ← Dynamic Widget Properties
│   ├── slide-23.html            ← Displaying Images
│   ├── slide-24.html            ← Image Buttons
│   ├── slide-25.html            ← Real-World Demo: Calculator
│   ├── slide-26.html            ← Advanced Pack: Responsive Frames
│   ├── slide-27.html            ← Login Application Example
│   ├── slide-28.html            ← Complex App: Billing System
│   ├── slide-29.html            ← Advanced Event Handling
│   └── slide-30.html            ← UX/UI Design Principles
│
├── 📂 assets/
│   └── 📂 icons/                ← Custom icons (favicon.png stored here)
│
├── 📄 .gitignore                ← Ignores .DS_Store, Thumbs.db, *.log
└── 📄 README.md                 ← This file
```

> **Note:** The `slides/` folder contains the same HTML as what's embedded in `index.html`. They are individual fragments for convenient editing — the browser loads only `index.html`.

---

## 🛠 Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| Markup | HTML5 | Slide structure & semantic layout |
| Styling | CSS3 | Custom properties, grid, flexbox, `100dvh` mobile fix |
| Logic | Vanilla JS (ES6+) | Navigation, drawer, demos, theme toggle |
| No framework | — | Zero `npm install`, zero build tools |

---

## 📱 Mobile Support

The course is fully usable on smartphones:

- **Sticky header & footer** — always visible, never scroll off screen
- **`100dvh`** — correctly handles mobile browser address bar height
- **Touch scrolling** — slide content scrolls independently inside fixed chrome
- **Navigation drawer** — tap `☰` to jump to any slide without endless swiping
- **Compact layout** — font sizes and padding scale down on narrow screens via `@media (max-width: 600px)`

---

## 🤝 Contributing

1. Fork the repository
2. To edit a slide, find the matching file in `slides/` and copy your changes into the same `<section>` in `index.html`
3. To add a new slide, add a `<section class="slide">` block in `index.html` and add the corresponding entry to the `SLIDE_DATA` array at the top of `js/navigation.js` — the drawer updates automatically
4. Submit a pull request with a clear description of your changes

---

## 📄 License

MIT — free to use, modify, and distribute.

---

<div align="center">

Made with ❤️ for Python learners everywhere

</div>
