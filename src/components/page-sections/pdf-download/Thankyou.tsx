import * as animationData from '@/lottie/check.lottie.json';

import { Button } from '@/components/button';
import Image from 'next/image';
import Lottie from 'react-lottie';

/**
 * Thank you component
 *
 * @returns {*}  {JSX.Element}
 */
const Thankyou = (): JSX.Element => {
    return (
        <div className="mx-auto grid w-full max-w-[45rem] grid-cols-1 place-items-center content-start px-8 py-12 md:py-28">
            <Lottie
                options={{
                    animationData: animationData,
                    autoplay: true,
                    loop: false
                }}
                speed={1}
                title="Thank you"
                style={{ width: '6rem', height: '6rem', background: 'transparent' }}
            />

            <h2 className="mt-14 normal-case">Your download completed</h2>
            <p className="mt-12 max-w-[31.4rem] text-center">Please check your download folder or your email.</p>

            <a href="/pdf/cataract-surgery.pdf" download>
                <Button
                    type="button"
                    text="Download Again"
                    iconPosition="left"
                    icon={
                        <Image
                            src="/images/icons/icon-cloud-download-outline.svg"
                            alt=""
                            width={24}
                            height={24}
                            className="h-[2.4rem] w-[2.4rem]"
                        />
                    }
                    className="mt-24 justify-self-center"
                />
            </a>
        </div>
    );
};

export default Thankyou;
