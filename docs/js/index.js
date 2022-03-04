const api = async() =>{
    try{
        const response = await fetch('https://api.adviceslip.com/advice');
        const data     = await response.json();
        let   advice = data.slip;
        document.getElementById('advice-number').textContent = `advice #${advice.id}`;
        document.getElementById('advice').textContent = `"${advice.advice}"`;
    }catch(err){
        console.log(err);
    }
}

document.getElementById('main').addEventListener('click',e =>{
    if(e.target.tagName == 'FIGURE' && e.target.classList.contains('icon-conteiner')){     
        const child = e.target.childNodes[1];
        child.style = 'transition: transform .7s linear; transform: rotate(360deg)';
        setTimeout(()=>{
            child.style = 'transition: none; transform: rotate(0);';        
        },700);
        api();
    }
});