class Spinner{

    handleClear(){
        ROOT_SPINNER.innerHTML='';
    }

    render(){
        let html='';
        html=`
        <div class='spinner-container'>
            <img class='spinner__img' src='../images/E.svg'>
        </div>
        `;
        ROOT_SPINNER.innerHTML=html;
    };
}

const spinnerPage = new Spinner();
