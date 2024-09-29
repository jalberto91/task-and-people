import { Component } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  MdbChipAddEvent
} from "mdb-angular-ui-kit/chips";
import { REQUIRED_VALIDATION } from "../../../../shared/constants";
import { minLengthWithoutSpacesValidator } from '../../../../shared/utilities/validators';
import { SKILL_REQUIRED_MESSAGE } from "../../constants";

@Component({
  selector: "app-people",
  templateUrl: "./people.component.html",
  styleUrl: "./people.component.scss",
})
export class PeopleComponent {
  public peopleForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.initFormGroup();
  }

  private initFormGroup(): void {
    this.peopleForm = this.formBuilder.group({
      age: ["", [Validators.required, Validators.min(18)]],
      fullName: ["", [Validators.required, minLengthWithoutSpacesValidator(5)]],
      skills: this.formBuilder.array([], [Validators.required]),
    });
  }

  public isControlInvalid(controlName: string): boolean {
    const control = this.peopleForm.get(controlName);

    return control.invalid && (control.dirty || control.touched);
  }

  get skills(): FormArray {
    return this.peopleForm.get("skills") as FormArray;
  }

  public getErrorSkillField(): string {
    if (this.isControlInvalid("skills")) {
      const skillsField = this.peopleForm.get("skills") as FormArray;

      if (skillsField.hasError(REQUIRED_VALIDATION)) {
        return SKILL_REQUIRED_MESSAGE;
      }
    }

    return "";
  }

  public addSkill(event: MdbChipAddEvent): void {
    const url = event.value.trim();
    if (url && !this.skills.value.includes(url)) {
      this.skills.push(this.formBuilder.control(url));
    }
    event.input.clear();
  }

  public deleteSkill(index: number): void {
    this.skills.removeAt(index);
  }

  public markControlAsTouched(controlName: string): void {
    this.peopleForm.get(controlName).markAsTouched();
  }
}
