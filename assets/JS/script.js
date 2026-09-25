const imgsDestaque = [
    "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/01/analog-horror.jpg",
    "https://avatars.mds.yandex.net/i?id=0faeb43e73f2b684bef289b3c455a42087b7e77e-4012652-images-thumbs&n=13",
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop"
];

let imagemAtual = 0;
const imagem = document.querySelector("#imagem-destaque");

if (imagem) {
    setInterval(function () {
        imagemAtual++;
        if (imagemAtual >= imgsDestaque.length) {
            imagemAtual = 0;
        }
        imagem.src = imgsDestaque[imagemAtual];
    }, 5000);
}