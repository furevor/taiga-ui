import {TuiDecimal, tuiFormatNumber, TuiNumberFormatSettings} from '@taiga-ui/core';

export function tuiFormatFractionPart(options: {
    decimal: TuiDecimal;
    numberFormat: TuiNumberFormatSettings;
    precision: number;
    value: number;
}): string {
    const {value, decimal, numberFormat, precision} = options;
    const fraction = tuiFormatNumber(value, {
        ...numberFormat,
        decimalLimit: precision,
    }).split(numberFormat.decimalSeparator)[1];
    const shouldShow =
        decimal !== 'never' && (decimal === 'always' || !!parseInt(fraction, 10));

    return shouldShow ? `${numberFormat.decimalSeparator}${fraction}` : '';
}
