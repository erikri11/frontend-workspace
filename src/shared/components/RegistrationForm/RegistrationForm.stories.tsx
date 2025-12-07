// RegistrationForm.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from 'storybook/test';

import { RegistrationForm } from './RegistrationForm';

const meta = {
  title: 'Forms/RegistrationForm',
  component: RegistrationForm,
} satisfies Meta<typeof RegistrationForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const emailInput = canvas.getByLabelText('email', {
      selector: 'input',
    });
    await userEvent.type(emailInput, 'example-email@email.com', {
      delay: 100,
    });

    const passwordInput = canvas.getByLabelText('password', {
      selector: 'input',
    });
    await userEvent.type(passwordInput, 'ExamplePassword', {
      delay: 100,
    });

    const submitButton = canvas.getByRole('button');
    await userEvent.click(submitButton);
  },
};
