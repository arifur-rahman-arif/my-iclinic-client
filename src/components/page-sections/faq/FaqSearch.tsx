import Image from 'next/image';
import TextField from '@/components/inputs/TextField';
import { useState } from 'react';

interface FaqSearchInterface {
    filterFaq: (arg: string) => void;
}

/**
 * Search form for faq items
 *
 * @param {FaqSearchInterface} { filterFaq }
 * @returns {*}  {JSX.Element}
 */
const FaqSearch = ({ filterFaq }: FaqSearchInterface): JSX.Element => {
    const [value, setValue] = useState<string>('');

    return (
        <div className="relative mx-auto mt-[3.8rem] h-[6.4rem] w-full max-w-[44rem]">
            <TextField
                value={value}
                type="text"
                id="faq-search"
                placeholder="I'm looking for..."
                icon={
                    <Image
                        src="/images/icons/icon-search-outline.svg"
                        alt=""
                        width={24}
                        height={24}
                        quality={20}
                        className="h-[2.4rem] w-[2.4rem]"
                    />
                }
                onChange={(e) => {
                    setValue(e.target.value);
                    filterFaq(e.target.value || '');
                }}
                onClearValue={() => {
                    setValue('');
                    filterFaq('');
                }}
            />
        </div>
    );
};

export default FaqSearch;
