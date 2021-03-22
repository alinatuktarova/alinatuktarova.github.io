class Products{
    constructor(){
        this.classNameActive='small-productBox__button_active';
        this.labelAdd='Добавить в корзину';
        this.labelRemove='Удалить из корзины';
        this.Adidas='Adidas';
        this.Puma='Puma';
        this.NewBalance='New Balance';
    }

    renderAll(name_company){
        let htmlCatalog='';          
        CATALOG.forEach(({id, company, name,  img, price}) => {                      
            htmlCatalog +=`
                <li class='products-element' id='${id}' onclick='productsPage.renderQuickView(${id});' data-sort='${price}'>
                    <img src='${img}' class='products-element__img'/>
                    <div class='products-element__box'>
                        <span class='products-element__company'>${company}</span>
                        <span class='products-element__name'>${name}</span>
                        <span class='products-element__price'>${price.toLocaleString()} р.</span>
                    </div>
                </li>
            `;
         })
        const html=`
            <span class='products-text'>Все товары</span>
            <div class='products-buttons'>
                <button class='buChoise' onclick='productsPage.renderAll()'>Все товары</button>
                <button class='buChoise' onclick='productsPage.renderCompany("${this.Adidas}")'>Adidas</button>
                <button class='buChoise' onclick='productsPage.renderCompany("${this.Puma}")'>Puma</button>
                <button class='buChoise' onclick='productsPage.renderCompany("${this.NewBalance}")'>New Balance</button>
            </div>    
            <ul class='products-container' id='products-container'>
                ${htmlCatalog}    
            </ul>
        `;
        ROOT_PRODUCTS.innerHTML=html;
    }

    renderQuickView(id){
        const productsStore = localStorageUtil.getProducts();
        let a=id.id;
        CATALOG.forEach(({id, company, name, color, img, secondImg, thirdImg, fourthImg, price,  size})=>{
            if (a==id) {
                let activeClass='';
                let activeText='';
                if (productsStore.indexOf(id)==-1) {
                    activeText= this.labelAdd;
                } else {
                    activeText=this.labelRemove;
                    activeClass=' '+this.classNameActive;
                }
                ROOT_VIEW_PRODUCTS.innerHTML=`
                <div class='small-productBox'>
                    <img class='small-productBox__closeImg' src='./../images/icons/cancel.png' onclick='productsPage.closeView();'/>
                    <div class='small-productBox__img_container'>
                        <img class='small-productBox__img' src='${img}'/>
                        <div class='small-productBox__imgBox'>
                            <img class='small-productBox__secondImg' src='${secondImg}' onclick='productsPage.renderImgs("${secondImg}");'/>
                            <img class='small-productBox__thirdImg' src='${thirdImg}' onclick='productsPage.renderImgs("${thirdImg}");'/>
                            <img class='small-productBox__fourthImg' src='${fourthImg}' onclick='productsPage.renderImgs("${fourthImg}");'/>
                        </div>
                    </div>
                    <div class='small-productBox_text'>
                        <span class='small-productBox__company'>${company}</span>
                        <span class='small-productBox__name'>${name}</span>
                        <span class='small-productBox__color'>${color}</span>
                        <select class='small-product__select select_${id}'>
                        </select>
                        <span class='small-productBox__price'>${price.toLocaleString()} р.</span>
                        <button class='small-productBox__button${activeClass}' onclick='productsPage.handleSetLocationStorage(this, "${id}", productsPage.getValue("select_${id}"));'>
                            ${activeText}
                        </button>
                    </div>
                    </div>
                <div class='small-backBox'>

                </div>
            `;
            document.querySelector('.small-backBox').style.display='block';
                let htmlSelect='';
                for (let i=0;i<size.length;i++){
                    htmlSelect+=`<option value='${size[i]}'>${size[i]}</option>`
                }
                document.querySelector('.small-product__select').innerHTML=htmlSelect;
            }
        })
    }

    getValue(selectName){
        return document.querySelector(`.${selectName}`).value;
    }

    renderImgs(img){
        let a = document.querySelector('.small-productBox__img');
        a.setAttribute('src', img);
    }

    handleSetLocationStorage(element, id, value){
        const  { pushProduct, products } = localStorageUtil.putProducts(id, value);
        if (pushProduct){
            element.classList.add(this.classNameActive);
            element.innerHTML=this.labelRemove;
        } else{
            element.classList.remove(this.classNameActive);
            element.innerHTML=this.labelAdd;
        }
        headerPage.render(products.length);
    }

    closeView(){
        ROOT_VIEW_PRODUCTS.innerHTML='';
    }

    renderCompany(name_company){
        let htmlCatalog='';
        CATALOG.forEach(({id, company, name, img, price})=>{
            if (name_company==company){
                htmlCatalog +=`
                <li class='products-element' id='${id}' onclick='productsPage.renderQuickView(${id});' >
                    <img src='${img}' class='products-element__img'/>
                    <div class='products-element__box'>
                        <span class='products-element__company'>${company}</span>
                        <span class='products-element__name'>${name}</span>
                        <span class='products-element__price'>${price.toLocaleString()} р.</span>
                    </div>
                </li>
            `;
            }
            const html=`
            <span class='products-text'>Все товары</span>
                <div class='products-buttons'>
                    <button class='buChoise' onclick='productsPage.renderAll()'>Все товары</button>
                    <button class='buChoise' onclick='productsPage.renderCompany("${this.Adidas}")'>Adidas</button>
                    <button class='buChoise' onclick='productsPage.renderCompany("${this.Puma}")'>Puma</button>
                    <button class='buChoise' onclick='productsPage.renderCompany("${this.NewBalance}")'>New Balance</button>
                </div>
            <ul class='products-container' id='products-container'>
                ${htmlCatalog}    
            </ul>
        `;
        ROOT_PRODUCTS.innerHTML=html;
        })  
    }
}
const productsPage=new Products();



