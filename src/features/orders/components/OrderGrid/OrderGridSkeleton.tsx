import { Paper, Skeleton, Stack } from "@mui/material";

export function OrderGridSkeleton() {
  return (
    <Paper elevation={0} sx={{ p: 2 }}>
      <Stack spacing={1.5}>
        <Skeleton variant="rectangular" height={48} />
        <Skeleton variant="rectangular" height={300} />
      </Stack>
    </Paper>
  );
}
