import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector:'app-form',
    templateUrl:'./angularForm.component.html',
    styleUrls:['./angularForm.component.css']
})

export class AngularFormComponent{
    
    rForm: FormGroup;
    post: any;
    description: string = '';
    name: string = '';

    constructor(private fb:FormBuilder){
        this.rForm = fb.group({
            'name':[null, Validators.required],
            'description':[null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(500)])],
            'validate': ''
        });
    }

    postData(post){
        this.description = post.description;
        this.name = post.name;
    }
}