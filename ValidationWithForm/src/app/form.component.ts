import { Component, OnInit } from "@angular/core";
import { NgForm, NgModel } from "@angular/forms";
import { Address, Person } from "./person.model";
import { PersonService } from "./person.service";

@Component({
    selector: "app",
    templateUrl: "form.component.html",
    styleUrls: ["form.component.css"]
})

export class FormComponent implements OnInit {
    
    public adres: Address = new Address();
    public newPerson: Person = new Person();

    constructor(private personService: PersonService) { }

    ngOnInit() { }

    get jsonPerson() {
        return JSON.stringify(this.newPerson) 
    }

    get jsonAdres() {
        return JSON.stringify(this.adres)
    }

    log(m: NgModel) {
        console.log(m);
    }

    formLog(m: NgForm) {
        console.log(m);
    }

    setErrors(state: NgModel | any, name: string) {
        let messages: string[] = [];

        if (state.errors) {
            for(let errorName in state.errors) {
                switch (errorName) {
                    case "required":
                        messages.push(`You must enter a ${name}`)
                        break;
                }
            }
        }

        return messages;

    }

    getFormErrors(form: NgForm, name: string) {

        let messages: string[] = []

        this.setErrors(form.controls['name'], name)
            .forEach(error => {
                error
            })

        return messages; 
        
    }

}