import { Meta, Story } from '@storybook/react/types-6-0';
import { PostsTemplate, PostsTemplateProps } from '.';

import mock from './mock';

export default {
  title: 'PostsTemplate',
  component: PostsTemplate,
  args: mock,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: '',
    },
  },
} as Meta<PostsTemplateProps>;

export const Template: Story<PostsTemplateProps> = (args) => {
  return (
    <div>
      <PostsTemplate {...args} />
    </div>
  );
};
