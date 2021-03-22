class Block{

    render(){
        const html=`
        <div class="block-video">
                <video class="block-video__video" src="video/originals.mp4" type="video/mp4" autoplay muted loop ></video>
                <span class="block-video__text">Посмотри новинки этого сезона</span>
                <a href="#products">
                    <button id="block-video__button" onclick="productsPage.renderAll()" > 
                        <span class="block-video__textBu">К покупкам</span>
                    </button>
                </a>
            </div>
            <div class="block-picture">
                <span class="block-picture__text">adidas x puma x new balance</span>
                <img class="block-picture__img" src="./images/pictures/png1.jfif" alt="">
            </div>
        </div>
        `;
        ROOT_BLOCK.innerHTML=html;
    }
}
const block = new Block();
