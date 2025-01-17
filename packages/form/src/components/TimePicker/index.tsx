import React, { useContext } from 'react';
import ProField from '../Field';
import type { ProFormFieldItemProps } from '../../interface';
import { dateArrayFormatter } from '@galiojs/pro-utils';
import FieldContext from '../../FieldContext';
import type { DatePickerProps, RangePickerProps } from 'antd/lib/date-picker';

const valueType = 'time' as const;

/** 时间区间选择器 */
const TimeRangePicker: React.FC<ProFormFieldItemProps<RangePickerProps>> = React.forwardRef(
  ({ fieldProps, proFieldProps, ...rest }, ref: any) => {
    const context = useContext(FieldContext);
    return (
      <ProField
        ref={ref}
        mode="edit"
        fieldProps={{ getPopupContainer: context.getPopupContainer, ...fieldProps }}
        valueType="timeRange"
        proFieldProps={proFieldProps}
        filedConfig={
          {
            valueType: 'timeRange',
            lightFilterLabelFormatter: (value) => dateArrayFormatter(value, 'HH:mm:SS'),
          } as const
        }
        {...rest}
      />
    );
  },
);

/**
 * 时间选择组件
 *
 * @param
 */
const ProFormTimePicker: React.FC<ProFormFieldItemProps<DatePickerProps>> = ({
  fieldProps,
  proFieldProps,
  ...rest
}) => {
  const context = useContext(FieldContext);
  return (
    <ProField
      mode="edit"
      fieldProps={{ getPopupContainer: context.getPopupContainer, ...fieldProps }}
      valueType={valueType}
      proFieldProps={proFieldProps}
      filedConfig={
        {
          customLightMode: true,
          valueType,
        } as const
      }
      {...rest}
    />
  );
};

const WrappedProFormTimePicker: typeof ProFormTimePicker & {
  RangePicker: typeof TimeRangePicker;
} = ProFormTimePicker as any;

WrappedProFormTimePicker.RangePicker = TimeRangePicker;

export default WrappedProFormTimePicker;
