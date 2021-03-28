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
    
    mensagem = zoarTexto(mensagem)
    
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

var chat2 = document.querySelector('html.js.serviceworker.adownload.cssanimations.csstransitions.webp.webp-alpha.webp-animation.webp-lossless body.web.dark div#app div._3h3LX._34ybp.app-wrapper-web div._3QfZd.two div._1Flk2._1sFTb div#main._3AUV4 div._2wjK5 div._3wXwX.copyable-area div._1gL0z div._11liR')

var callback2 = (mutation, ob) => {
  tags = mutation[0].addedNodes;

	console.log(tags.length)
  
  for (tag of tags) {
    	
    var text = tag.innerText
    var updatetags = tag.innerText.split('\n')
    
    console.log(tag.innerText.split('\n'))
	
    console.log(updatetags.length)
    
		if(updatetags.length == 3){
      console.log("Enviou " + updatetags[updatetags.length -2 ])

		enviarMensagem(updatetags[updatetags.length -2 ])
    }
  }
}

obser = new MutationObserver(callback2);


obser.observe(chat2, {
  childList: true
})
