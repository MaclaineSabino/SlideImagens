
let cont = 0;
let opacidade = 5;

function transitarImagem(){
 
  var img = document.getElementById("slider_mac");
  var files = ["1.png","2.png","3.png","4.png","5.png"];

  setTimeout(function(){
    cont++;
    if(cont<files.length){
      img.src='fotos/'+files[cont];
      carregarImagem(img);
      transitarImagem();
    }else{
      cont=0;
      img.src='fotos/'+files[cont];
      carregarImagem(img);
      transitarImagem();
    }
  

  },5000)


  }

  function carregarImagem(imagem){
   
    imagem.style.opacity=+opacidade+'%';

    setTimeout(function(){
      opacidade=opacidade+5;
      if(opacidade<100){
        carregarImagem(imagem);
      }else{
        opacidade=5;
      }


    },50)


  }




transitarImagem();

