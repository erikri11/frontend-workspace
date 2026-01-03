import { Paper, Skeleton } from "@mui/material";

export function TaskCompletionChartSkeleton() {
  return (
    <Paper elevation={0}  sx={{ p: 2, mt: 2 }}>
      <Skeleton variant="text" width="25%" />
      <Skeleton variant="rectangular" height={240} />
    </Paper>
  );
}
