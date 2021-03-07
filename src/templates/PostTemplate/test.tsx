import { renderTheme } from '../../styles/render-theme';
import { PostTemplate, PostTemplateProps } from '.';

import mock from './mock';

const props: PostTemplateProps = mock;

describe('<PostTemplate />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<PostTemplate {...props} />);

    expect(container).toMatchSnapshot();
  });
});
