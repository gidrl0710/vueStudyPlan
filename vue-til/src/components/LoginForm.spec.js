// import { sum } from './math';
// import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

// describe('sum Function', () => {
//   // 하나의 test를 검증하는 API
//   test('10 + 20 = 30', () => {
//     const result = sum(10, 20);
//     expect(result).toBe(30); // 기대값(30)
//   });
// });

// describe('LoginForm.vue', () => {
//   test('component mounting', () => {
//     // const instance = new Vue(LoginForm).$mount();
//     const wrapper = shallowMount(LoginForm);
//     expect(wrapper.vm.username).toBe('');
//   });
// });

describe('LoginForm.vue', () => {
  test('ID는 Email형식이어야 합니다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    const text = wrapper.find('.warning');
    console.log(text.html());
    expect(text.exists()).toBeTruthy();
  });

  test('ID와 PW가 입력되지 않으면 LOGIN 버튼이 비활성화 됩니다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: '',
          password: '',
        };
      },
    });
    const button = wrapper.find('button');
    expect(button.element.disabled).toBeTruthy();
  });
});
