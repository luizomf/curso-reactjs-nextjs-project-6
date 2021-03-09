import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ToggleTheme } from '.';

describe('<ToggleTheme />', () => {
  it('should render', () => {
    renderTheme(<ToggleTheme />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
