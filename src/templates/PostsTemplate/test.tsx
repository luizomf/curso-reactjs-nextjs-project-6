import { renderTheme } from '../../styles/render-theme';
import { PostsTemplate, PostsTemplateProps } from '.';

import mock from './mock';

const props: PostsTemplateProps = mock;

describe('<PostsTemplate />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<PostsTemplate {...props} />);

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot without posts', () => {
    const { container } = renderTheme(
      <PostsTemplate {...props} posts={undefined} />,
    );

    expect(container).toMatchSnapshot();
  });
});
