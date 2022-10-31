import { TableAliasProxyHandler } from 'drizzle-orm/alias';
import { BuildAliasTable } from './queries/select.types';

import { AnySQLiteTable } from './table';

export function alias<TTable extends AnySQLiteTable, TAlias extends string>(
	table: TTable,
	alias: TAlias,
): BuildAliasTable<TTable, TAlias> {
	return new Proxy(table, new TableAliasProxyHandler(alias)) as any;
}