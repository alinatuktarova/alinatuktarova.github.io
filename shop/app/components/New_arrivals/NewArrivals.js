class NewArrivals{

    render(){
        let htmlItems='';
        CATALOG.forEach(({company, name,  img, arrivals, price}) => {
        if (arrivals==='new arrivals') {
            htmlItems+=`
            <a href="#products">
                <div class=' arrivalsContainer' onclick="productsPage.renderAll()">
                    <img src='${img}' class='products-element__img arrivalsItems__img'/>
                    <div class='arrivalsItems__box'>
                        <span class='products-element__company'>${company}</span>
                        <span class='products-element__name'>${name}</span>
                        <span class='products-element__price'>${price.toLocaleString()} р.</span>
                    
                    </div>
                </div>
            </a>
        `;       
    }
        const html=`
            <span class='arrivals-text'>НОВОЕ ПОСТУПЛЕНИЕ</span>
            <div class='arrivals-container'>
                ${htmlItems}
            </div>
        `;
        ROOT_NEW_ARRIVALS.innerHTML=html;
    })
    }
}

const newArrivals = new NewArrivals();
// newArrivals.render();