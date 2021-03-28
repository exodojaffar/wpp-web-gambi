function zoarTexto(texto) {
    var new_texto = String();
    for (letter in texto){
        if(letter % 2 ==0){
            new_texto += texto[letter].toUpperCase()
        }else{
            new_texto += texto[letter]
        }
        
    }
    return new_texto;
}

function enviarMensagem(mensagem){
    chat = document.querySelector("._2x4bz > div:nth-child(2)");
    
//     mensagem = zoarTexto(mensagem)
    
var KeyboardEventInit = {
    bubbles: true
  }
    
    
    window.InputEvent = window.Event || window.InputEvent;

  var event = new InputEvent('input',KeyboardEventInit );       
    chat.textContent = mensagem;
    chat.dispatchEvent(event);
    
    button = document.querySelector("div.EBaI7:nth-child(3)");  
    button.firstChild.click()
}

// seleciona o nó alvo
var target = document.querySelector("html.js.serviceworker.adownload.cssanimations.csstransitions.webp.webp-alpha.webp-animation.webp-lossless body.web.dark div#app div._3h3LX._34ybp.app-wrapper-web div._3QfZd.two div._1Flk2._1sFTb div#main._3AUV4 header._1-qgF div._2uaUb div.YmixP.fKfSX span._7yrSq._3-8er.selectable-text.copyable-text");

// cria uma nova instância de observador
var observer = new MutationObserver(function(mutations) {
//   mutations.forEach(function(mutation) {
//     console.log(mutation.attributeName);
//   });
    tag  = mutations[0]
    update = tag.target.innerText
    console.log(update)
    
    if(update.includes("digita")){
        name = update.split(" ")[0]
        
        enviarMensagem(`${name} para de digitar 😡😡😡 `)
    }
   
	

});

// configuração do observador:
var config = {attributes: true };

// passar o nó alvo, bem como as opções de observação
observer.observe(target, config);
