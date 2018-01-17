import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


//Tutorial Link
//https://www.youtube.com/watch?v=bo1Wu0aiigU

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
    titleAlert:string = 'This field is required';   

    constructor(private fb:FormBuilder){
        this.rForm = fb.group({
            'name' : [null, Validators.required],
            'description' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
            'validate' : ''
        });
    }
    
    postData(post){
        this.description = post.description;
        this.name = post.name;
    }

    ngOnInit() {       
        this.rForm.get('validate').valueChanges.subscribe(
            (validate) => {
                if (validate == '1'){
                    this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
                    this.titleAlert = 'You need to specify atleast 3 characters';
                }
                else{
                    this.rForm.get('name').setValidators(Validators.required);
                }
                this.rForm.get('name').updateValueAndValidity();
            }
        )
    }
}

