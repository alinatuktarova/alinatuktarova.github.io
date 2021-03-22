class Shopping {

    handleClear(){
        ROOT_SHOPPING.innerHTML='';
    }

    render(){
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog='';
        let sumCatalog=0;
        let i=1;
        CATALOG.forEach(({id, company, name, price}) => {
            let size='';
            if (productsStore.indexOf(id)!==-1) {
                size=productsStore[i];
                htmlCatalog+=`
                    <tr>
                        <td class='shopping-element__company'>${company}</td>
                        <td class='shopping-element__name'>${name}</td>
                        <td class='shopping-element__size'>${size}</td>
                        <td class='shopping-element__price'>${price.toLocaleString()} р.</td>
                    </tr>
                `;
                sumCatalog+=price;
                i=i+2;
            }
        });
        const html = `
            <div class='shopping-container'>
            <img class='shopping__close' src='./../images/icons/cancel.png' onclick='shoppingPage.handleClear();'/>
                <table>
                    ${htmlCatalog}
                    <td class='shopping-element__company'>Сумма: </td>
                    <td></td>
                    <td></td>
                    <td class='shopping-element__sum'>${sumCatalog.toLocaleString()} р.</td>
                </table>
            </div>
        `;
        ROOT_SHOPPING.innerHTML=html;
    }
}

const shoppingPage = new Shopping();
