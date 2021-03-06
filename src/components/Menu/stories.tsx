import { Meta, Story } from '@storybook/react/types-6-0';
import { Menu, MenuProps } from '.';

import mock from './mock';

export default {
  title: 'Menu',
  component: Menu,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<MenuProps>;

export const Template: Story<MenuProps> = (args) => {
  return (
    <div style={{ maxWidth: '60rem', margin: '5rem auto', padding: '3.2rem' }}>
      <Menu {...args} />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper porta. Mauris massa.{' '}
        <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>.
        Vestibulum lacinia arcu eget nulla.{' '}
      </p>
      <br />
      <br />

      <p>
        <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim
        lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In
        scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.
        Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis
        vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula
        lacinia aliquet.{' '}
      </p>
      <br />
      <br />

      <p>
        Mauris ipsum. <b>Curabitur sodales ligula in libero</b>. Nulla metus
        metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque
        volutpat condimentum velit. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos.{' '}
        <b>Maecenas mattis</b>. Nam nec ante. Sed lacinia, urna non tincidunt
        mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis.
        Nulla facilisi. <b>Proin ut ligula vel nunc egestas porttitor</b>. Ut
        fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat
        imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.{' '}
      </p>
      <br />
      <br />

      <p>
        Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer
        euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor,
        sem massa mattis sem, at interdum magna augue eget diam.{' '}
        <b>Ut fringilla</b>. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui.
        Praesent blandit dolor.{' '}
        <i>Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa</i>
        . Sed non quam. In vel mi sit amet augue congue elementum. Morbi in
        ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec,
        blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus.
        Ut ultrices ultrices enim.{' '}
      </p>
      <br />
      <br />

      <p>
        Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper.{' '}
        <b>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Morbi lacinia molestie dui
        </b>
        . Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed
        aliquet risus a tortor.{' '}
        <b>Donec lacus nunc, viverra nec, blandit vel, egestas et, augue</b>.
        Integer id quam. Morbi mi.{' '}
        <b>Morbi in dui quis est pulvinar ullamcorper</b>. Quisque nisl felis,
        venenatis tristique, dignissim in, ultrices sit amet, augue. Proin
        sodales libero eget ante. Nulla quam. Aenean laoreet.{' '}
      </p>
      <br />
      <br />
    </div>
  );
};
