import styles from '../../styles/PanelReveal.module.scss';
import { Context } from '@/page-sections/SuggestionEngine/Context';
import { useContext } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import Sphere from './Sphere';

interface EyePrescriptionProps {
    node: number;
}

const EyePrescription = ({ node }: EyePrescriptionProps) => {
    const ctx = useContext(Context);
    
    const handleClick = () => {
        ctx.setCompletedStep((ctx.completedStep += 1));
        
        const nextNode = ctx.routes[node].nextNode;
        
        if (!nextNode) return;
        
        ctx.setPreviousNode(node, nextNode);
        
        ctx.navigateToStep(nextNode);
        
        // ctx.addQuestionToQueue({
        //     question: questionText,
        //     answer: getActiveOptions(),
        //     questionIndex: `${node}`
        // });
    };
    
    return (
        <div
            className={`${styles.styles} grid h-full w-full place-items-center px-12 py-12 md:px-24 md:py-24 xl:px-40`}
        >
            <div className="grid w-full h-full place-items-center content-center gap-12 md:gap-24">
                <div className="grid max-w-[57.2rem] content-start gap-12 md:gap-24">
                    <Sphere/>
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
                        onClick={handleClick}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EyePrescription;
