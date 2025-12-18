import { render } from '@testing-library/react';

import LanguageToggle from './LanguageToggle';

describe('LanguageToggle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LanguageToggle />);
    expect(baseElement).toBeTruthy();
  });
});
