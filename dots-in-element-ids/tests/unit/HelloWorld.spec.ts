import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });

  it('renders essential links', () => {
    const wrapper = shallowMount(HelloWorld);

    // tslint:disable-next-line:no-unused-expression
    expect(wrapper.find('#hello.essential-links').exists()).to.be.true;
  });
});
