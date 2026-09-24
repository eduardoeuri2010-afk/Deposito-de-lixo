const imgsDestaque = [
    "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/01/analog-horror.jpg",
    "https://tse2.mm.bing.net/th/id/OIP.vdCE6bMX7hmTHi-PD56EdQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://sm.ign.com/t/ign_br/video/t/top-25-wii/top-25-wii-u-games-spring-2015_fze4.1200.jpg"
]

let imagemAtual= 1;

const imagem = document.querySelector("#imagem-destaque")

setInterval(function (){
    imagemAtual++;
    if(imagemAtual >= imgsDestaque.length){
        imagemAtual = 0
    }        

    imagem.src = imgsDestaque[imagemAtual]

}, 5000)
