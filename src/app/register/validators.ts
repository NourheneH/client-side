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
