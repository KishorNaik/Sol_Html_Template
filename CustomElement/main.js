

let movieTemplate=Symbol("movieTemplate");
class demoCustomElement extends HTMLElement{

    constructor(){
        super();

        this.innerHTML=this[movieTemplate]();
    }

    // Private Method

    [movieTemplate](){

        return `

            <div>
                <h2>${this.name}</h2>
                <p>${this.details}</p>
            </div>
        `;
    }
    
    // Public Property
    set name(value){
        this.setAttribute("name",value);
    }

    get name(){
        return this.getAttribute("name");
    }

    set details(value){
         this.setAttribute("details",value);
    }

    get details(){
        return this.getAttribute("details");
    }

    // Public Method
    connectedCallback() {
        console.log('Element inserted in DOM');
    }
    
    disconnectedCallback() {
        console.log('Element removed from DOM');
    }

}


window.customElements.define('movie-card', demoCustomElement);