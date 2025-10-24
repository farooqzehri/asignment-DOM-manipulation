// const head = document.querySelector(".head")
// head.innerHTML = "Heading  by Js"

// const para = document.querySelector(".para")
// para.innerHTML = "Hello World by JS!!"
//         First try clear

// const head = document.querySelector(".head")
// head.innerHTML = "hellow World by Js"

// const para = document.querySelector(".para")
// para.innerHTML = "Paragraph changed by js"
//          Second try clear


// const heading = document.querySelector(".head")
// heading.innerHTML = "Hello world !!!"

// const Paragraph = document.querySelector(".para")
// Paragraph.innerHTML = "Paragraph is change by js"
//            third try clear by me      done!


//  function testing(){
//     console.log("hello World!");
    
//  }
//  function parag(){
//     console.log("Hello world!");
    
//  }                         //..>>Clear<<..


 //                 
//2. Get the value from an input with id "nameInput" and display it inside a div with id"result".
//   const input = document.querySelector("#nameInput");
//     const result = document.querySelector("#result");

//     function displayValue() {
//       console.log(input.value);
//       result.innerHTML = "Hello " + input.value;
//     }

//     function clearValue() {
//       input.value = "";
//       result.innerHTML = "";
//     }





//              Kana code ka code
// const input = document.querySelector("#input")
// const result = document.querySelector("#result")

//            function dvalue(){
//             console.log(input.value);
//             result.innerHTML = "Hello " + input.value;
            
//            }
//            function clearValue(){
//             input.value = "";
//             result.innerHTML = "";
//            }
//                  karet ta lekin khaas samaj bataw kane <>,.><.


//3. When a button is clicked, change the background color of a section with id"container" to light blue.
// const container = document.querySelector("#container")
// function bcolor(color){
//     console.log(color);
// container.style.backgroundColor = color
    

// } clear successfully >>!<<

// const heading = document.querySelector("#head")
// function textcolor(color){
//     console.log(color);
//     heading.style.color = color
    
// }
// textcolor('red');
    //  Clear successfull!!


//  6    Get the number from an input with id "num1" and show it inside a paragraph with id 
// "output".

// const input = document.querySelector("#input")
// const output = document.querySelector("#output")
// function showNumber(){
//     console.log(input.value);
//     output.innerHTML = "your number is " + input.value
    
// }

// const input = document.querySelector("#input")
// const output = document.querySelector("#output")
// function dnumber(){
//     console.log(input.value);
//     output.innerHTML = "appka number ye hai> " + input.value

    
// }

// 7. Get values from two inputs with ids "first" and "second", add them (as numbers), 
// and show the result in a span with id "sum". 

//             const input1 = document.querySelector("#input1")
//             const input2 = document.querySelector("#input2")
//             const result = document.querySelector("#result")
//             function display(){
//                 console.log(input1.value);
//                 console.log(input2.value);
//                 var sum = Number (input1.value) * Number (input2.value)
//                 result.innerHTML = "result is " + sum
//                 return input1 + input2 
                
                
                
//             }
//             function clearscreen(){
//     result.innerHTML = ""
// }
/////////                             complete 
// 8. Change the text of a paragraph with class "description" to "Updated 
// successfully".
// const paragraph = document.querySelector(".para")
// paragraph.innerHTML = "Updated successfully"

// question no (8) complete
// 9. Select a div with id "box" and set its width to 200px and background color to green.
//         const box = document.querySelector("#box")
//         function bgcolor(){
//             box.style.backgroundColor = "green"
//             box.style.width = "200px";
//             box.style.height = "200px";
//             box.style.border = '2px solid black'
//         }
// bgcolor('green');
//                          question no (9) complete

// 10. Get the email entered in an input with id "email" and print it in the console. 
        // const email = document.querySelector("#email")
        // function lgmail(){
        //     console.log(email.value);
            
        // }
        // lgmail()
        //     question no (10) complete


// 11. Select a paragraph and update its font size to 24px.
        // const paragraph = document.querySelector("#paragraph")
        // function fsize(){
        //     paragraph.style.fontSize = "14px"
            
        // }
        // fsize()
//                 question no 11 complete^
// 12. On button click, get a name from input "fullName" and set the text "Hello, 
// [name]" inside a div "greeting".

// const input = document.querySelector("#input")
// const result = document.querySelector("#output")
// function showresult(){
//     console.log(input.value);
//     result.innerHTML = "Hello " + input.value + "!"

    
// }
// complete 12 ^
// 13. Select an image with id "profilePic" and change its src to another image URL. 
// const profilePic = document.querySelector("#profilePic")
// function changeimg(){
//     profilePic.src = "./assests/1.png"
    
// }
// 14. Change the text color of all elements with class "highlight" to orange. (Hint: You’ll 
// need querySelectorAll for multiple)
//       function changcolor(){
//         const elements = document.querySelectorAll(".highlight")
//         elements.forEach((element) => {
//             element.style.color = "orang"
//         })
//       }
//  changcolor()

function checkAgreement() {
  // Get the checkbox element
  const checkbox = document.querySelector("#agree");

  // Get the paragraph where result will be shown
  const result = document.querySelector("#result");

  // Check if the box is checked
  if (checkbox.checked) {
    result.innerHTML = "Agreed ✅";
  } else {
    result.innerHTML = "Not Agreed ❌";
  }
} 



//                             assignment section

// 1. Select a paragraph with id "message" and change its text to "Welcome!".
 
//   const paragraph = document.querySelector("#para")
//   paragraph.innerHTML = "Welcome!"
  
 

