let divId = document.querySelector('div');
divId.setAttribute('id','main-div');

let buttonTitle = document.getElementsByTagName('button')[0].innerText = 'הטמעת טייטל';
let buttonDescription = document.getElementsByTagName('button')[1].innerText ='הטמעת דסקריפשן'
let insertTitle = document.getElementsByTagName('input')[0];
//console.log(insertTitle);
insertTitle.setAttribute('id','titleTag');

let buttonAddEvent = document.getElementsByTagName('button')[0];
//console.log(buttonAddEvent);
let titleTag = document.querySelector('title');
buttonAddEvent.addEventListener('click',()=>{
titleTag.innerText = insertTitle.value;
if(insertTitle.value == 0){
    let contentP = document.createElement('p');
    contentP.innerText ='* אי אפשר להטמיע טייטל ריק, אנא הוסיפו תוכן לשדה המבוקש.'
    document.body.append(contentP);
    contentP.style.color = 'red';
    contentP.style.fontWeight ='600';
    contentP.style.fontSize ='15px';
}

})
function setDesc(){
    let buttonEventDescription = document.getElementsByTagName('button')[1];
    let insertDescription = document.getElementsByTagName('input')[1];
    let createDescription = document.createElement('meta');
    buttonEventDescription.addEventListener('click',function(){
    createDescription.setAttribute('name','description');
    createDescription.setAttribute('content',insertDescription.value); 
    document.head.append(createDescription);
    if(insertDescription.value == 0){
    let contentDescription = document.createElement('p');
    contentDescription.innerText ='* אי אפשר להטמיע דסקריפשן ריק, אנא הוסיפו תוכן לשדה המבוקש.'
    document.body.append(contentDescription);
    contentDescription.style.color = 'red';
    contentDescription.style.fontWeight ='600';
    contentDescription.style.fontSize ='15px';
    }
})
}
setDesc();

function setCanonical(){
    let canonical= document.getElementsByTagName('input')[2];
    let buttonCanonical = document.getElementsByTagName('button')[2];
    let createCanonical = document.createElement('link');
    buttonCanonical.addEventListener('click',()=>{
        createCanonical.setAttribute('rel','canonical');
        createCanonical.setAttribute('content',canonical.value);
        document.head.append(createCanonical);
        if(canonical.value == 0){
            createCanonical.remove();
        }
    })
}
setCanonical()