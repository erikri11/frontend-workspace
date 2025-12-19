import { SnackbarMessage } from "@shared/types/snackbar";
import { createContext, Dispatch, SetStateAction } from "react";

export interface SnackbarContextProps {
  snackbarMessage: SnackbarMessage | undefined,
  setSnackbarMessage: Dispatch<SetStateAction<SnackbarMessage | undefined>>;
}

export const SnackbarContext = createContext<SnackbarContextProps>({
  snackbarMessage: undefined,
  setSnackbarMessage: (message) => {
    console.log("Setting snackbar message:", message);
  }
});
