import { LightningElement, api, track } from 'lwc';

export default class Challenge_currentDateTime extends LightningElement {

    @api currentDateTime;
    @track bool=false;

    constructor(){
        super();

        this.currentDateTime = Date.now();

    }
    
    refresh(){
        console.log(this.currentDateTime);
        return this.bool = true;
    }

    
    
    connectedCallback(){
        //if(this.bool){
            console.log("test");
            setInterval(() => {
                this.currentDateTime = Date.now();
            }, 1000);
        //}
   }
    
    
    
}