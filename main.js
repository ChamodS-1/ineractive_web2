let removePara =document.getElementById('button1');
let blueVariable =document.getElementById('button2');
let blueParagraph =document.getElementById('blue-one');
let removePara1=document.getElementById('remove');
let newTopic =document.querySelector('input');
let mainTopic =document.querySelector('h2');



blueVariable.addEventListener('click',makeBlue);

function makeBlue(){

    blueParagraph.classList.add('blue-background');

}

removePara.addEventListener('click',removeParagraph);

function removeParagraph(){

    removePara1.remove();
    
}

newTopic.addEventListener('input',getTopic);

function getTopic(event){

    let newTopi1=event.target.value
    console.log(newTopi1);
    mainTopic.innerHTML=newTopi1;

}
