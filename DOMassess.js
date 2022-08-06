let sidebar=document.querySelector('.sidebar')
let article=document.querySelector('article')
let xbar=document.querySelector('.xbar')

sidebar.onclick= function(){
    article.classList.toggle('slide')
}
xbar.onclick= function(){
    article.classList.toggle('slide')
}