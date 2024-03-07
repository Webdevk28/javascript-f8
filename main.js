

// =======================================================
// document => element => attribut, text
// var heading = document.getElementById ('')
/*
- getElementByID('')
- getElementClassName('')
- getElementTagName('')
- qurySelector('')
- qurySelectorAll('')

============================
- Element
- Attribute
- Text
============================
# Element 
- getElementByID('')
- getElementClassName('')
- getElementTagName('')
- qurySelector('')
- qurySelectorAll('')

#Attribute

*/

// =============== text
// index.html
/*
# Text
- innerText
- textContent
*/

// var headingElement = document.querySelector("h1");

// headingElement.innerText = "Welcome new heading";
// console.log(headingElement.innerText);


// ====== seter and getter text to element
// box1.html

// var box1Element = 
//     document.querySelector('.box1');

//     box1Element.innerHTML ='<h1>New heading</h1>'

// console.log([box1Element]);

/*
- Element
- Attribute
- Text

-- innerHTML, outerHTML

-innerHTML: can add Element node, Attribute node,Text node
*/


// ========css style
// box2.html

// var box2Element = 
//     document.querySelector ('.box2')

// Object.assign(box2Element.style, {
//     width: '200px',
//     height: '200px',
//     backgroundColor: 'orange',
//     fontSize: '30px',
// });

// console.log (box2Element.style.width)



// ======== class list property
// box3.html
// add
// contains
// remove
// toggle

// var box3Element = 
// document.querySelector('.box3')

// box3Element.classList.add ('red')
// console.log(box3Element.classList)

// setInterval(() =>{
//     box3Element.classList.toggle('red')
// } , 1000)

// ======== DOM events
// box4.html

// var box4Elements = 
//     document.querySelectorAll('.box4')

// for (let i = 0; i < box4Elements.length; ++i) {
//     box4Elements[i].onclick = function(e) {
//         console.log(e.target);
//     }
// }

// console.log(box4Elements)
