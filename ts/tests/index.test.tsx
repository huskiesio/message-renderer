import 'jsdom-global/register';
import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MessageRenderer from '../';

Enzyme.configure({ adapter: new Adapter() });

describe("MessageRenderer", () => {
	test("adds images to preview", () => {
    const wrapper = mount(<MessageRenderer text="https://s3.amazonaws.com/keybase_processed_uploads/d24c7479498157f2cb81e185977dfd05_360_360.jpeg"/>);

    expect(wrapper.html()).toMatchSnapshot();
	});

  test("renders bold text", () => {
    const wrapper = mount(<MessageRenderer text="**Bold text**"/>);

    expect(wrapper.html()).toMatchSnapshot();
  });

  test("renders italic text", () => {
    const wrapper = mount(<MessageRenderer text="*Italic text*"/>);

    expect(wrapper.html()).toMatchSnapshot();
  });

  test("renders strikethrough text", () => {
    const wrapper = mount(<MessageRenderer text="~~Strikethrough text~~"/>);

    expect(wrapper.html()).toMatchSnapshot();
  });

  test("renders lists", () => {
    const listText = 'This is a list:\n\n- Item 1\n- Item 2';

    const wrapper = mount(<MessageRenderer text={listText}/>);

    expect(wrapper.html()).toMatchSnapshot();
  });

  test("highlights code", () => {
    const codeText = '```javascript\nconst hello = "world";\n```';

    const wrapper = mount(<MessageRenderer text={codeText}/>);

    expect(wrapper.html()).toMatchSnapshot();
  });

  test("renders math", () => {
    const mathText = '$\\sqrt{3}$';

    const wrapper = mount(<MessageRenderer text={mathText}/>);

    expect(wrapper.html()).toMatchSnapshot();
  });

  test("renders line breaks", () => {
    const text = 'hello\nworld';

    const wrapper = mount(<MessageRenderer text={text}/>);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
