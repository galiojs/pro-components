import React, { useContext } from 'react';
import { Alert, Space } from 'antd';
import { ConfigContext as AntConfigContext } from 'antd/lib/config-provider/context';
import './index.less';
import type { IntlType } from '@galiojs/pro-provider';
import { useIntl } from '@galiojs/pro-provider';

export type AlertRenderType<T> =
  | ((props: {
      intl: IntlType;
      selectedRowKeys: (number | string)[];
      selectedRows: T[];
      onCleanSelected: () => void;
    }) => React.ReactNode)
  | false;

export type TableAlertProps<T> = {
  selectedRowKeys: (number | string)[];
  selectedRows: T[];
  alwaysShowAlert?: boolean;
  alertInfoRender?: AlertRenderType<T>;
  onCleanSelected: () => void;
  alertOptionRender?: AlertRenderType<T>;
};

const defaultAlertOptionRender = (props: { intl: IntlType; onCleanSelected: () => void }) => {
  const { intl, onCleanSelected } = props;
  return [
    <a onClick={onCleanSelected} key="0">
      {intl.getMessage('alert.clear', '清空')}
    </a>,
  ];
};

function TableAlert<T>({
  selectedRowKeys = [],
  onCleanSelected,
  alwaysShowAlert,
  selectedRows,
  alertInfoRender = ({ intl }) => (
    <Space>
      {intl.getMessage('alert.selected', '已选择')}
      {selectedRowKeys.length}
      {intl.getMessage('alert.item', '项')}&nbsp;&nbsp;
    </Space>
  ),
  alertOptionRender = defaultAlertOptionRender,
}: TableAlertProps<T>) {
  const intl = useIntl();

  const option =
    alertOptionRender &&
    alertOptionRender({
      onCleanSelected,
      selectedRowKeys,
      selectedRows,
      intl,
    });

  const { getPrefixCls } = useContext(AntConfigContext);
  const className = getPrefixCls('pro-table-alert');
  if (alertInfoRender === false) {
    return null;
  }
  const dom = alertInfoRender({ intl, selectedRowKeys, selectedRows, onCleanSelected });

  if (dom === false || (selectedRowKeys.length < 1 && !alwaysShowAlert)) {
    return null;
  }
  return (
    <div className={className}>
      <Alert
        message={
          <div className={`${className}-info`}>
            <div className={`${className}-info-content`}>{dom}</div>
            {option ? <div className={`${className}-info-option`}>{option}</div> : null}
          </div>
        }
        type="info"
      />
    </div>
  );
}

export default TableAlert;
