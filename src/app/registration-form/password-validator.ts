import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordValidator(control: AbstractControl): ValidationErrors | null{
    const password = control.get('password');
    const confpassword = control.get('confpassword');
    if(password?.pristine || confpassword?.pristine){
        return null;
    }
    return password && confpassword && password.value !== confpassword.value ? {'misMatch':true} : null;
}