import React from 'react';
import { mount, shallow } from 'enzyme';

function Fixture() {
  return (
    <div>
      <input id='checked' defaultChecked />
      <input id='not' defaultChecked={false} />
      <input id='tertiary' defaultChecked checked={false} />
    </div>
  );
}

const wrapper = mount(<Fixture />); // mount/render/shallow when applicable

expect(wrapper.find('#checked')).toBeChecked();
expect(wrapper.find('#not')).not.toBeChecked();
