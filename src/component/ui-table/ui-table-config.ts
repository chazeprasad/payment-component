export const FONT_REGULAR = 'ProximaNovaRegular';
export const FONT_SEMIBOLD = 'ProximaNovaSemiBold';

export const FONT_WEIGHT_400 = 400;
export const FONT_WEIGHT_500 = 500;
export const FONT_WEIGHT_600 = 600;

export const TableFlag = {
    SUCCEEDED: 'succeeded',
    FAILED: 'failed',
    CANCELED: 'canceled',
    DISPUTED: 'disputed',
};

export const TableField = {
    CURRENCY: 'currency',
    NUMBER: 'number',
    STRING: 'string',
    DATE: 'date',
    STATUS_FLAG: 'status-flag',
    TRANSACTION_METHOD: 'transaction-method',
};

export const UITableConfig = {
    TITLE_TEXT_COLOR: '#000000',
    TITLE_FONT_SIZE: 22,
    TITLE_FONT_FAMILY: FONT_SEMIBOLD,
    TITLE_FONT_WEIGHT: FONT_WEIGHT_600,

    HEADER_TEXT_COLOR: '#1A1A1A',
    HEADER_FONT_SIZE: 16,
    HEADER_FONT_FAMILY: FONT_REGULAR,
    HEADER_FONT_WEIGHT: FONT_WEIGHT_600,
    HEADER_SORT_ICON_NORMAL_COLOR: '#BFBFBF',
    HEADER_SORT_ICON_SELECTED_COLOR: '#1791ff',
    HEADER_SORT_ICON_SPACING: 3,
    HEADER_SORT_ICON_WIDTH: 8,
    HEADER_SORT_ICON_HEIGHT: 5,
    HEADER_SPACING: 7,

    RECORD_TEXT_COLOR: '#434343',
    RECORD_FONT_SIZE: 14,
    RECORD_FONT_FAMILY: FONT_REGULAR,
    RECORD_FONT_WEIGHT: FONT_WEIGHT_400,
    RECORD_LINE_HEIGHT: 38,
};

export interface ITableConfig {
    headerName: string;
    field: string;
    type: string;
}
