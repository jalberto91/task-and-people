import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function minLengthWithoutSpacesValidator(minLength: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value || "";
    const trimmedValue = value.replace(/\s+/g, "");
    if (trimmedValue.length < minLength) {
      return {
        minLengthWithoutSpaces: {
          requiredLength: minLength,
          actualLength: trimmedValue.length,
        },
      };
    }
    return null;
  };
}
