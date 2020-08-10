
const api = 'https://www.amiiboapi.com/api/'
var caixaProcura = document.querySelector('#caixaDeProcura')
var container1 = document.querySelector('.pContainer')
var container2 = document.querySelector('.resultadoContainer')

//botoes

const btn = document.querySelector('#procurarBtn')
const voltarHome = document.querySelector('#voltar')

//funcoes

voltarHome.addEventListener('click', function esconder(){
    container2.style.display = "none";
    container1.style.display = "inline";
    document.querySelector('.opcoes').style.display = "none";
    document.querySelector('#erroContainer').style.display = "none"
})

function mostrarErro() {
    container2.style.display = "none";
    container1.style.display = "none";
    document.querySelector('#erroContainer').style.display = "flex"
    document.querySelector('.opcoes').style.display = "flex";
}


btn.addEventListener('click', function amiiboS(){
    if(caixaProcura.value.length > 0){
    
            let character = caixaProcura.value
            document.querySelector(".opcoes").style.display = "flex"
            container1.style.display = "none"
            container2.style.display = "flex"
        
            fetch(`${api}amiibo/?name=${character}`)
            .then((response) =>{
                return response.json();
            })
            .then((data =>{
        
                container1.style.display = "none";
        
                //foto do amiibo
        
                let img = data.amiibo[0].image;
        
                document.querySelector('#img').setAttribute('src', img);
                
        
                //nome
        
                document.querySelector('#personagem').innerHTML = data.amiibo[0].character;
        
                //serie
        
                document.querySelector('#serie').innerHTML = data.amiibo[0].amiiboSeries;
        
                //gameseries
        
                document.querySelector('#gameseries').innerHTML = data.amiibo[0].gameSeries;
        
                //tipo
        
                document.querySelector('#tipo').innerHTML = data.amiibo[0].type;
        
                //voltar
        
            }))
            .catch((error =>{
                mostrarErro(error)
            }))
        }
        else{
            alert("Digite o nome do amiibo")
        }
    }
)



