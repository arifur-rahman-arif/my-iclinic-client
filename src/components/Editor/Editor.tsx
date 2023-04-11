import { Button } from 'src/components/Buttons';
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
        <div className="fixed top-2/4 left-4 z-[999] grid -translate-y-2/4 gap-12 rounded-primary bg-white px-8 py-12 pl-10 shadow-shadow1 sm:min-w-[50rem]">
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

            <div className="flex items-center justify-center gap-4 justify-self-center">
                <Button
                    type="button"
                    className="!bg-transparent !font-latoBold !uppercase hover:!bg-brand"
                    text="Reset"
                    iconPosition="left"
                    icon={<RxReset className="h-8 w-8" />}
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
                    icon={<FiSave className="h-8 w-8" />}
                    onClick={() => {
                        console.log(formValues);
                    }}
                />
            </div>
        </div>
    );
};

export default Editor;
