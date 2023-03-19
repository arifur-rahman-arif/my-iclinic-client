import { Button } from '@/components/Button';
import { TextField } from '@/components/Inputs';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { RxReset } from 'react-icons/rx';
import { EditorFieldType } from './Editor';

interface EditFieldInterface {
    name: string;
    value: string;
    defaultValue: string;
    setFormValues: Dispatch<SetStateAction<EditorFieldType[]>>;
    index: number;
    formReset: number;
}

// eslint-disable-next-line valid-jsdoc
/**
 * Editor field component
 *
 * @param index {number} name
 * @param {string} name
 * @param {string | undefined} fieldValue
 * @param {(value: (((prevState: EditorFieldType[]) => EditorFieldType[]) | EditorFieldType[])) => void} setFormValues
 * @returns {JSX.Element}
 * @constructor
 */
const EditField = ({ index, name, value, defaultValue, setFormValues, formReset }: EditFieldInterface): JSX.Element => {
    const [animateInput, setAnimateInput] = useState<number>(Date.now());

    useEffect(() => {
        setAnimateInput(formReset);
    }, [formReset]);

    /**
     * Update the form value buy it's index
     *
     * @param {string} data
     */
    const updateFormValue = (data: string) => {
        setFormValues((currentValues) => {
            return currentValues.map((field, dataIndex) => {
                if (dataIndex === index) {
                    return { ...field, value: data };
                }
                return field;
            });
        });
    };

    /**
     * Clear the value of the field
     */
    const clearValue = () => {
        setFormValues((currentValues) => {
            return currentValues.map((field, dataIndex) => {
                if (dataIndex === index) {
                    return { ...field, value: '' };
                }
                return field;
            });
        });
    };

    return (
        <div className="grid grid-cols-[1fr_auto] gap-6">
            <TextField
                value={value}
                type="textarea"
                placeholder={name}
                onChange={(e) => updateFormValue(e.target.value)}
                onClearValue={clearValue}
                rows={2}
                animateInputField={animateInput}
            />
            <Button
                type="button"
                className="!h-auto !w-auto self-center rounded-full !bg-transparent !p-2 !font-latoBold !uppercase hover:!bg-brand"
                text={<RxReset className="h-8 w-8" />}
                onClick={() => {
                    updateFormValue(defaultValue);
                    setAnimateInput(Date.now());
                }}
                title="Reset the field"
            />
        </div>
    );
};
export default EditField;
