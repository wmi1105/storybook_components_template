import styled from "@emotion/styled";
import { Control, useFieldArray, useForm, useWatch } from "react-hook-form";
import { FormItem } from "../form copy/FormItem";
import { IControlValues } from "../form copy/form_types";
import { formArrayOption } from "./FormArray.data";

const defaultValues = {
  firstName: "",
  cart: [
    { name: "test", quantity: "1", price: "11" },
    { name: "", quantity: "2", price: "12" },
  ],
};

export function FormArray() {
  const { register, control, handleSubmit, formState, watch, getValues } =
    useForm({
      defaultValues: defaultValues,
      mode: "onBlur",
    });

  const { fields, append, remove } = useFieldArray({
    name: "cart",
    control,
  });

  console.log("fields", fields);
  const onSubmit = (data: IControlValues) => console.log(data);

  return (
    <FormArrayStyled>
      <form onSubmit={handleSubmit(onSubmit)}>
        <button type="submit">submit</button>
        {/* <FormItem
          option={formArrayOption[0]}
          control={control}
          render={(field) => (
            <input value={field.value} onChange={field.onChange} />
          )}
        /> */}

        {fields.map((field, index) => {
          return (
            <FormArrayItem key={field.id}>
              <input
                placeholder="name"
                {...register(`cart.${index}.name` as const, { required: true })}
                defaultValue={field.name}
              />
              <input
                placeholder="quantity"
                {...register(`cart.${index}.quantity` as const, {
                  required: true,
                  valueAsNumber: true,
                })}
                defaultValue={field.quantity}
              />
              <input
                placeholder="price"
                {...register(`cart.${index}.price` as const, {
                  required: true,
                  valueAsNumber: true,
                })}
                defaultValue={field.price}
              />
              <button type="button" onClick={() => remove(index)}>
                remove
              </button>
            </FormArrayItem>
          );
        })}
        <button
          type="button"
          onClick={() => append({ name: "", quantity: "0", price: "0" })}
        >
          append
        </button>
      </form>
    </FormArrayStyled>
  );
}

const FormArrayStyled = styled.div``;
const FormArrayItem = styled.div`
  padding: 5px 0;
  background: antiquewhite;
  display: flex;
  justify-content: space-around;
`;

// useForm
//     FormItem    전달사항
//     FormItem    처방전
//     useFieldArray   자료정보 전달
//         FormItem    url
//         FormItem    url
//         FormItem    url
//         FormItem    url
//     FormItem    금액
//     FormItem    기타재증명
