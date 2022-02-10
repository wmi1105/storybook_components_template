import { IFormOption } from './form_types';

export const formOption: IFormOption[] = [
  {
    name: 'text1',
    defaultValue: '',
    isRequired: true,
    rules: { validate: (value) => value === 'test' },
    message: {
      success: '맞음',
      error: {
        required: 'this is required',
        validate: 'fail match validate',
      },
    },
  },
  {
    name: 'text2',
    defaultValue: '',
    isRequired: true,
    rules: { maxLength: 10 },
    message: {
      success: '맞음',
      error: { required: 'this is required' },
    },
  },
];
