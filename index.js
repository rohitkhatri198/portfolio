var typingElement = document.querySelector("#typed");
var typeArray = [
  `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
];
var index = 0,
  isAdding = true,
  typeIndex = 0;

function playAnim() {
  setTimeout(
    function () {
      typingElement.innerText = typeArray[typeIndex].slice(0, index);
      /*
        This line handles both typing and removing text
        typeArray[typeIndex] selects the text from array
        slice(0, index) selects the part of that text

        Examples:

        typeIndex = 0     => First Text
        index = 0         => First Letter of the Text
        Result is "H"

        typeIndex = 0
        index = 1
        Result is "HT"    => First 2 Letters of the Text

        typeIndex = 0
        index = 2
        Result is "HTM"   => First 3 Letters of the Text

        typeIndex = 0
        index = 3
        Result is "HTML"  =>  Text typed completely, start to remove by decreasing index
                              While removing, index will be: 2,1,0 . After 0, move on to next text. 

        typeIndex = 1     => Second Text                   
        index = 0
        Result is "C"

        typeIndex = 1
        index = 1
        Result is "CS"

        typeIndex = 1
        index = 2
        Result is "CSS"
      */

      // If typing
      if (isAdding) {
        if (index >= typeArray[typeIndex].length) {
          isAdding = false;
          // If text typed completely, wait 2s before starting to remove it.
          setTimeout(function () {
            playAnim();
          }, 100);
          return;
        } else {
          // Continue to typing text by increasing index
          index++;
        }
      } else {
        // If removing
        if (index === 0) {
          isAdding = true;
          //If text removed completely, move on to next text by increasing typeIndex
          typeIndex++;
          if (typeIndex >= typeArray.length) {
            // Turn to beginning when reached to last text
            typeIndex = 0;
          }
        }
      }
      // Call the function always
      playAnim();
    },

    /* 
      If typing text, call it every 120ms
      If removing text, call it every 60ms
      Type slower, remove faster
    */
    isAdding ? 20 : 120
  );
}

// Start typing text
playAnim();

const button = document.querySelector(".button");

button.addEventListener("clicked", (e) => {
  e.preventDefault();
  button.classList.add(".pressed");

  setTimeout(()=>{
    button.classList.remove(".pressed")
  },600)
});
