import { TextField } from '@/components/Inputs';
import { Context } from '@/page-sections/SuggestionEngine/Context';
import { formatPhoneNumber, validateEmail, validatePhoneNumber } from '@/utils/miscellaneous';
import Image from 'next/image';
import { ChangeEvent, useContext, useState } from 'react';

interface CtaFormProps {
    node: number;
}

/**
 * A component representing a form for capturing user information.
 *
 * @returns {JSX.Element}
 * @constructor
 */
const CtaForm = ({ node }: CtaFormProps): JSX.Element => {
    const ctx = useContext(Context);
    
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [typingTimer, setTypingTimer] = useState<any>();
    
    const [nameError, setNameError] = useState<string>('');
    const [phoneError, setPhoneError] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    
    /**
     * Validate the input fields of the form
     *
     * @returns {*}  {Promise<boolean>}
     */
    const showInputErrors = async (): Promise<boolean> => {
        if (!name) {
            setNameError('Please provide your name');
            return false;
        }
        if (!phone) {
            setPhoneError('Please provide your phone');
            return false;
        }
        
        const numberValid = await validatePhoneNumber(phone);
        
        if (!numberValid) {
            setPhoneError('Please provide a valid phone number');
            return false;
        }
        
        if (!email) {
            setEmailError('Please provide your email');
            return false;
        }
        if (!validateEmail(email)) {
            setEmailError('Please provide a valid email address');
            return false;
        }
        
        return true;
    };
    
    /**
     * Reset the form to its initial state
     */
    // const resetForm = () => {
    //     setName('');
    //     setEmail('');
    //     setPhone('');
    // };
    
    
    /**
     * Submit the form
     * @returns {Promise<any>}
     */
    const formSubmit = async (): Promise<any> => {
        // const formError = await showInputErrors();
        
        // if (formError) return;
        
        ctx.setCompletedStep(ctx.completedStep += 1);
        const nextNode = ctx.routes[node].nextNode;
        
        if (!nextNode) return;
        
        ctx.navigateToStep(nextNode);
        
        // const payload = {
        //     name,
        //     phone,
        //     email
        // };
    };
    
    
    /**
     * Handle the phone input for onchange event
     *
     * @param {ChangeEvent<HTMLInputElement>} e
     */
    const handlePhoneInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value as string;
        setPhone(value);
        clearTimeout(typingTimer);
        
        const timeoutID = setTimeout(() => {
            formatPhoneNumber(value).then((res) => {
                setPhone(res);
            });
        }, 1000);
        
        setTypingTimer(timeoutID);
    };
    
    
    return (
        <form className="w-full grid grid-rows-[6rem_6rem_6rem_auto] justify-self-center gap-16 max-w-[40rem]"
              onSubmit={(e) => {
                  e.preventDefault();
                  formSubmit();
              }}>
            <TextField
                value={name}
                type="text"
                placeholder="Your Name"
                important
                onChange={(e) => setName(e.target.value)}
                onClearValue={() => setName('')}
                errorText={nameError}
            />
            
            <TextField
                value={phone}
                type="text"
                placeholder="Phone number"
                important
                onChange={handlePhoneInput}
                onClearValue={() => {
                }}
                errorText={phoneError}
            />
            
            <TextField
                value={email}
                type="text"
                placeholder="Email"
                important
                onChange={(e) => setEmail(e.target.value)}
                onClearValue={() => setEmail('')}
                errorText={emailError}
            />
            
            <button
                type="submit"
                className="rounded-primary border-2 border-heading2 bg-heading2 py-5 px-20 font-mulishBold text-[1.8rem] leading-[2.8rem] text-white transition-all duration-500 hover:border-white hover:bg-transparent flex items-center justify-center gap-6">
                Send
                <Image src="/images/icons/icon-send-white.svg" alt="" width={24} height={24} />
            </button>
        </form>
    );
};

export default CtaForm;
