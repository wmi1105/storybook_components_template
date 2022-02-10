import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { createElement, useEffect, useMemo } from 'react';
import { useController } from 'react-hook-form';
import { IFormItem, RENDER_STATE } from './form_types';

export function FormItem({ name, option, control, onItemState, render, displayMsg }: IFormItem) {
  console.log('option', option);
  const { field, fieldState, formState } = useController({
    name: option.name,
    rules: { ...option.rules, required: option.isRequired },
    control,
  });

  const { onChange, onBlur, value, ref } = field;
  const { invalid, isTouched, isDirty, error } = fieldState;
  const { submitCount } = formState; //submit일 때 1, 아닐 때 0

  // 입력 안했을떄
  // 입력 + error / 입력 + 성공
  const renderState = !isDirty
    ? RENDER_STATE.DEFAULT
    : !error
    ? RENDER_STATE.SUCCESS
    : RENDER_STATE.ERROR;

  useEffect(() => {
    if (onItemState && submitCount > 0)
      onItemState({
        name: option.name,
        state: isDirty && !error ? true : false,
        value: field.value,
      });
  }, [field.value, isDirty, error, submitCount]);

  const child = render({ ...field, ...fieldState, renderState });

  const errorMsg = useMemo(() => {
    if (!error || !option.message.error) return null;
    const errorType = error.type;

    return errorType ? option.message.error[errorType] : null;
  }, [error]);

  return (
    <FormItemStyled>
      {child}
      <div>
        {displayMsg && (
          <>
            {submitCount > 0 && (
              <>
                {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
                {!error && <SucMessage>{option.message.success}</SucMessage>}
              </>
            )}
            {option.message.default && <DefaultMessage>{option.message.default}</DefaultMessage>}
          </>
        )}
      </div>
    </FormItemStyled>
  );
}

FormItem.defaultProps = {
  name: '',
  displayMsg: true,
};

const FormItemStyled = styled.div`
  > div {
    min-height: 20px;
  }
`;

const ErrorMessage = styled.span`
  color: #e00;
`;
const SucMessage = styled.span`
  color: #0ee;
`;

const DefaultMessage = styled.span``;
