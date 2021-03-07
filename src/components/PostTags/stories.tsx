import { Meta, Story } from '@storybook/react/types-6-0';
import { PostTags, PostTagsProps } from '.';

import mock from './mock';

export default {
  title: 'PostTags',
  component: PostTags,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<PostTagsProps>;

export const Template: Story<PostTagsProps> = (args) => {
  return (
    <div style={{ padding: '0 2.4rem' }}>
      <PostTags {...args} />
    </div>
  );
};

export const NoTags: Story<PostTagsProps> = (args) => {
  return (
    <div style={{ padding: '0 2.4rem' }}>
      <PostTags {...args} tags={undefined} />
    </div>
  );
};
