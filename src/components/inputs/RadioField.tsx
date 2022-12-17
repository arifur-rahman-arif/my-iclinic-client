import {
    ForwardRefExoticComponent,
    ChangeEvent,
    ForwardedRef,
    forwardRef,
    PropsWithoutRef,
    RefAttributes
} from 'react';

import Radio from '@mui/material/Radio';

interface RadioFieldInterface {
    checked: boolean;
    name: string;
    value: string;
    id: string;
    areaLabel?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    // [x: string]: any;
}

/**
 * Radio input of the website
 *
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<RadioFieldInterface> & React.RefAttributes<unknown>>}
 */
const RadioField: ForwardRefExoticComponent<PropsWithoutRef<RadioFieldInterface> & RefAttributes<unknown>> = forwardRef(
    (
        { checked, name, value, id, onChange, areaLabel, ...others }: RadioFieldInterface,
        ref: ForwardedRef<any>
    ): JSX.Element => {
        return (
            <Radio
                checked={checked || false}
                value={value || ''}
                name={name}
                inputProps={{ 'aria-label': areaLabel || '', id }}
                onChange={onChange}
                {...others}
                sx={{
                    'svg[data-testid="RadioButtonUncheckedIcon"]': {
                        fontSize: '2.4rem',
                        fill: 'var(--color-brand)'
                    },
                    'svg[data-testid="RadioButtonCheckedIcon"]': {
                        width: '100%',
                        height: '100%',
                        fill: 'var(--color-brand)'
                    }
                }}
            />
        );
    }
);

export default RadioField;
