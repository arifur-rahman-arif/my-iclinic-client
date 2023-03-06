import { Button } from '@/components/Button';
import { useState } from 'react';
import { RxReset } from 'react-icons/rx';
import { FiSave } from 'react-icons/fi';
import EditField from './EditField';

export type EditorFieldType = {
    key: string;
    name: string;
    value: string;
};

interface EditorInterface {
    fields: EditorFieldType[];
}

/**
 * Editor component that can be attached to other components to update their data
 *
 * @returns {*}  {JSX.Element}
 */
const Editor = ({ fields }: EditorInterface): JSX.Element => {
    const [formValues, setFormValues] = useState<EditorFieldType[]>(fields);
    const [formReset, setFormReset] = useState<number>(Date.now());

    return (
        <div className="z-[999] grid gap-12 fixed top-2/4 -translate-y-2/4 left-4 shadow-shadow1 bg-white sm:min-w-[50rem] rounded-primary px-8 pl-10 py-12">
            {formValues.map((field, index) => (
                <EditField
                    key={index}
                    name={field.name}
                    value={field.value}
                    defaultValue={fields[index].value}
                    index={index}
                    setFormValues={setFormValues}
                    formReset={formReset}
                />
            ))}

            <div className="justify-self-center flex items-center justify-center gap-4">
                <Button
                    type="button"
                    className="!font-latoBold !uppercase !bg-transparent hover:!bg-brand"
                    text="Reset"
                    iconPosition="left"
                    icon={<RxReset className="w-8 h-8" />}
                    onClick={() => {
                        setFormValues(fields);
                        setFormReset(Date.now());
                    }}
                />
                <Button
                    type="button"
                    className="!font-latoBold !uppercase"
                    text="Save Changes"
                    iconPosition="left"
                    icon={<FiSave className="w-8 h-8" />}
                    onClick={() => {
                        console.log(formValues);
                    }}
                />
            </div>
        </div>
    );
};

export default Editor;
