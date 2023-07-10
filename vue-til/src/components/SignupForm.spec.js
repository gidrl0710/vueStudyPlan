import { shallowMount } from '@vue/test-utils';
import SignupForm from './SignupForm.vue';

describe('SignupForm.vue', () => {
  test('ID와 PW가 입력되지 않으면 회원가입 버튼이 비활성화 됩니다.', () => {
    const wrapper02 = shallowMount(SignupForm, {
      data() {
        return {
          username: '',
          password: '',
        };
      },
    });
    const button02 = wrapper02.find('button');
    expect(button02.element.disabled).toBeTruthy();
  });
});
