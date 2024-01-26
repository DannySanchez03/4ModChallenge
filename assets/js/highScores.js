let backBtn = document.querySelector(".backBtn");
let clearLSBtn = document.querySelector(".clearLSBtn");
let listLS = document.querySelector(".listLS");

// localStorage.setItem('highScore', 'Danny Sanchez');

document.addEventListener('DOMContentLoaded', function() {
    let LSExist = localStorage.getItem('highScore');
    
    if(LSExist)
    {
        console.log('There exist this local storage');
        let data = JSON.parse(LSExist)
        for(let i = 0; i < data.name.length; i++)
        {
            let addLi = document.createElement('li');
            addLi.textContent = data.name[i] + ' ' + data.score[i];
            listLS.append(addLi);
        }
    }
})

clearLSBtn.addEventListener('click', function() {
    while(listLS.firstElementChild)
    {
        listLS.removeChild(listLS.firstElementChild);
    }
    localStorage.clear();
})

backBtn.addEventListener('click', function() {
    window.location = './index.html';
})