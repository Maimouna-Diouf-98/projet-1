

document.getElementById('bouton').addEventListener('click', ()=>{
    let a = Number(document.getElementById('nombre1').value);
    let b = Number(document.getElementById('nombre2').value);
    
    if(Number.isInteger(a,b)){
        let somme = parseInt(a + b);
        document.getElementById('somme').value = somme;
        console.log( typeof a, typeof b,somme);

    }
    else{
        alert('entrez un nombre entier')
    }
})





