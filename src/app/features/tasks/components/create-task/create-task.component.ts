import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MdbDatepickerOptions } from "mdb-angular-ui-kit/datepicker";
import { minLengthWithoutSpacesValidator } from '../../../../shared/utilities/validators';
import { DATE_PICKER_SPANISH_OPTIONS } from "../../constants";

@Component({
  selector: "app-create-task",
  templateUrl: "./create-task.component.html",
  styleUrl: "./create-task.component.scss",
})
export class CreateTaskComponent {
  public isActionInprogress = false;
  public taskForm: FormGroup;
  public datePickerOption: MdbDatepickerOptions;
  
  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.datePickerOption = DATE_PICKER_SPANISH_OPTIONS
    this.initFormGroup();
  }

  private initFormGroup(): void {
    this.taskForm = this.formBuilder.group({
      name: ["", [Validators.required, minLengthWithoutSpacesValidator(1)]],
      deadLine: ["", [Validators.required]],
    });
  }

  public isControlInvalid(controlName: string): boolean {
    const control = this.taskForm.get(controlName);

    return control.invalid && (control.dirty || control.touched);
  }

  public goBackToProviderList(): void {
    this.router.navigate(["../"], { relativeTo: this.route });
  }

  protected submitTask(): void {}
}
