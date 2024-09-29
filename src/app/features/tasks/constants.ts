import { MdbDatepickerOptions } from "mdb-angular-ui-kit/datepicker";
import { TaskStatusOption } from '../../shared/models/task-status-option.model';
import { TaskStatus } from '../../shared/models/task.model';

export const SKILL_REQUIRED_MESSAGE = "Debe insertar al menos una habilidad";

export const DATE_PICKER_SPANISH_OPTIONS: MdbDatepickerOptions = {
    monthsFull: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    monthsShort: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ],
    weekdaysFull: [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ],
    weekdaysShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
    weekdaysNarrow: ["D", "L", "M", "M", "J", "V", "S"],
    okBtnText: "Aceptar",
    clearBtnText: "Limpiar",
    cancelBtnText: "Cancelar",
  };

  export const TASK_STATUS_OPTIONS: TaskStatusOption[] = [
    { value: TaskStatus.All, label: "Todas" },
    { value: TaskStatus.Pending, label: "Pendiente" },
    { value: TaskStatus.Finished, label: "Finalizada" },
  ];