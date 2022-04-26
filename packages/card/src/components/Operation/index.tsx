import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext as AntConfigContext } from 'antd/lib/config-provider/context';

import './index.less';

export interface ProCardOperationProps {
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

  children?: any;
}

const ProCardOperation: React.FC<ProCardOperationProps> = (props) => {
  const { className, style = {}, children } = props;

  const { getPrefixCls } = useContext(AntConfigContext);
  const prefixCls = getPrefixCls('pro-card-operation');

  const classString = classNames(prefixCls, className);

  return (
    <div className={classString} style={style}>
      {children}
    </div>
  );
};

export default ProCardOperation;
