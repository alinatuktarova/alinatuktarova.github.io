class Header{

    handlerOpenShoppingPage(){
        shoppingPage.render();
    }

    render(length){
        let l=length;
        if (length==-2) l=0; else l=l/2;
        const html=`
            <div class='header-container'>
                <img src='../images/icons/LOGO1.png' class='header-container__img'/>
                <div class='header-counter' onclick='headerPage.handlerOpenShoppingPage()'>
                    <img src='../images/icons/shop.png' class='header-counter__img'/>
                    <span class='header-counter__count'>(${l})</span>
                </div>
            </div>
        `;
        ROOT_HEADER.innerHTML=html;
    }
}
const headerPage = new Header();