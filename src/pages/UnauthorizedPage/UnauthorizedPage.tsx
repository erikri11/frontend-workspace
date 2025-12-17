import './UnauthorizedPage.module.scss';
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export function UnauthorizedPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: 480,
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 50,
            mb: 2,
            border: (theme) => `2px solid ${theme.palette.error.main}`,
          }}
        >
          <LockOutlinedIcon color="error" sx={{ fontSize: 36 }} />
        </Box>

        <Typography variant="h4" component="h1" gutterBottom>
          Access Denied
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          Du har ikke rettigheter til å se denne siden.
          Ta kontakt med en administrator hvis du mener dette er en feil.
        </Typography>

        <Button
          variant="contained"
          onClick={() => navigate("/dashboard")}
          sx={{ mr: 1 }}
        >
          Gå til dashboard
        </Button>
        <Button variant="text" onClick={() => navigate(-1)}>
          Gå tilbake
        </Button>
      </Box>
    </Box>
  );
}

export default UnauthorizedPage;
