$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function video_in(classe, filme){
    video_out();
    let container = document.querySelector(classe);
    let divVideo = document.createElement("video");
    divVideo.setAttribute("autoplay","");
    divVideo.setAttribute("width","720");divVideo.setAttribute("loop","");
    divVideo.setAttribute("preload","metadata");
    let sourceElement = document.createElement("source");
    sourceElement.setAttribute("src","video/"+filme+".mp4");sourceElement.setAttribute("type","video/mp4");
    divVideo.insertAdjacentElement("afterbegin",sourceElement);
    divVideo.classList.add("video");
    container.insertAdjacentElement("beforeend",divVideo);
    divVideo.classList.toggle("show");    
}

function video_out(){
    let container = document.querySelector('div .video');
    if (container !== null) {
        container.remove();        
    }
    /* container[0].innerHTML = "";
    container[0].style.visibility = "invisible"; */
}