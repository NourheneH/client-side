import { FormGroup } from '@angular/forms';

export function matchingPassword(passwordkey: string, confirmkey: string) {
    return (group: FormGroup): { [key: string]: any } => {
        let passwordInput = group.controls[passwordkey];
        let confirmInput = group.controls[confirmkey];
        if (passwordInput.value !== confirmInput.value) {
            return {
                matchingPassword: true
            };
        }
    }
}

export function emailValidator(email: string): boolean {
    var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!EMAIL_REGEXP.test(email)) {
        return false;
    }
    return true;
}