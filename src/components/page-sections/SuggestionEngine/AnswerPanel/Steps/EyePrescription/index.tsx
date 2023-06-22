import { unique } from 'next/dist/build/utils';
import { interval } from 'rxjs';
import Checkbox from 'src/components/Inputs/Checkbox';
import Select from 'src/components/page-sections/SuggestionEngine/AnswerPanel/Steps/EyePrescription/Select';
import styles from '../../styles/PanelReveal.module.scss';
import { Context } from '@/page-sections/SuggestionEngine/Context';
import { useContext, useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import Sphere from './Sphere';

interface EyePrescriptionProps {
    node: number;
}

type Eye = 'leftEye' | 'rightEye'

const EyePrescription = ({ node }: EyePrescriptionProps) => {
    const ctx = useContext(Context);
    
    const handleNavigationClick = (type: 'yes' | 'no') => {
        ctx.setCompletedStep((ctx.completedStep += 1));
        
        let nextNode;
        
        if (type === 'yes') {
            nextNode = ctx.routes[node].yesNode;
        } else {
            nextNode = ctx.routes[node].noNode;
        }
        
        if (!nextNode) return;
        
        ctx.setPreviousNode(node, nextNode);
        
        ctx.navigateToStep(nextNode);
    };
    
    const cylNumbers = (): number[] => {
        const numbers: number[] = [];
        
        for (let i = 0; i >= -10; i -= 0.25) {
            numbers.push(i);
        }
        
        return numbers;
    };
    
    const axisNumbers = (): number[] => {
        const numbers: number[] = [];
        
        for (let i = 0; i <= 180; i += 10) {
            numbers.push(i);
        }
        
        return numbers;
    };
    
    const ADDNumbers = (): number[] => {
        const numbers: number[] = [];
        
        for (let i = 0.75; i <= 3; i += 0.25) {
            numbers.push(i);
        }
        
        return numbers;
    };
    
    const handleSelect = (value: number, eye: Eye, type: 'cyl' | 'axis' | 'add') => {
        ctx.setEyePrescription((prevState) => {
            return {
                ...prevState,
                [type]: {
                    ...prevState[type],
                    [eye]: value
                }
            };
        });
    };
    
    useEffect(() => {
        if (!ctx.eyePrescription.unsure) return;
        
        setTimeout(() => {
            handleNavigationClick('no');
        }, 800);
    }, [ctx.eyePrescription.unsure]);
    
    return (
        <div
            className={`${styles.styles} grid h-full w-full place-items-center px-12 py-12 md:px-24 md:py-24 xl:px-40`}
        >
            <div className="grid w-full h-full place-items-center content-center gap-12 md:gap-24">
                <div className="grid max-w-[57.2rem] content-start gap-12 md:gap-24">
                    <Sphere/>
                    <div className="grid gap-8">
                        <Select label="CYL" onSelect={(...rest) => handleSelect(...rest, 'cyl')}
                                options={cylNumbers()}
                                leftValue={ctx.eyePrescription.cyl.leftEye}
                                rightValue={ctx.eyePrescription.cyl.rightEye}
                        />
                        <Select label="AXIS" onSelect={(...rest) => handleSelect(...rest, 'axis')}
                                options={axisNumbers()}
                                leftValue={ctx.eyePrescription.axis.leftEye}
                                rightValue={ctx.eyePrescription.axis.rightEye}
                        />
                        
                        <p className="text-white text-[1.6rem] leading-[2.4rem]">
                            Around 50% of glasses wearers have a slight deformation of eye lens. This is called
                            astigmatism.
                        </p>
                    </div>
                    
                    <div className="grid gap-8">
                        <Select label="ADD" onSelect={(...rest) => handleSelect(...rest, 'add')} options={ADDNumbers()}
                                leftValue={ctx.eyePrescription.add.leftEye}
                                rightValue={ctx.eyePrescription.add.rightEye}
                        />
                        
                        <p className="text-white text-[1.6rem] leading-[2.4rem]">
                            Lorem ipsum dolor sit amet consectetur. Vulputate suspendisse magna nulla nulla id a massa
                            etiam feugiat. Hendrerit placerat arcu convallis blandit.
                        </p>
                    </div>
                    
                    <Checkbox
                        label="I am unsure of my prescription"
                        onChange={() => ctx.setEyePrescription((prevState) => {
                            return {
                                ...prevState,
                                unsure: true
                            };
                        })}
                        value="unsure"
                        checked={ctx.eyePrescription.unsure}
                        id="unsurity"
                        name="unsurity"
                        labelClassName="text-white font-mulishBold"
                    />
                </div>
                
                <div className="flex w-full items-center justify-between gap-12 max-w-[57.2rem]">
                    <button
                        className="flex cursor-pointer items-center justify-start gap-6 font-mulishBold text-[1.4rem] capitalize leading-8 text-[#CDCFD0]"
                        onClick={() => {
                            ctx.navigateToStep(ctx.routes[node].prevNode as number);
                            ctx.setCompletedStep((ctx.completedStep -= 1));
                        }}
                    >
                        <BiArrowBack className="h-10 w-10 fill-[#C5CED2]"/>
                        Previous Question
                    </button>
                    
                    <button
                        className="justify-self-end rounded-primary border-2 border-heading2 bg-heading2 py-5 px-20 font-mulishBold text-[1.8rem] leading-[2.8rem] text-white transition-all duration-500 hover:border-white hover:bg-transparent"
                        onClick={() => handleNavigationClick('yes')}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EyePrescription;
