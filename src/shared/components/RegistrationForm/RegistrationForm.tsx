import './RegistrationForm.module.scss';
import { useState } from 'react';
import { Box, Stack, TextField, Button } from '@mui/material';

export interface RegistrationFormValues {
  email: string;
  password: string;
}

export interface RegistrationFormProps {
  onSubmit?: (values: RegistrationFormValues) => void;
}

export function RegistrationForm({ onSubmit }: RegistrationFormProps) {
  const [values, setValues] = useState<RegistrationFormValues>({
    email: '',
    password: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(values);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 320 }}
    >
      <Stack spacing={2}>
        <TextField
          id="email-input"
          name="email"
          type="email"
          label="email"              
          value={values.email}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          id="password-input"
          name="password"
          type="password"
          label="password"          
          value={values.password}
          onChange={handleChange}
          fullWidth
        />

        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Stack>
    </Box>
  );
}

export default RegistrationForm;
