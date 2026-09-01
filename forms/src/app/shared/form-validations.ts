import { FormArray } from "@angular/forms";
export class FormValidations{

  static requiredMinCheckbox(min = 1) {
      const validator = (formArray: FormArray) => {
        /*const totalChecked = formArray.controls;
        for (let i = 0; i < values.lenght; i++) {
          if (values[i].value) {
            totalChecked += 1;
          }
        }*/

          const totalChecked = formArray.controls
          .map(v => v.value)
          .reduce((total, current) => current ? total + current : total, 0);
        return totalChecked >= min ? null : { required: true};

      };
      return validator;
    }
}
