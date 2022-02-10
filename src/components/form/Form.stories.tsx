import { ComponentMeta } from '@storybook/react';
import { Form } from './Form';
import { FormTest } from './FormTest';
import { ReactHookForm } from './ReactHookForm';

export default {
  title: `Components/Form`,
  component: Form,
} as ComponentMeta<typeof Form>;

// const Template: ComponentStory<typeof Form> = () => {
//   // const { control, handleSubmit, getValue } = useFormHooks(formOption);

//   const onSubmit = (data: unknown, isValid: boolean) => {
//     console.log('submit');
//   };

//   return (
//     <>
//       <Form
//         onSubmit={onSubmit}
//         option={formOption}
//         render={(control) => (
//           <>
//             <FormItem
//               option={formOption[0]}
//               control={control}
//               // onItemState={(e: any) => console.log(e)}
//               render={({ value, onChange }: IFormField) => (
//                 <Input value={value} onChange={onChange} />
//               )}
//             />

//             <FormItem
//               option={formOption[1]}
//               control={control}
//               // onItemState={(e: any) => console.log(e)}
//               render={({ value, onChange }: IFormField) => (
//                 <Input value={value} onChange={onChange} />
//               )}
//             />
//             <button type="submit" onClick={() => null} />
//           </>
//         )}
//       />
//     </>
//   );
// };

// export const Default = Template.bind({});
// Default.args = {};

export const UseHook = () => <FormTest />;

export const Default = () => <ReactHookForm />;
