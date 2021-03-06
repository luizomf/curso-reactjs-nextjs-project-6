import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostCard, PostCardProps } from '.';

const props: PostCardProps = {
  title: 'any',
};

describe('<PostCard />', () => {
  it('should render', () => {
    renderTheme(<PostCard {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
