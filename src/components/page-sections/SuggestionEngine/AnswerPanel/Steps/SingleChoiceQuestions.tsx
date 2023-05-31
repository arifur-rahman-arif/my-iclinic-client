import RadioButton2 from '@/components/Inputs/RadioButton/RadioButton2';
import { Context } from '@/page-sections/SuggestionEngine/Context';
import { useContext, useState } from 'react';

const SingleChoiceQuestions = () => {
    const ctx = useContext(Context);
    
    return (
        <div className="grid w-full content-start gap-6">
            {ctx.options.map((option, index) => (
                <RadioButton2
                    key={index}
                    id={`options-${index}`}
                    name="options"
                    value={option.label}
                    checked={option.active}
                    label={option.label}
                    onChange={() => {
                        ctx.setOptions((prevState) => {
                            return prevState.map((state, i) => {
                                return {
                                    ...state,
                                    active: index === i
                                };
                            });
                        });
                    }}
                />
            ))}
        </div>
    );
};

export default SingleChoiceQuestions;
