import{r as t,c as s,h as i}from"./p-872db7dd.js";const l=class{constructor(i){t(this,i),this.clickButton=s(this,"clickButton",7)}clickButtonHandler(t){this.epyclass.includes("disabled")||(console.log("handler click"),this.clickButton.emit(t))}render(){return i("button",{class:this.epyclass,disabled:this.epyclass.includes("disabled"),onClick:t=>this.clickButtonHandler(t)},i("slot",null))}static get style(){return":host ::slotted(.left){margin-right:8px}:host ::slotted(.right){margin-left:8px}"}};export{l as epy_button};