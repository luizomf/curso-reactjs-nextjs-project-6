import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostGrid, PostGridProps } from '.';

import mock from './mock';

const props: PostGridProps = mock;

describe('<PostGrid />', () => {
  it('should not render posts', () => {
    renderTheme(<PostGrid {...props} posts={undefined} />);

    expect(screen.getByText(/Nenhum post/i)).toBeInTheDocument();
  });

  it('should render three posts', () => {
    const { container } = renderTheme(<PostGrid {...props} />);

    expect(screen.queryByText(/Nenhum post/i)).not.toBeInTheDocument();

    expect(screen.getAllByRole('heading')).toHaveLength(3);
    expect(screen.getAllByRole('img')).toHaveLength(3);
    expect(container.querySelectorAll('p')).toHaveLength(3);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<PostGrid {...props} />);
    expect(container).toMatchSnapshot();
  });
});
