import { Component, Input } from '@angular/core';
import { FormGroup , FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'card-header',
    templateUrl: './card-header.component.html'
})
export class CardHeaderComponent{

    @Input() country : any;
    @Input() details : any;

    form: FormGroup;
    isEditing: boolean;

    constructor(private fb: FormBuilder){ 
        this.form = fb.group({
            description : ['' , Validators.required]
        })
    }

    onEdit(){
        this.form.controls.description.setValue(this.details.description)
        this.isEditing = true;
    }

    onSave(description: any){
        this.isEditing = false;
        this.details.description = description;
    }


}