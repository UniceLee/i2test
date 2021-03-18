import { LightningElement, api } from 'lwc';

export default class Challenge_currentDateTime extends LightningElement {

    @api currentDateTime;

    constructor(){
        super();

        this.currentDateTime = Date.now();

    }
    
    refresh(){
       connectedCallback();
    }

    connectedCallback(){
        setInterval(() => {
             this.currentDateTime = Date.now();
         }, 1000);
     };
    
}