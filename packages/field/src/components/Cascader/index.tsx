﻿import React, { useContext, useMemo, useImperativeHandle, useRef } from 'react';
import type { RadioGroupProps } from 'antd';
import { Cascader } from 'antd';
import { ConfigContext as AntConfigContext } from 'antd/lib/config-provider/context';
import { LoadingOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import type { ProFieldFC } from '../../index';
import type { FieldSelectProps } from '../Select';
import { ObjToMap, proFieldParsingText, useFieldFetchData } from '../Select';
import { useIntl } from '@galiojs/pro-provider';

export type GroupProps = {
  options?: RadioGroupProps['options'];
  radioType?: 'button' | 'radio';
} & FieldSelectProps;

/**
 * 级联选择组件
 *
 * @param param0
 * @param ref
 */
const FieldCascader: ProFieldFC<GroupProps> = (
  { radioType, renderFormItem, mode, render, light, ...rest },
  ref,
) => {
  const { getPrefixCls } = useContext(AntConfigContext);
  const layoutClassName = getPrefixCls('pro-field-cascader');
  const coreStyleClassName = getPrefixCls('pro-core-field-label');
  const [loading, options, fetchData] = useFieldFetchData(rest);
  const intl = useIntl();
  const cascaderRef = useRef();

  useImperativeHandle(ref, () => ({
    ...(cascaderRef.current || {}),
    fetchData: () => fetchData(),
  }));

  const optionsValueEnum = useMemo(() => {
    if (mode !== 'read') return;
    /**
     * Support cascader fieldNames
     *
     * @see https://ant.design/components/cascader-cn/#header
     */
    const {
      value: valuePropsName = 'value',
      label: labelPropsName = 'label',
      children: childrenPropsName = 'children',
    } = rest.fieldProps?.fieldNames || {};

    const valuesMap = new Map();

    const traverseOptions = (_options: typeof options) => {
      if (!_options?.length) {
        return valuesMap;
      }

      const length = _options.length;
      let i = 0;
      while (i < length) {
        const cur = _options[i++];
        valuesMap.set(cur[valuePropsName], cur[labelPropsName]);
        traverseOptions(cur[childrenPropsName]);
      }
      return valuesMap;
    };

    return traverseOptions(options);
  }, [mode, options, rest.fieldProps?.fieldNames]);

  if (mode === 'read') {
    const dom = <>{proFieldParsingText(rest.text, ObjToMap(rest.valueEnum || optionsValueEnum))}</>;

    if (render) {
      return render(rest.text, { mode, ...rest.fieldProps }, dom) || null;
    }
    return dom;
  }

  if (mode === 'edit') {
    const dom = (
      <Cascader
        bordered={!light}
        ref={cascaderRef}
        suffixIcon={loading ? <LoadingOutlined /> : undefined}
        placeholder={intl.getMessage('tableForm.selectPlaceholder', '请选择')}
        {...rest.fieldProps}
        className={classNames(rest.fieldProps?.className, layoutClassName, {
          [`${coreStyleClassName}-active`]: rest?.fieldProps?.value && light,
        })}
        options={options}
      />
    );

    if (renderFormItem) {
      return renderFormItem(rest.text, { mode, ...rest.fieldProps }, dom) || null;
    }
    return dom;
  }

  return null;
};

export default React.forwardRef(FieldCascader);
