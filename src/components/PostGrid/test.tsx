import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostGrid, PostGridProps } from '.';

const props: PostGridProps = {
  title: 'any',
};

describe('<PostGrid />', () => {
  it('should render', () => {
    renderTheme(<PostGrid {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
