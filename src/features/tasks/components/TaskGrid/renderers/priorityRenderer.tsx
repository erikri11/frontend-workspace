import { t } from "i18next";
import { ICellRendererParams } from "ag-grid-community";
import { Chip } from "@mui/material";
import { Priority, PRIORITY_COLOR } from "@features/tasks/models/priority";
import { ITask } from "@features/tasks/models/task";
import { getTaskPriorityLabel } from "@features/tasks/utils/getTaskPriorityLabel";

export const priorityRenderer = (params: ICellRendererParams<ITask, Priority>) => {
    const pv = params.value;
    if (!pv) return null;

    return (
      <Chip
        label={getTaskPriorityLabel(t, pv)}
        size="small"
        variant="outlined"
        color={PRIORITY_COLOR[pv]}
      />
    );
  };
  