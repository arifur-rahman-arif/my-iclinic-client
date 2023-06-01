import ChatWithUs from '@/page-sections/SectionParts/ChatWithUs';
import { Context } from '@/page-sections/SuggestionEngine/Context';
import { useContext, useEffect } from 'react';
import styles from './styles/PanelReveal.module.scss';

interface CtaScreenProps {
    description?: string;
}

const CtaScreen = ({ description }: CtaScreenProps) => {
    const ctx = useContext(Context);
    
    useEffect(() => {
        ctx.setCompletedStep(ctx.completedStep += 1);
    }, []);
    
    return (
        <div className={`${styles.styles} grid h-full w-full place-items-center px-12 md:px-24 xl:px-40`}>
            <div className="grid h-full place-items-start content-center gap-12 md:gap-24">
                <span className="md:leading-[4rem] font-latoBold text-white md:text-[3.6rem] max-w-[40rem]">
                    Chat to an expert now to see how we can help
                </span>
                
                {description && <p className="text-white">{description}</p>}
                
                <ChatWithUs className="!bg-heading2 hover:!bg-white" text="Talk to a specialist"/>
            </div>
        </div>
    );
};

export default CtaScreen;
