import { Component, Input } from '@angular/core';
import { FormGroup , FormBuilder, Validators } from '@angular/forms';
import { CatalogsService } from '../../../../services/catalogs.service';

@Component({
    selector: 'card-header',
    templateUrl: './card-header.component.html'
})
export class CardHeaderComponent{

    @Input() country : any;
    @Input() details : any;

    form: FormGroup;
    isShowForm: boolean;
    isSaving: boolean;

    constructor(
        private catalogsService: CatalogsService,
        private fb: FormBuilder){ 
        this.form = fb.group({
            description : ['' , Validators.required]
        })
    }

    onEdit(){
        this.form.controls.description.setValue(this.details.description)
        this.isShowForm = true;
    }

    onSave(value: any){
        this.isSaving = true;
        this.catalogsService.updateNatalityDescription(value, this.country.id)
            .subscribe(response => {
                this.isShowForm = false;
                this.isSaving = false;
                this.details.description = value.description;
            })
    }


}