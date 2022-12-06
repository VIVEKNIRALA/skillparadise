burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')



burger.addEventListener('click', () => {
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})


const scriptURL = 'https://script.google.com/macros/s/AKfycbwJ8rtOEs6qSkBF3OLtuY0Ib61J1O8KRdXGNaSY_3BlNij2BCPJv2rCR_QqbLlXeURu3A/exec'
        const form = document.forms['google-sheet']
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => alert("Thanks for Contacting us..! skill paradise will notify You about courses and internship..."))
            .catch(error => console.error('Error!', error.message))
        })

   
