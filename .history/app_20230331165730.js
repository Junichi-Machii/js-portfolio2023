const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions() {
  //Button click active class
  for(let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function()  {
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      this.className += ' active-btn';
    }) 
  }

  //section active
  allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if(id) {
      //remove selected from the other btns
      sectBtns.forEach((btn) => {
        btn.classList.remove('active')
      })
      e.target.classList.add('active')

      //hide other sections
      sections.forEach((section)=> {
        section.classList.remove('active')
      })

      const element = document.getElementById(id);
      element.classList.add('active');
    }
  })
}

PageTransitions();




// count

function count(entry) {
  let maxNum = parseFloat(entry.target.dataset.max),
  counterId,
  duration = 1500 / maxNum;

  function countUp() {
    let currentNum = parseFloat(entry.target.innerHTML);
    if(currentNum < maxNum) {
      entry.target.innerHTML = currentNum + 1 + '%';
    }

    if (currentNum == maxNum) {
      clearInterval(counterId);
    }
  }
  counterId = setInterval(countUp, duration);
}