import { LeftRightSectionChildrenInterface } from './LeftRightSection';
import Image from 'next/image';

export const leftRightListRelexSmileLondon: Array<LeftRightSectionChildrenInterface> = [
    {
        mobileImage: (
            <Image
                src="/images/section-images/relex-smile-consultation.png"
                width={390}
                height={390}
                quality={70}
                className="md:hidden"
                alt="Woman having eye check with ophthalmologist to correct her vision"
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/relex-smile-consultation-large.png"
                width={685}
                height={557}
                quality={70}
                className="hidden md:block"
                alt="Woman having eye check with ophthalmologist to correct her vision"
            />
        ),
        title: `ReLEX SMILE Consultation`,
        descriptions: [
            `Our ReLEX SMILE laser eye treatment is the most technically advanced option for people who want
			 the latest and greatest vision correction option to treat any blurriness, astigmatism and short-sightedness.`,
            `When you have a private laser consultation with us, our specialists will conduct a number
			  of eye tests in order to examine all the factors involved in correcting your eyesight.
			   Prior to your appointment, we will advise that you do not wear soft contact lenses for two weeks.
			    If you wear hard contact lenses we advise you to not to wear these for a minimum of two weeks
				 (including a week for every decade you have worn hard contact lenses). This is to ensure the
				  cornea of your eye is ready for measurements to be taken accurately. Your laser specialist
				   will then be able to offer the best possible course of treatment to correct your vision.
				    Your first consultation will be an all inclusive cost of £200, with no obligation to have
					 treatment if you wish to have some time to consider your options.`,
            `If you would like to proceed to having ReLEX SMILE laser treatment, we will remove your £200 consultation fee from your treatment price, making your private consultation 
			<strong class="font-mulishBold">100% FREE.</strong>`,
            `Need to talk to a specialist before booking a laser consultation? If you are unsure whether you are 
			suitable for our ReLEX SMILE laser treatment, you can attend a FREE suitability check
			 with our laser specialist. They will talk you through your prescription history
			  and the best treatment options we offer for vision correction.`
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/relex-smile-treatment.png"
                width={390}
                height={390}
                quality={70}
                className="md:hidden"
                alt="ReLEX SMILE laser eye surgery"
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/relex-smile-treatment-large.png"
                width={683}
                height={568}
                quality={70}
                className="hidden md:block"
                alt="ReLEX SMILE laser eye surgery"
            />
        ),
        title: `ReLEX SMILE Treatment`,
        descriptions: [
            `On the day of your ReLEX SMILE surgery, we advise that you do not wear
             any makeup and be accompanied by a relative or friend who can assist you home afterwards.
              When you arrive at your appointment, you will be shown into our
               private laser suite where our friendly nurses will talk you through the procedure.`,
            `They will place a small drop of anesthetic on your eye and provide you with support
             for your eyelids so there is no need to worry about blinking. After you are comfortable and relaxed,
              your laser specialist will be giving you easy, simple instructions throughout the
               process to make sure your laser treatment is smooth and accurate.`,
            `You will be asked to stare at a green flashing light to hold your gaze in the correct place.`,
            `Our highly advanced visumax laser machine will slowly maneuver you into the exact position needed,
             so all you need to do is be still and at ease.`,
            `It will then make gentle contact with your eye which is completely painless,
              taking approximately 25 seconds per eye.`,
            `After this, you can sit up and begin to check out your new vision.`
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/relex-smile-aftercare.png"
                width={390}
                height={390}
                quality={70}
                className="md:hidden"
                alt="Woman free from glasses rock climbing"
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/relex-smile-aftercare-large.png"
                width={675}
                height={558}
                quality={70}
                className="hidden md:block"
                alt="Woman free from glasses rock climbing"
            />
        ),
        title: `ReLEX SMILE Aftercare`,
        descriptions: [
            `There is nothing more important than our patients feeling comfortable after their
           ReLEX SMILE treatment - which is why your dedicated laser specialist will check your
            eyes 1 day after your laser treatment.`,
            `Once they check your vision they will advise you to rest for 1 week before resuming any exercise,
           driving or strenuous activities.`,
            `Our team will always be at the end of a phone call throughout your
            recovery at home to answer any more questions you may have about your
             life after laser treatment. In your aftercare appointment, your
              ReLEX SMILE specialist will check the improvement of your vision and answer any other questions
            you may have before you can finally experience your new life without contact lenses and glasses!`
        ]
    }
];
