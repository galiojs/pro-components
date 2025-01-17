import React, { useContext } from 'react';
import type { ProCardTabPaneProps } from '../../type';
import { Tabs } from 'antd';
import { ConfigContext as AntConfigContext } from 'antd/lib/config-provider/context';
import classNames from 'classnames';
import Card from '../Card';
import './index.less';

const TabPane: React.FC<ProCardTabPaneProps> = (props) => {
  const {
    key,
    tab,
    tabKey,
    disabled,
    destroyInactiveTabPane,
    children,
    className,
    style,
    cardProps,
    ...rest
  } = props;
  const { getPrefixCls } = useContext(AntConfigContext);
  const prefixCls = getPrefixCls('pro-card-tabpane');
  const tabPaneClassName = classNames(prefixCls, className);
  return (
    <Tabs.TabPane
      key={key}
      tabKey={tabKey}
      tab={tab}
      className={tabPaneClassName}
      style={style}
      disabled={disabled}
      destroyInactiveTabPane={destroyInactiveTabPane}
      {...rest}
    >
      <Card {...cardProps}>{children}</Card>
    </Tabs.TabPane>
  );
};

export default TabPane;
