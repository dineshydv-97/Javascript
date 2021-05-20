console.log('hello dinesh ')
let fetchBtn = document.getElementById('fetchBtn');

fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler(){
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true); 
    xhr.getResponseHeader('Content-type', 'application/json');
    xhr.onprogress= function(){
        console.log('on progress');
    }
    xhr.onload= function(){
        console.log(this.responseText)
    }
    params = `{ name:'testfff', salary:'19923, age:'23'}`
    xhr.send(params);
    console.log('we are done')
}