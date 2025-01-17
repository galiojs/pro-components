import React, { useContext } from 'react';
import { ConfigContext as AntConfigContext } from 'antd/lib/config-provider/context';
import classNames from 'classnames';

import './index.less';

export type ProCardDividerProps = {
  /**
   * 样式
   *
   * @ignore
   */
  style?: React.CSSProperties;
  /**
   * ClassName
   *
   * @ignore
   */
  className?: string;
  /**
   * 布局类型
   *
   * @default vertical
   */
  type?: 'horizontal' | 'vertical';
};

const ProCardDivider: React.FC<ProCardDividerProps> = (props) => {
  const { getPrefixCls } = useContext(AntConfigContext);
  const prefixCls = getPrefixCls('pro-card-divider');

  const { className, style = {}, type } = props;

  const classString = classNames(prefixCls, className, {
    [`${prefixCls}-${type}`]: type,
  });

  return <div className={classString} style={style} />;
};

export default ProCardDivider;
