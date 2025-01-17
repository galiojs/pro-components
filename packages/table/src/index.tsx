import type { IntlType } from '@galiojs/pro-provider';
import {
  ConfigProviderWrap,
  ConfigProvider,
  ConfigConsumer,
  createIntl,
  arEGIntl,
  zhCNIntl,
  enUSIntl,
  viVNIntl,
  itITIntl,
  jaJPIntl,
  esESIntl,
  caESIntl,
  ruRUIntl,
  msMYIntl,
  zhTWIntl,
  frFRIntl,
  ptBRIntl,
} from '@galiojs/pro-provider';
import type { ProFieldValueType, RowEditableConfig } from '@galiojs/pro-utils';

import { FieldStatus, FieldIndexColumn } from '@galiojs/pro-field';
import ProTable from './Table';
import TableDropdown from './components/Dropdown';
import type { ListToolBarProps } from './components/ListToolBar';
import ListToolBar from './components/ListToolBar';

import Search from './components/Form';
import cellRenderToFromItem from './utils/cellRenderToFromItem';
import type { ColumnsState } from './container';
import type { ActionType, ProColumns, ProColumnType, ProTableProps, RequestData } from './typing';
import type { EditableFormInstance } from './components/EditableTable';
import EditableProTable from './components/EditableTable';
import type { DragTableProps } from './components/DragSortTable';
import DragSortTable from './components/DragSortTable';

type ProColumnsValueType = ProFieldValueType;
type TableRowEditable<T> = RowEditableConfig<T>;

export type {
  ProTableProps,
  IntlType,
  ActionType,
  EditableFormInstance,
  TableRowEditable,
  ColumnsState,
  ProColumnsValueType,
  ProColumns,
  ProColumnType,
  RequestData,
  ListToolBarProps,
  DragTableProps,
};

export {
  ConfigProviderWrap,
  TableDropdown,
  ListToolBar,
  FieldStatus as TableStatus,
  Search,
  EditableProTable,
  DragSortTable,
  ConfigProvider as IntlProvider,
  ConfigProvider,
  ConfigConsumer as IntlConsumer,
  ConfigConsumer,
  zhCNIntl,
  FieldIndexColumn as IndexColumn,
  cellRenderToFromItem as defaultRenderText,
  createIntl,
  arEGIntl,
  enUSIntl,
  viVNIntl,
  itITIntl,
  jaJPIntl,
  esESIntl,
  caESIntl,
  ruRUIntl,
  msMYIntl,
  zhTWIntl,
  frFRIntl,
  ptBRIntl,
};

export default ProTable;
