import { Meta, Story } from '@storybook/react/types-6-0';
import { PostGrid, PostGridProps } from '.';

export default {
  title: 'PostGrid',
  component: PostGrid,
} as Meta<PostGridProps>;

export const Template: Story<PostGridProps> = (args) => {
  return (
    <div>
      <PostGrid {...args} />
    </div>
  );
};
