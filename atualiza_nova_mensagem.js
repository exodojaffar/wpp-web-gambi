
var chat2 = document.querySelector('html.js.serviceworker.adownload.cssanimations.csstransitions.webp.webp-alpha.webp-animation.webp-lossless body.web.dark div#app div._3h3LX._34ybp.app-wrapper-web div._3QfZd.two div._1Flk2._1sFTb div#main._3AUV4 div._2wjK5 div._3wXwX.copyable-area div._1gL0z div._11liR')

var callback2 = (mutation, ob) => {
  tags = mutation[0].addedNodes;

	console.log(tags.length)
  
  for (tag of tags) {
    	
    var text = tag.innerText
    var updatetags = tag.innerText.split('\n')
    
    console.log(tag.innerText.split('\n'))

		if(updatetags.length >= 3){
      enviarMensagem(text)
    }
  }
}

obser = new MutationObserver(callback2);


obser.observe(chat2, {
  childList: true
})
