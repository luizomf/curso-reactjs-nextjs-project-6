import { Meta, Story } from '@storybook/react/types-6-0';
import { PostCard, PostCardProps } from '.';

import mock from './mock';

export default {
  title: 'PostCard',
  component: PostCard,
  args: mock,
} as Meta<PostCardProps>;

export const Template: Story<PostCardProps> = (args) => {
  return (
    <div style={{ maxWidth: '32rem' }}>
      <PostCard {...args} />
    </div>
  );
};
