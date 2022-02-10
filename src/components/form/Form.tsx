/* 
https://codesandbox.io/s/react-hook-form-with-ui-library-ts-forked-qjgkx?file=/src/index.tsx
https://react-hook-form.com/api/useform/formstate
*/

import { IForm } from './form_types';

export function Form({ children, handleSubmit }: IForm) {
  const onSubmit = (e: unknown) => {
    console.log(e);
  };

  return <form onSubmit={handleSubmit(onSubmit)}>{children}</form>;
}
