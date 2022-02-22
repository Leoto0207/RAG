let url = 'https://api.adviceslip.com/advice'
let number = document.querySelector('#number');
let adv = document.getElementById('adv');
let btn = document.querySelector('.circle');

btn.addEventListener('click', function(){
    fetch(url)
        .then((response)=> {
            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        }).then((data)=> {
            number.innerText = data.slip.id;
            adv.innerText = data.slip.advice;
        })
})
