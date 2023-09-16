burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
const button=document.querySelectorAll('.mybutton')
burger.addEventListener('click',()=>{
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');   
    

})

const squares = document.querySelectorAll('.mybutton');
      const original = [];
      const clicked = [];

      squares.forEach((square, index) => {
        original.push(square.style.backgroundColor);

        square.addEventListener('click', () => {
          square.style.backgroundColor = 'red';
          clicked.push(index);

          if (index === squares.length - 1) {
            clicked.forEach((clickedSquareIndex, i) => {
              setTimeout(() => {
                squares[clickedSquareIndex].classList.add('reset');
                squares[clickedSquareIndex].style.backgroundColor = original[clickedSquareIndex];

                if (i === clicked.length - 1) {
                  clicked.length = 0;
                }
              }, i * 1000);
            });
          }
        });
      });