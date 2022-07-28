import React from 'react';
import { cleanup, render } from '@testing-library/react';

import Index from '../pages/index';

afterEach(cleanup);

describe('Index', () => {
  it('Says Hello Saks-Digital', () => {
    const { queryByText } = render(<Index />);
    expect(queryByText('Hello Saks-Digital!')).toBeTruthy();
  });
});
