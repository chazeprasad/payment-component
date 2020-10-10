import React, { FC } from 'react';
import { UITableTextItem } from './UITableTextItem';
import { UITableNumberItem } from './UITableNumberItem';
import { UITableDateItem } from './UITableDateItem';
import { UITableStatusFlagItem } from './UITableStatusFlagItem';
import { TableField } from '../ui-table-config';
import { UITableMethodItem } from './UITableMethodItem';
import { UITableCurrencyItem } from './UITableCurrencyItem';

interface IProps {
    data: any;
    type: string;
}

export const UITableCellRenderer: FC<IProps> = ({ data, type }) => {
    let Renderer;
    switch (type) {
        case TableField.STRING:
            Renderer = <UITableTextItem text={data} />;
            break;

        case TableField.NUMBER:
            Renderer = <UITableNumberItem text={data} />;
            break;

        case TableField.CURRENCY:
            Renderer = <UITableCurrencyItem text={data} />;
            break;

        case TableField.DATE:
            Renderer = <UITableDateItem text={data} />;
            break;

        case TableField.STATUS_FLAG:
            Renderer = <UITableStatusFlagItem text={data} />;
            break;

        case TableField.TRANSACTION_METHOD:
            Renderer = <UITableMethodItem text={data} />;
            break;

        default:
            Renderer = <span />;
            break;
    }

    return Renderer;
};
