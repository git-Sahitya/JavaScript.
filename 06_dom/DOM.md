## DOM - document object model

## Selecting Elements (MOST IMPORTANT)
 ```
1- document.getElementById("box");

2- document.getElementsByClassName("item");

3- document.getElementsByTagName("p");

4-document.querySelector(".box");

5-document.querySelector("#id");

6-document.querySelector("div p");

7-document.querySelectorAll(".item");
```

## HTMLCollection vs NodeList

```
| Feature     | HTMLCollection | NodeList        |
| ----------- | -------------- | ---------------- |
| Live        | ✅ Yes          | ❌ No          |
| forEach     | ❌              | ✅             |
| Returned by | getElements*   | querySelectorAll |

```
## Convert to array:

``` 
Array.from(elements);

```

## Reading & Changing Content

``` 
1 - element.innerHTML = "<b>Hello</b>";

2 - element.innerText = "Hello";

3 - element.innerText = "Hello";

4 - element.textContent = "Hello";

```

## Attributes

```
1- element.getAttribute("href");

2 - element.setAttribute("href", "https://google.com");

3 - element.removeAttribute("disabled");

4 - element.hasAttribute("id");

```
##  Style Manipulation

```
element.style.color = "red";
element.style.backgroundColor = "black";

```

## classList (VERY IMPORTANT)

``` 

1 - element.classList.add("active");

2 - element.classList.remove("active");

3 - element.classList.toggle("active");

4 - element.classList.contains("active");

```

## DOM Traversing (Move Around DOM)

```
1 - element.parentElement;

2 - element.children;

3 - element.firstElementChild;

4 - element.lastElementChild;

5 - element.nextElementSibling;

6 - element.previousElementSibling;

```

## Creating Elements

```
const div = document.createElement("div");
div.innerText = "Hello";

1 - parent.appendChild(div);

2 - parent.append(div);

3 - parent.prepend(div);

```

## Removing Elements

```
1 - element.remove();
      or 
1 - parent.removeChild(child);

```
 ## Events (CORE DOM TOPIC)

 ```
button.addEventListener("click", () => {
  console.log("Clicked");
});


 ```

 ## Common Events
  ```
click
dblclick
mouseover
mouseout
keydown
keyup
submit
change
input
scroll 

```

## Event Object

```
document.addEventListener("click", (e) => {
  console.log(e.target);
});
 ```

 ## Important propertiens:

 ```
e.target
e.type
e.key
e.preventDefault()

```

## Form Handling

```
form.addEventListener("submit", (e) => {
  e.preventDefault();
});


```
## GET input value:
```
input.value;

```

## Event Bubbling & Capturing
## Child → Parent → Document

```
element.addEventListener("click", handler, true);

```
## Stop bubbling:

```
e.stopPropagation();

```

## Event Delegation (IMPORTANT)

```
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.innerText);
  }
});

```
## DOM Ready 

``` Old way ->
window.onload = () => {};
```

``` New way ->
document.addEventListener("DOMContentLoaded", () => {});
```
