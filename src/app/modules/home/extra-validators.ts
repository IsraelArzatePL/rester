import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms'

export const isANumber = (): ValidatorFn =>
    (control: AbstractControl): ValidationErrors | null => {
        if (!isNaN(control.value) && control.value > 0) return null

        return { isANumber: true }
    }