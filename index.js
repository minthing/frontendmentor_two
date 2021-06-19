console.log("helloWorld");

const list = document.querySelector('.wrap_list');
const lists = document.querySelectorAll('.list_item');
let count;

list.addEventListener('click', (event)=>{
    let target = event.target;
    let targetName = event.target.tagName;
    if(targetName == "STRONG"){
        count = target.parentNode.getAttribute('data-index');
        target.parentNode.classList.toggle('active');
    }else{
        target.classList.toggle('active');
        count = target.getAttribute('data-index');
    }
    for(let i = 0; i < lists.length ; i++){
        if(i != count){
        lists[i].classList.remove('active');
    }
    }
})