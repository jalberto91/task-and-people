import { Component } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MdbChipAddEvent } from "mdb-angular-ui-kit/chips";
import { MdbDatepickerOptions } from "mdb-angular-ui-kit/datepicker";
import { REQUIRED_VALIDATION } from "../../../shared/constants";
import { minLengthWithoutSpacesValidator } from "../../../shared/utilities/validators";
import {
  DATE_PICKER_SPANISH_OPTIONS,
  SKILL_REQUIRED_MESSAGE,
} from "../constants";
import { TaskService } from "../services/task.service";

@Component({
  selector: "app-create-task",
  templateUrl: "./create-task.component.html",
  styleUrls: ["./create-task.component.scss"],
})
export class CreateTaskComponent {
  public isActionInprogress = false;
  public taskForm: FormGroup;
  public datePickerOption: MdbDatepickerOptions;
  public pastDates = new Date(new Date().setHours(0, 0, 0, 0));

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private taskService: TaskService
  ) {
    this.datePickerOption = DATE_PICKER_SPANISH_OPTIONS;
    this.initFormGroup();
  }

  private initFormGroup(): void {
    this.taskForm = this.formBuilder.group({
      name: ["", [Validators.required, minLengthWithoutSpacesValidator(1)]],
      deadLine: ["", [Validators.required]],
      persons: this.formBuilder.array(
        [],
        [Validators.required, this.minLengthArray(1), this.uniqueNameValidator]
      ),
    });
  }

  public isControlInvalid(controlName: string): boolean {
    const control = this.taskForm.get(controlName);
    return control.invalid && (control.dirty || control.touched);
  }

  get persons(): FormArray {
    return this.taskForm.get("persons") as FormArray;
  }

  public getSkills(personIndex: number): FormArray {
    return this.persons.at(personIndex).get("skills") as FormArray;
  }

  public addPerson(): void {
    this.persons.push(this.createPersonFormGroup());
  }

  public deletePerson(index: number): void {
    this.persons.removeAt(index);
  }

  private createPersonFormGroup(): FormGroup {
    return this.formBuilder.group({
      age: ["", [Validators.required, Validators.min(19)]],
      fullName: ["", [Validators.required, minLengthWithoutSpacesValidator(5)]],
      skills: this.formBuilder.array([], [Validators.required]),
    });
  }

  private minLengthArray(min: number) {
    return (control: FormArray) => {
      return control.length >= min ? null : { minLengthArray: true };
    };
  }

  public getErrorSkillField(personIndex: number): string {
    const skillsField = this.persons.at(personIndex).get("skills") as FormArray;
    if (skillsField.hasError(REQUIRED_VALIDATION)) {
      return SKILL_REQUIRED_MESSAGE;
    }
    return "";
  }

  public addSkill(event: MdbChipAddEvent, personIndex: number): void {
    const url = event.value.trim();
    const skills = this.persons.at(personIndex).get("skills") as FormArray;
    if (url && !skills.value.includes(url)) {
      skills.push(this.formBuilder.control(url));
    }
    event.input.clear();
  }

  public deleteSkill(personIndex: number, skillIndex: number): void {
    const skills = this.persons.at(personIndex).get("skills") as FormArray;
    skills.removeAt(skillIndex);
  }

  public markControlAsTouched(controlName: string, personIndex: number): void {
    this.persons.at(personIndex).get(controlName).markAsTouched();
  }

  public goBackToProviderList(): void {
    this.router.navigate(["../"], { relativeTo: this.route });
  }

  private uniqueNameValidator(formArray: FormArray) {
    const names = formArray.controls.map((control) =>
      control.get("fullName").value?.toLowerCase()
    );
    const duplicates = names.filter(
      (name, index) => names.indexOf(name) !== index
    );

    if (duplicates.length > 0) {
      return { nonUniqueName: true };
    }

    return null;
  }

  public submitTask(): void {
    if (this.taskForm.valid) {
      this.taskService.createTask(this.taskForm.value);
      this.goBackToProviderList();
    }
  }
}
