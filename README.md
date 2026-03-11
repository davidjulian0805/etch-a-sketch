# Etch-A-Sketch

This project is a **browser-based sketch pad** built as part of **The Odin Project Foundations Course**. It allows users to draw on a grid by hovering their mouse over squares, creating a pixel-art style drawing experience.

The goal of this project is to practice **JavaScript DOM manipulation**, **Flexbox layouts**, and **event handling**.

---

## Project Overview

The Etch-A-Sketch works by generating a grid of square div elements using **JavaScript**. When the user hovers over a square, it changes color, creating a drawing effect similar to a digital sketch pad.

Users can also generate a **new grid size** by clicking a button and entering the number of squares per side.

---

## Features

* Dynamic **16×16 grid** generated using JavaScript
* **Hover effect** that colors squares when the mouse passes over them
* **Adjustable grid size** using a prompt
* Grid size limit of **100×100** to avoid performance issues
* Grid always fits inside a **fixed container size**
* Uses **Flexbox** to organize the grid layout

---

## Extra Credit Features

* Randomized **RGB colors** on hover
* **Progressive darkening effect** where each hover interaction darkens the square by 10%
* Square becomes fully dark after **10 interactions**

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (DOM Manipulation)
* Flexbox
* Git
* GitHub

---

## What I Learned

Through this project I learned how to:

* Dynamically create elements using **JavaScript**
* Manipulate the **DOM**
* Use **event listeners** for hover interactions
* Work with **user input using prompts**
* Build layouts using **Flexbox**
* Debug using **browser developer tools**
* Practice **committing early and often with Git**

---

## How It Works

1. A **container div** holds all grid squares.
2. JavaScript creates square **div elements dynamically**.
3. Flexbox arranges the squares into a **grid layout**.
4. When the mouse **hovers over a square**, its color changes.
5. Clicking the **grid size button** prompts the user for a new grid size.
6. The existing grid is removed and a **new grid is generated**.

---

## Live Demo

https://davidjulian0805.github.io/etch-a-sketch/

## How to Run the Project

Clone the repository:

```bash id="s2yfjr"
git clone https://github.com/davidjulian0805/etch-a-sketch.git
```

Open the folder and run:

```
index.html
```

in your browser.

---

## Future Improvements

Possible improvements include:

* Add **clear grid button**
* Add **color picker**
* Add **eraser mode**
* Improve **UI design**
* Make the project **responsive**

---

## Acknowledgements

Project provided by:

**The Odin Project**
[https://www.theodinproject.com](https://www.theodinproject.com)

---

