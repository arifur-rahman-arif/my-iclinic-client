import { H3Variant3 } from '@/components/Headings';
import LinkStyle from '@/components/Link/LinkStyle';
import { BulletList } from '@/components/page-sections';
import PaediatricHeading from './PaediatricHeading';
import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import TextColumn from '@/page-sections/SectionParts/TextColumn';
import VideoColumn from './VideoColumn';
import { LeftRightSectionChildrenInterface } from './LeftRightSection';
import Image from 'next/image';
import { LinkText } from '@/components/Link';
import LeftRightHeading1 from '@/components/page-sections/LeftRight/LeftRightHeading1';
import LottieComponent from './lottie/LottieComponent';
import * as animationData1 from '@/lottie/EYE_VARIATION1.json';
import * as animationData2 from '@/lottie/EYE_VARIATION2.json';
import * as animationData3 from '@/lottie/EYE_VARIATION3.json';
import * as animationData4 from '@/lottie/EYE_VARIATION4.json';
import * as animationData5 from '@/lottie/EYE_VARIATION5.json';
import * as GlaucomaTrabeculectomyLottie from '@/lottie/glaucoma-trabeculectomy.lottie.json';

export const leftRightListRelexSmileLondon: Array<LeftRightSectionChildrenInterface> = [
    {
        mobileImage: (
            <Image
                src="/images/section-images/relex-smile-consultation.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt="Woman having eye check with ophthalmologist to correct her vision"
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/relex-smile-consultation-large.png"
                width={685}
                height={557}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt="Woman having eye check with ophthalmologist to correct her vision"
            />
        ),
        title: `ReLEx SMILE Consultation`,
        descriptions: [
            `Our ReLEx SMILE laser eye treatment is the most technically advanced option for people who want
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
            <>
                If you would like to proceed to having ReLEx SMILE laser treatment, we will remove your £200
                consultation fee from your treatment price, making your private consultation{' '}
                <strong className="font-mulishBold">100% FREE.</strong>
            </>,
            `Need to talk to a specialist before booking a laser consultation? If you are unsure whether you are
			suitable for our ReLEx SMILE laser treatment, you can attend a FREE suitability check
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
                className="rounded-primary md:hidden"
                alt="ReLEx SMILE laser eye surgery"
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/relex-smile-treatment-large.png"
                width={683}
                height={568}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt="ReLEx SMILE laser eye surgery"
            />
        ),
        title: `ReLEx SMILE Treatment`,
        descriptions: [
            `On the day of your ReLEx SMILE surgery, we advise that you do not wear
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
            <>
                It will then make gentle contact with your eye which is completely painless, taking approximately{' '}
                <strong className="whitespace-nowrap">25 seconds per eye.</strong>
            </>,
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
                className="rounded-primary md:hidden"
                alt="Woman free from glasses rock climbing"
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/relex-smile-aftercare-large.png"
                width={675}
                height={558}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt="Woman free from glasses rock climbing"
            />
        ),
        title: `ReLEx SMILE Aftercare`,
        descriptions: [
            `There is nothing more important than our patients feeling comfortable after their
           ReLEx SMILE treatment - which is why your dedicated laser specialist will check your
            eyes 1 day after your laser treatment.`,
            `Once they check your vision they will advise you to rest for 1 week before resuming any exercise,
           driving or strenuous activities.`,
            `Our team will always be at the end of a phone call throughout your
            recovery at home to answer any more questions you may have about your
             life after laser treatment. In your aftercare appointment, your
              ReLEx SMILE specialist will check the improvement of your vision and answer any other questions
            you may have before you can finally experience your new life without contact lenses and glasses!`
        ]
    }
];

export const leftRightListIcl: Array<LeftRightSectionChildrenInterface> = [
    {
        mobileImage: (
            <Image
                src="/images/section-images/icl-consultation.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/icl-consultation-large.png"
                width={685}
                height={587}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        title: `ICL Consultation`,
        descriptions: [
            `An ICL consultation for Implantable contact lenses couldn’t be easier! Our friendly team will guide you through some eye assessments which will take approximately one hour.`,
            `Once complete, your specialist will advise you on the best lens size for your eyes.`,
            `During your eye assessments, we will need to dilate your pupil with drops to take detailed measurements of your retina and your exact prescription.`,
            `Prior to your ICL appointment, we will advise that you do not wear contact lenses for two weeks to ensure your eye is ready for measurements to be taken.`,
            `None of these measurements are invasive or uncomfortable and our ophthalmic technician will support you through these assessments.`,
            `The eye drops will make your vision blurry so we advise that you have a friend or family member to help transport you home.`,
            `Based on your ICL assessments, our specialist will talk with you about proceeding with the treatment and how this treatment can best suit your lifestyle!`
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/icl-treatment.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/icl-treatment-large.png"
                width={677}
                height={558}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        title: `ICL Treatment`,
        descriptions: [
            `On the day of your ICL treatment, it’s best not to wear eye makeup or to put drops in your eyes.`,
            `Once arriving at our ICL clinic, our friendly nurse will explain what to expect during and after the procedure. Once ready you will be escorted into the procedure room.`,
            `A drop of anesthetic is placed on your cornea which also dilates your eyes.`,
            `The surgeon will be giving you clear and easy instructions to guide you throughout the procedure while they insert the contact lens implant.`,
            `Once the procedure is finished our nurse will discuss our aftercare advice and how to use your new eye drops before your aftercare appointment with your specialist.`,
            `Our Implantable contact Lens procedure lasts for two hours from when you arrive and when you return back home.`
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/icl-aftercare.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt="Woman free from glasses rock climbing"
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/icl-aftercare-large.png"
                width={685}
                height={587}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt="Woman free from glasses rock climbing"
            />
        ),
        title: `ICL Aftercare`,
        descriptions: [
            `For Implantable Contact Lens treatment there is a one-week recovery period where minimal activity is required before attending an aftercare appointment with your specialist.`,
            `During the one week recovery period, our team is always here to answer any other questions you may have so that you can live confidently and comfortably following your ICL surgery.`,
            `Once you attend an aftercare appointment with the ICL specialist you will be able to begin life without glasses or disposable contact lenses again!`
        ]
    }
];

export const leftRightListLasik: Array<LeftRightSectionChildrenInterface> = [
    {
        mobileImage: (
            <Image
                src="/images/section-images/lasik-consultation.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/lasik-consultation-large.png"
                width={687}
                height={574}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        title: `LASIK Consultation`,
        descriptions: [
            `Before arriving at your LASIK consultation, we would ask that you do not wear soft or hard contact lenses for two weeks.`,
            `This is because contact lenses reshape the surface of your eye and can interfere with the measurements we need to take in order to make sure your vision can be precisely corrected.`,
            `When you arrive at our LASIK clinic, our friendly technicians will guide you through a number of eye assessments on your cornea in order to determine the best possible outcome LASIK can give you.`,
            `Once you meet your LASIK specialist, they will be able to assess whether your eyes are suitable for this treatment or if any alternative laser treatments might be better for your eye health, for example, to reduce the risk of unusually dry eyes following the procedure.`,
            `Because we dilate your pupils to comprehensively assess your eyes, we advise that a friend or family member accompany you to help transport you home.`,
            `Our private LASIK consultation is completely FREE without any obligation to have treatment if you wish to consider your options.`
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/lasik-treatment.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/lasik-treatment-large.png"
                width={689}
                height={558}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        title: `LASIK Treatment`,
        descriptions: [
            `When you arrive at our clinic, our friendly nurse will take you to our laser suite, they will talk you through the procedure and answer any questions you may have about your LASIK procedure.`,
            `They will administer anesthetic eye drops into your eyes to make sure the procedure itself is very easy and completely painless.`,
            `Our nurse will introduce you to your laser specialist and make you comfortable.`,
            `Our laser specialist makes a small incision to create a flap on the surface of your eye. The LASIK laser reshapes these exposed layers before the specialist will fold the flap back into position.`,
            `LASIK reshapes the eye’s cornea and increases the focus of light on your retina.This removes the need for contact lenses or glasses because LASIK changes the focusing power of your cornea and restores natural vision again.`,
            `Your eye will heal naturally over the following hours and days, and the majority of patients report their vision improves within 24 hours!`
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/lasik-aftercare.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/lasik-aftercare-large.png"
                width={691}
                height={558}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        title: `LASIK Aftercare`,
        descriptions: [
            `We want nothing more than for you to feel comfortable after your LASIK surgery, which is why our team is always here to answer any questions you may have during your recovery.`,
            `Before you leave on the day of your LASIK surgery, our friendly nurse will give you aftercare instructions and eye drops to take home.`,
            `The following day after your LASIK treatment your laser specialist will check your vision and monitor the progress of your vision.`,
            `After your first day aftercare appointment you will have to have minimal physical activity and rest for 1 week.`,
            `This is to make sure your eye can heal properly without any possibility of injury. Once your 1 week recovery period is over you laser specialist will check in with you again and carry out some further eye assessments.`,
            `Following this, you can resume all normal activities again with your natural, clear vision restored!`
        ]
    }
];

export const leftRightListCataract: Array<LeftRightSectionChildrenInterface> = [
    {
        mobileImage: (
            <Image
                src="/images/section-images/cataract-consultation.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/cataract-consultation-large.png"
                width={696}
                height={550}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        title: `Your Consultation`,
        descriptions: [
            `The first step to living life with clearer vision is a consultation with one of our friendly cataract specialists.`,
            <>
                Your cataract consultation will begin with some initial scans so we can examine your eyes and explain
                the most <span className="!font-mulishBold">suitable treatment options</span> for you.
            </>,
            `With our expert technology, our senior technicians will be able to capture how the cataracts are affecting you, your lifestyle and where exactly they are affecting your field of vision.`,
            <>
                These assessments will be passed to your cataract specialist, who will meet with you and talk you
                through the best{' '}
                <LinkText
                    href="/cataract/premium-lenses"
                    indicatorColor="bg-blue"
                    className="!font-mulishBold text-blue"
                >
                    lens implants options
                </LinkText>{' '}
                for your cataract surgery.
            </>,
            `Your first cataract consultation and assessment is an all-inclusive £200 fee, with no obligation to have surgery if you wish to have some time to consider    your treatment options. `
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/cataract-surgery.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/cataract-surgery-large.png"
                width={689}
                height={558}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        title: `Your Surgery`,
        descriptions: [
            `The most comforting part of our care is that our patients know their surgeon from the beginning; they will be your dedicated specialist throughout your consultation, treatment and aftercare.`,
            `Before your surgery day, our patient care coordinator will reach out and answer any extra information that will be helpful to you before your treatment.`,
            `On the day of your cataract surgery, our friendly nurse team will be with you before your treatment time and they will answer any questions you may have for your ease, care and comfort.`,
            `Your cataract surgery will be completely painless and takes just an average of 10 minutes per eye, depending on your lens options.`,
            `Our nurses will be there after your surgery to help you through our at-home instructions which  will help you in your recovery time.`
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/cataract-aftercare.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/cataract-aftercare-large.png"
                width={680}
                height={550}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        title: `Your Aftercare`,
        descriptions: [
            `There is nothing more important than our patients feeling comfortable after their procedure.`,
            <>
                We advise a <strong>two week recovery period</strong> before attending your aftercare appointment with
                us.
            </>,
            `Our team will always be at the end of a phone call throughout your recovery at home to answer any more questions you may have.`,
            `In your aftercare appointment, your cataract specialist will check the improvement of your vision before you can enjoy your cataract-free vision`
        ]
    }
];

export const leftRightListPresbyond: Array<LeftRightSectionChildrenInterface> = [
    {
        mobileImage: (
            <Image
                src="/images/section-images/presbyond-consultation.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt="Woman gets her eyes checked with an ophthalmologist for presbyond laser eye"
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/presbyond-consultation-desktop.png"
                width={685}
                height={587}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt="Woman gets her eyes checked with an ophthalmologist for presbyond laser eye"
            />
        ),
        title: `Presbyond Consultation`,
        descriptions: [
            `When you arrive for your Presbyond consultation with us, our friendly technicians will carry out some detailed assessments on your eyes.`,
            `These assessments will measure your eyes, your prescription and check the overall health for any other eye conditions you may have.`,
            `Our laser specialist will then be able to assess your suitability for presbyond and they will talk you through the treatment and how Presbyond will best work for you and your lifestyle.`,
            <>
                We understand that laser treatment is a life-changing decision which is why our Presbyond consultation
                is completely <strong>FREE</strong> without any obligation to commit to treatment!
            </>
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/presbyond-surgery.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt="Presbyond treatment to correct blurry, long-sighted vision."
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/presbyond-surgery-desktop.png"
                width={677}
                height={558}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt="Presbyond treatment to correct blurry, long-sighted vision."
            />
        ),
        title: `Presbyond surgery`,
        descriptions: [
            `Our presbyond laser treatment uses a unique blended vision technique which extends the eyes ability to see from near through to intermediate and distant sight.`,
            `On the day of treatment, our friendly nurse team will greet you and talk you through the preparations for the treatment and will answer any questions you may have before meeting your specialist again.`,
            `They will carefully take care of administering anesthetic eye drops into your eyes so that the laser treatment will be completely painless.`,
            `Your specialist will greet you in the treatment room and they will give clear, easy instruction as the laser reshapes your eye. The procedure itself takes up to 20 minutes per eye without any pain or discomfort. Once the treatment is finished, our nurse will talk you through any questions you may have and will show you the aftercare eye drops you will be required to use at home.`
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/presbyond-aftercare.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt="Woman recovering after Presbyond laser eye surgery, holding a coffee cup and
                reading her ipad without reading glasses.
                "
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/presbyond-aftercare-desktop.png"
                width={685}
                height={587}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt="Woman recovering after Presbyond laser eye surgery, holding a coffee cup and
                reading her ipad without reading glasses.
                "
            />
        ),
        title: `Presbyond aftercare`,
        descriptions: [
            `Presbyond only requires an initial 1 week recovery period with little activity.`,
            `In the initial days of your recovery period there may be a gritty sensation and you may experience some sensitivity to light.`,
            `Any symptoms experienced after your treatment will reside as your eyes fully heal and process your new refraction.`,
            `In your aftercare appointment with your laser specialist, they will check the progress of your vision and keep you informed about how long you should keep using your eye drops.`
        ]
    }
];

export const leftRightListPremiumLenses: Array<LeftRightSectionChildrenInterface> = [
    {
        lottieComponent: <LottieComponent animationData={animationData1} />,
        alternativeHeading: (
            <LeftRightHeading1 title="EDoF Lenses" subTitle="Independence from glasses" percentage={80} />
        ),
        descriptions: [
            `Our Extended Depth of Focus lenses are used for our presbyopic patients needing a broader range of vision from their intermediate to distance vision.`,
            `The lenses have a continuous change in periphery range by focusing the light in an extended longitudinal plane, instead of discrete points in a patient’s sight.`,
            `Edof is the best lens implant option to achieve a brighter, and larger periphery of vision. Edof lenses have minimal glare, or halo side effects that can be associated with multifocal lenses.`
        ]
    },
    {
        lottieComponent: <LottieComponent animationData={animationData2} />,
        alternativeHeading: (
            <LeftRightHeading1 title="Toric Lenses" subTitle="Independence from glasses" percentage={85} />
        ),
        descriptions: [
            `Our Torric lenses are for patients who may require some correction of astigmatism in their cornea.`,
            `We aim to correct any astigmatism for our patients with Torric as part of our standard care after Cataract Surgery.`
        ]
    },
    {
        lottieComponent: <LottieComponent animationData={animationData3} />,
        alternativeHeading: (
            <LeftRightHeading1 title="Monofocal Lenses" subTitle="Independence from glasses" percentage={80} />
        ),
        descriptions: [
            `Our Monofocal lenses are for patients that would like their distance sight to be clear. This means tasks such as: reading signs and sightseeing will be clear.`,
            `However, these lenses will require our patients to use glasses for intermediate and near tasks.`
        ]
    },
    {
        lottieComponent: <LottieComponent animationData={animationData4} />,
        alternativeHeading: (
            <LeftRightHeading1 title="Multifocal Lenses" subTitle="Independence from glasses" percentage={70} />
        ),
        descriptions: [
            `Our Multifocal lenses are for patients needing near, intermediate and distance sight. These lenses are to maximise the range of vision to reduce the possibility of glasses wearing.`,
            `However, glasses may still be needed for intensive near tasks, for example: reading very small print, or in poor light situations.`
        ]
    },
    {
        lottieComponent: <LottieComponent animationData={animationData5} />,
        alternativeHeading: (
            <LeftRightHeading1 title="Monovision" subTitle="Independence from glasses" percentage={60} />
        ),
        descriptions: [
            `Monovision is when we correct the dominant eye for distance vision, and the other eye is corrected for near vision. When both eyes are viewing together, the distances pair.`,
            `However, monovision is an older technique which can create more complications when trying to correct the distances. Our patients prefer newer lenses that work for a better optimal visual outcome.`
        ]
    }
];

export const leftRightListLasek: Array<LeftRightSectionChildrenInterface> = [
    {
        mobileImage: (
            <Image
                src="/images/section-images/lasek-consultation.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/lasek-consultation-large.png"
                width={695}
                height={580}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        title: `Consultation`,
        descriptions: [
            `Our laser treatments are the most technically advanced options for people who want the latest and greatest vision correction option to treat any blurriness, astigmatism and short-sightedness.`,
            `When you visit us for a private consultation, our laser specialists will conduct a number of eye tests in order to examine all the factors involved in correcting your eyesight. Prior to your appointment, we will advise that you do not wear soft contact lenses for two weeks.`,
            `If you wear hard contact lenses, we advise you not to wear these for a minimum of two weeks (including a week for every decade you have worn hard contact lenses). This is to ensure the cornea of your eye is ready for measurements to be taken accurately.`,
            <>
                Your laser specialist will then be able to offer the best possible course of treatment to correct your
                vision. Your first consultation will be an <strong>all-inclusive cost of £200</strong>, with no
                obligation to have treatment if you wish to have some time to consider your options.
            </>
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/lasek-treatment.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/lasek-treatment-large.png"
                width={711}
                height={522}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        title: `Treatment`,
        descriptions: [
            `On the day of your LASEK, PRK or PTK surgery, we advise that you do not wear any makeup or perfume and be accompanied by a relative or friend who can assist you home afterwards.`,
            `When you arrive at your appointment, you will be shown into our private laser suite, where our friendly nurses will talk you through the procedure.`,
            `They will place a small drop of anaesthetic on your eye and provide you with support for your eyelids, so there is no need to worry about blinking.`,
            `After you are comfortable and relaxed, your laser specialist will give you easy, simple instructions throughout the process to make sure your laser treatment is smooth and accurate.`
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/lasek-aftercare.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/lasek-aftercare-large.png"
                width={695}
                height={580}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        title: `Aftercare`,
        descriptions: [
            `There is nothing more important than our patients feeling comfortable after their laser treatment - which is why your dedicated laser specialist will check your eyes 1 day after your surgery.`,
            `Once they check your vision, they will advise you to rest for 1 week before resuming any exercise, driving or strenuous activities.`,
            `Our team will always be at the end of a phone call throughout your recovery at home to answer any more questions you may have about your life after laser treatment.`,
            `In your aftercare appointment, your laser specialist will check the improvement of your vision and answer any other questions you may have before you can finally experience your new life without contact lenses and glasses!`
        ]
    }
];

export const leftRightListGlaucoma: Array<LeftRightSectionChildrenInterface> = [
    {
        mobileImage: (
            <Image
                src="/images/section-images/glaucoma-consultation.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/glaucoma-consultation-large.png"
                width={682}
                height={686}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        title: `Glaucoma consultation`,
        excludeNumbers: true,
        descriptions: [
            `We already know that quality of life increases with the quality of clear vision, without needing to worry about losing sight in your future.`,
            'Because Glaucoma is such an extensive condition with many treatment options, we carry out very comprehensive eye assessments to understand the best treatment options for your Glaucoma case.',
            'When you first visit our Glaucoma clinic, you will meet our friendly technicians who will guide you through these detailed eye assessments. These assessments are designed to capture all angles of your eyes, measuring your corneal thickness, understanding your eyes behavior and knowing what you can or can’t see in your peripheral vision.',
            'On your second visit to our London clinic, your dedicated glaucoma specialist will have reviewed your assessments and made a diagnosis of your glaucoma type.',
            'They will diagnose you privately and answer any questions you have about your glaucoma condition and the best treatment.',
            'Your Glaucoma specialist may do further pressure checks to determine the best solution to reduce high pressure in your eyes. Once you finish your consultation, you will have full confidence and awareness of the best glaucoma treatment options for your eyes.'
        ]
    }
];

export const leftRightListGlaucomma: Array<LeftRightSectionChildrenInterface> = [
    {
        mobileImage: (
            <Image
                src="/images/section-images/glaucoma-laser.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/glaucoma-laser-large.png"
                width={678}
                height={533}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        alternativeHeading: <H3Variant3>Glaucoma Laser Treatment</H3Variant3>,
        descriptions: [
            <>
                <strong>Selective Laser Trabeculoplasty (SLT)</strong> uses a gentle laser light to clean up the natural
                drainage pathway of the eye. It does this by creating biological conditions that ultimately improve the
                drainage pathway and result in lowering pressure of the eyes.
            </>,
            <>
                This treatment is successful in 2 out of 3 patients and the effect lasts for 2-3 years. In patients in
                whom the treatment works, it is safe to repeat Selective Laser Trabeculoplasty treatment every 2 years.
            </>,
            <>
                <strong>YAG Laser iridotomy</strong> YAG laser iridotomy is a preventive treatment that is recommended
                for people who have very narrow angles that put them at risk of angle closure glaucoma. It is also used
                to treat acute angle closure glaucoma is an acutely painful eye condition.
            </>,
            <>
                Our Glaucoma specialist makes a tiny internal opening in the iris with a laser, this creates a small
                internal bypass channel that keeps the eye safe from the sudden painful pressure risk of angle closure
                glaucoma.
            </>
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/glaucoma-eye-drops.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/glaucoma-eye-drops-large.png"
                width={678}
                height={533}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        alternativeHeading: <H3Variant3>Glaucoma Eye drops</H3Variant3>,
        descriptions: [
            'Glaucoma drops are the most common first-line treatment for reducing high pressure in the eyes of patients with glaucoma or ocular hypertension.',
            'We provide the best preservative free eye drops as our patients.',
            'Any eye drops given to you as an ongoing course of treatment will be medically provided based on your eye assessments, medical history and any allergies you may have.'
        ]
    },
    {
        dynamicMediaColumn: <VideoColumn />,
        alternativeHeading: <H3Variant3>Glaucoma Eye Surgery</H3Variant3>,
        descriptions: [
            <>
                <strong className="text-[1.8rem]">HFDS (High-frequency deep sclerotomy)</strong> is a surgical procedure
                also suited to people who have mild to moderate open angle Glaucoma (chronic Glaucoma).
            </>,
            <>
                Our HFDS procedure is a very minimally invasive surgery which means only a very small 1.2mm incision is
                required to get inside your eye.
            </>,
            <>
                Our Glaucoma specialist will form six very small pockets in your ‘trabecular meshwork’ (the tissue
                inside your eye) which improves the flow of eye fluid to drain easily.
            </>,
            <>
                Our HFDS procedure is designed to let fluid naturally drain without needing any implant inserted which
                lowers the pressure in your eyes.
            </>,
            <strong>
                If you also suffer from cataracts, our Glaucoma specialist can remove your cataracts, as well as treat
                your Glaucoma, in this one procedure.
            </strong>
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/presserflo.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/presserflo.png"
                width={647}
                height={389}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        alternativeHeading: <></>,
        descriptions: [
            <>
                <strong className="text-[1.8rem]">PreserFlo</strong> is a surgical procedure also suited to people who
                have mild to moderate open angle Glaucoma (chronic Glaucoma).
            </>,
            'Our Glaucoma specialist will create a small flap in your conjunctiva (the white part of your eye) and insert a small 8mm tube called a ‘PreserFlo Microshunt’.',
            'This tube is inserted in the space between your iris and cornea (called the ‘anterior segment’) designed to lower eye pressure by letting fluid bypass the eyes tissue and drain out of the eye.',
            'Our Glaucoma specialist will treat your eye with anti-scarring medication before the procedure is finished.'
        ]
    },
    {
        lottieComponent: <LottieComponent animationData={GlaucomaTrabeculectomyLottie} loop={false} />,
        alternativeHeading: <></>,
        descriptions: [
            <>
                <strong className="text-[1.8rem]">Glaucoma Trabeculectomy</strong> is a surgical procedure most suited
                to people who have open angle Glaucoma (chronic Glaucoma).
            </>,
            'In this procedure, our Glaucoma specialist makes a small incision into the white part of your eye called the ‘conjunctiva’ (just above your iris) and removes some trabecular meshwork (eye tissue) to form a small flap.',
            'This flap serves as a trapdoor and will allow fluid to escape the eye and reabsorb into the body safely without any further damage to your optic nerve.',
            'You cannot see this flap after the surgery has finished because the flap is very small and unnoticeable.',
            'Our Trabeculectomy procedure allows excess fluid to pass through the eye easily and lower high pressure in your eyes.'
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/canaloplasty.jpg"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/canaloplasty.jpg"
                width={647}
                height={389}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        alternativeHeading: <></>,
        descriptions: [
            <>
                <strong className="text-[1.8rem]">Glaucoma Canaloplasty</strong> is a procedure to enlarge the drainage
                canal in your eye and reduce intraocular pressure for people diagnosed with open angle glaucoma.
            </>,
            'Once a tiny incision is made to gain access to a canal in the eye, our Glaucoma specialist will insert a small microcatheter to help the pressure in your eye flow naturally.'
        ]
    }
];

export const leftRightListEyelid: Array<LeftRightSectionChildrenInterface> = [
    {
        mobileImage: (
            <Image
                src="/images/section-images/eyelid-malposition.jpg"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/eyelid-malposition.jpg"
                width={695}
                height={580}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        alternativeHeading: <TextColumn h3LightHeading="Medical" h3BoldHeading="Eyelid Surgery" />,
        descriptionClassName: 'md:ml-9 md:mt-6',
        descriptions: [
            <>
                <H3Variant3>
                    Eyelid malposition{' '}
                    <span className="text-[1.8rem] leading-[2.8rem]">(Entropion, ectropion correction)</span>
                </H3Variant3>
            </>,
            <strong>Entropion treatment (Correction of the inward eyelid)</strong>,
            "We offer Entropion surgery to correct the upper or lower eyelids turning inwards into the eye. Entropion can cause your eyelashes to rub against your eye's surface, including sensitivity to light, watery eyes and discharge.",
            'Our oculoplastic surgeon will correct the eyelid malposition, preventing irritation and future vision loss.',
            'If you have been diagnosed with Entropion, we can book you a private consultation to see our oculoplastic specialist.',
            'This consultation is an all-inclusive assessment to understand the condition of your eyes and your specialist will be your surgeon on your day of treatment.',
            <strong className="text-[1.8rem] leading-[2.8rem]">
                Find out more about our Entropion treatment today
            </strong>,
            <>
                <BulletList
                    className="!ml-0 mt-6"
                    bulletPoint={
                        <Image
                            src="/images/icons/icon-arrow-right.svg"
                            alt=""
                            width={24}
                            height={24}
                            className="h-[1.4rem] w-[1.4rem] translate-y-3"
                        />
                    }
                    list={[
                        <strong className="text-[1.8rem] leading-[2.8rem]">
                            Private Consultation Cost <strong className="text-[2rem]">£200</strong>
                        </strong>,
                        <strong className="text-[1.8rem] leading-[2.8rem]">
                            Chalazion Removal Treatment Cost From <strong className="text-[2rem]">£350 per eye</strong>
                        </strong>
                    ]}
                />
            </>,
            <div className="mt-6">
                <BookConsultation buttonClassName="group/consultation transition-all border-2 border-heading2 duration-500 hover:bg-transparent grid cursor-pointer px-8 py-6 place-items-center grid-flow-col gap-5 bg-heading2 rounded-primary">
                    <button className="" aria-label="Request a callback">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M13.334 1.66699V5.00033"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M6.66602 1.66699V5.00033"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M2.5 8.33301H17.5"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                        </svg>

                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem] text-white transition-all duration-500 group-hover/consultation:text-heading2">
                            Request a callback
                        </span>
                    </button>
                </BookConsultation>
            </div>
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/ectropion-treatment.jpg"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/ectropion-treatment.jpg"
                width={711}
                height={522}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        alternativeHeading: <></>,
        descriptions: [
            <>
                <H3Variant3>
                    Ectropion treatment{' '}
                    <span className="text-[1.8rem] leading-[2.8rem]">(Correction of the lower eyelid)</span>
                </H3Variant3>
            </>,
            'We offer Ectropion surgery to correct drooping eyelids that turn inside and/ or expose the outside of the eye. Ectropion is a condition caused by weakening tendons and muscle tissue which will under and/or overexpose the eyelid.',
            'Our oculoplastic surgeon will relieve discomfort and side effects of Ectropion (such as soreness, irritation and blockage of tears) by removing excess skin and strengthening the muscle to rest normally on your eye.',
            'Our private consultation is all-inclusive of eye scans and assessments, which will help your consultant diagnose your Ectropion condition and prepare you for your treatment day.',
            <strong className="text-[2rem] leading-[2.8rem]">Find out more about our Ectropion treatment today</strong>,
            <strong>Private Consultation Cost £200</strong>,
            <strong>Ectropion Treatment Cost From £3,000</strong>,
            <div className="mt-6">
                <BookConsultation buttonClassName="group/consultation transition-all border-2 border-heading2 duration-500 hover:bg-transparent grid cursor-pointer px-8 py-6 place-items-center grid-flow-col gap-5 bg-heading2 rounded-primary">
                    <button className="" aria-label="Request a callback">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M13.334 1.66699V5.00033"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M6.66602 1.66699V5.00033"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M2.5 8.33301H17.5"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                        </svg>

                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem] text-white transition-all duration-500 group-hover/consultation:text-heading2">
                            Request a callback
                        </span>
                    </button>
                </BookConsultation>
            </div>
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/eyelid-cyst-removal.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/eyelid-cyst-removal.png"
                width={544}
                height={392}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        alternativeHeading: <></>,
        descriptions: [
            <>
                <H3Variant3>
                    Eyelid Cyst removal{' '}
                    <span className="text-[1.8rem] leading-[2.8rem]">(removing a cyst from the eyelid)</span>
                </H3Variant3>
            </>,
            "Removing a cyst on an eyelid couldn't be easier with our oculoplastic surgeon. We offer a private consultation which is all-inclusive of eye scans and assessments which inform your consultant of your cysts condition and prepare you for your treatment day.",
            'An eyelid cyst is a fairly common eye condition that is caused by a blockage in your eyelid oil glands. To ease your symptoms of discomfort and irritation, our surgeon will remove the cyst and correct your eyelid malposition, which will prevent irritation, further infection and future vision loss. You can learn more about our cyst eyelid treatment below.',
            <strong className="text-[1.8rem] leading-[2.8rem]">
                Find out more about our cyst removal treatment today
            </strong>,
            <>
                <BulletList
                    className="!ml-0 mt-6"
                    bulletPoint={
                        <Image
                            src="/images/icons/icon-arrow-right.svg"
                            alt=""
                            width={24}
                            height={24}
                            className="h-[1.4rem] w-[1.4rem] translate-y-3"
                        />
                    }
                    list={[
                        <strong className="text-[1.8rem] leading-[2.8rem]">
                            Private Consultation Cost <strong className="text-[2rem]">£200</strong>
                        </strong>,
                        <strong className="text-[1.8rem] leading-[2.8rem]">
                            Eyelid Cyst Removal Treatment Cost From <strong className="text-[2rem]">£350</strong>
                        </strong>
                    ]}
                />
            </>,
            <div className="mt-6">
                <BookConsultation buttonClassName="group/consultation transition-all border-2 border-heading2 duration-500 hover:bg-transparent grid cursor-pointer px-8 py-6 place-items-center grid-flow-col gap-5 bg-heading2 rounded-primary">
                    <button className="" aria-label="Request a callback">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M13.334 1.66699V5.00033"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M6.66602 1.66699V5.00033"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M2.5 8.33301H17.5"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                        </svg>

                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem] text-white transition-all duration-500 group-hover/consultation:text-heading2">
                            Request a callback
                        </span>
                    </button>
                </BookConsultation>
            </div>
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/eyelid-chalazion-removal-large.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/eyelid-chalazion-removal-large.png"
                width={711}
                height={522}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        alternativeHeading: <></>,
        descriptions: [
            <>
                <H3Variant3>
                    Eyelid Chalazion removal{' '}
                    <span className="text-[1.8rem] leading-[2.8rem]">(Removing a Chalazion from the eyelid).</span>
                </H3Variant3>
            </>,
            'Treatment for a Chalazion removal with our oculoplastic surgeon is a simple and stress-free procedure to prevent discomfort and prolonged irritation of your condition.',
            'A Chalazion is identified as a red bump that swells on your eyelid. This can develop as a result of an untreated cyst and is caused by chronic inflammation from an oil gland (meibomian) being blocked in your eyelid.',
            'Our oculoplastic surgeon specializes in Chalazion removal treatment and easing any symptoms of irritation you are experiencing. We offer a private consultation with our specialist, which is all-inclusive of eye scans and assessments to understand the condition of your Chalazion and prepare for your treatment day.',
            <strong className="text-[2rem] leading-[2.8rem]">
                Find out more about our Chalazion removal treatment today
            </strong>,
            <strong>Private Consultation Cost £200</strong>,
            <strong>Chalazion Removal Treatment Cost From £350</strong>,
            <div className="mt-6">
                <BookConsultation buttonClassName="group/consultation transition-all border-2 border-heading2 duration-500 hover:bg-transparent grid cursor-pointer px-8 py-6 place-items-center grid-flow-col gap-5 bg-heading2 rounded-primary">
                    <button className="" aria-label="Request a callback">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M13.334 1.66699V5.00033"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M6.66602 1.66699V5.00033"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M2.5 8.33301H17.5"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                        </svg>

                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem] text-white transition-all duration-500 group-hover/consultation:text-heading2">
                            Request a callback
                        </span>
                    </button>
                </BookConsultation>
            </div>
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/eye-stye-removal-large.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/eye-stye-removal-large.png"
                width={544}
                height={392}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        alternativeHeading: <></>,
        descriptions: [
            <>
                <H3Variant3>
                    Eye Stye Removal <span className="text-[1.8rem] leading-[2.8rem]">(Removing a stye)</span>
                </H3Variant3>
            </>,
            'Removing a stye is a simple and stress-free procedure. Our oculoplastic surgeon will be able to alleviate the uncomfortable symptoms of the stye, which, left untreated, may cause the stye infection to grow.',
            'A stye is identified as a small, red, uncomfortable bump which develops from bacteria infecting an eyelid gland or an eyelash follicle.',
            'If you are experiencing pain, irritation, swelling and discomfort, we offer an all-inclusive private consultation where our specialist will diagnose your stye condition by carrying out relevant eye scans and assessments.',
            'Your specialist will prepare you for your treatment day and will answer any questions you may have about your condition and treatment.',
            <strong className="text-[1.8rem] leading-[2.8rem]">
                Find out more about our stye removal treatment today
            </strong>,
            <>
                <BulletList
                    className="!ml-0 mt-6"
                    bulletPoint={
                        <Image
                            src="/images/icons/icon-arrow-right.svg"
                            alt=""
                            width={24}
                            height={24}
                            className="h-[1.4rem] w-[1.4rem] translate-y-3"
                        />
                    }
                    list={[
                        <strong className="text-[1.8rem] leading-[2.8rem]">
                            Private Consultation Cost <strong className="text-[2rem]">£200</strong>
                        </strong>,
                        <strong className="text-[1.8rem] leading-[2.8rem]">
                            Stye Removal Treatment Cost From <strong className="text-[2rem]">£350</strong>
                        </strong>
                    ]}
                />
            </>,
            <div className="mt-6">
                <BookConsultation buttonClassName="group/consultation transition-all border-2 border-heading2 duration-500 hover:bg-transparent grid cursor-pointer px-8 py-6 place-items-center grid-flow-col gap-5 bg-heading2 rounded-primary">
                    <button className="" aria-label="Request a callback">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M13.334 1.66699V5.00033"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M6.66602 1.66699V5.00033"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M2.5 8.33301H17.5"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                        </svg>

                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem] text-white transition-all duration-500 group-hover/consultation:text-heading2">
                            Request a callback
                        </span>
                    </button>
                </BookConsultation>
            </div>
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/ptosis-surgery-large.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/ptosis-surgery-large.png"
                width={711}
                height={522}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        sectionId: 'ptosis-surgery',
        alternativeHeading: <></>,
        descriptions: [
            <>
                <H3Variant3>
                    Ptosis surgery <span className="text-[1.8rem] leading-[2.8rem]">(correcting upper eyelid)</span>
                </H3Variant3>
            </>,
            'Ptosis is identified as a condition which causes the upper eyelid to droop, sometimes blocking and restricting vision. This is commonly caused by nerve damage in the eye, which can affect the eye’s muscle strength.',
            'If you can identify with Ptosis or have been already diagnosed with the condition, our oculoplastic surgeon can relieve your symptoms and correct the excess skin by shortening the muscles and tendons to raise the eyelid, restoring your ability to see and restore the symmetry between your upper eyelids.',
            'We provide a private consultation with our specialist, inclusive of all relevant eye scans and assessments with a confirmed diagnosis of your condition. Once you are seen by our specialist, they will answer and advise you on any questions you may have and will prepare you for your treatment day. Your specialist will be dedicated to your consultation and surgery, and will answer any questions you may have about your condition and treatment.',
            <strong className="text-[2rem] leading-[2.8rem]">Find out more about our Ptosis surgery today</strong>,
            <strong>Private Consultation Cost £200</strong>,
            <strong>Ptosis Treatment Cost From £3,500</strong>,
            <div className="mt-6">
                <BookConsultation buttonClassName="group/consultation transition-all border-2 border-heading2 duration-500 hover:bg-transparent grid cursor-pointer px-8 py-6 place-items-center grid-flow-col gap-5 bg-heading2 rounded-primary">
                    <button className="" aria-label="Request a callback">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M13.334 1.66699V5.00033"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M6.66602 1.66699V5.00033"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M2.5 8.33301H17.5"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                        </svg>

                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem] text-white transition-all duration-500 group-hover/consultation:text-heading2">
                            Request a callback
                        </span>
                    </button>
                </BookConsultation>
            </div>
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/pterygium-surgery-large.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/pterygium-surgery-large.png"
                width={711}
                height={522}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        alternativeHeading: <></>,
        descriptions: [
            <>
                <H3Variant3>
                    Pterygium Surgery{' '}
                    <span className="text-[1.8rem] leading-[2.8rem]">
                        (removing extra tissue from the eyes surface)
                    </span>
                </H3Variant3>
            </>,
            'We offer Pterygium surgery to remove the overgrowth of the conjunctiva tissue, which develops at the front of the eye’s surface. In extreme cases, Pterygium can cause vision loss if left untreated and is generally experienced with irritation, inflammation and continual growth of the tissue.',
            'Our oculoplastic surgeon will remove the overgrown tissue on the eye’s surface and permanently implant a healthy graft of tissue in order to prevent any future growth of eye tissue.',
            'At our clinic, we offer a private consultation, all-inclusive of relevant eye scans and assessments, for our specialist to diagnose your condition and prepare you for your treatment day. Your specialist will be dedicated to your consultation and surgery and will answer any questions you may have about your condition and treatment.',
            <strong className="text-[1.8rem] leading-[2.8rem]">Find out more about our Pterygium surgery today</strong>,
            <>
                <BulletList
                    className="!ml-0 mt-6"
                    bulletPoint={
                        <Image
                            src="/images/icons/icon-arrow-right.svg"
                            alt=""
                            width={24}
                            height={24}
                            className="h-[1.4rem] w-[1.4rem] translate-y-3"
                        />
                    }
                    list={[
                        <strong className="text-[1.8rem] leading-[2.8rem]">
                            Private Consultation Cost <strong className="text-[2rem]">£200</strong>
                        </strong>,
                        <strong className="text-[1.8rem] leading-[2.8rem]">
                            Pterygium Treatment Cost From <strong className="text-[2rem]">£1,900</strong>
                        </strong>
                    ]}
                />
            </>,
            <div className="mt-6">
                <BookConsultation buttonClassName="group/consultation transition-all border-2 border-heading2 duration-500 hover:bg-transparent grid cursor-pointer px-8 py-6 place-items-center grid-flow-col gap-5 bg-heading2 rounded-primary">
                    <button className="" aria-label="Request a callback">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M13.334 1.66699V5.00033"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M6.66602 1.66699V5.00033"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M2.5 8.33301H17.5"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                        </svg>

                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem] text-white transition-all duration-500 group-hover/consultation:text-heading2">
                            Request a callback
                        </span>
                    </button>
                </BookConsultation>
            </div>
        ]
    }
];

export const leftRightListCosmeticEyelid: Array<LeftRightSectionChildrenInterface> = [
    {
        mobileImage: (
            <Image
                src="/images/section-images/cosmetic-eyelid-surgery-large.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/cosmetic-eyelid-surgery-large.png"
                width={695}
                height={580}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        alternativeHeading: <TextColumn h3LightHeading="Cosmetic" h3BoldHeading="Eyelid Surgery" />,
        descriptionClassName: 'md:ml-9 md:mt-6',
        descriptions: [
            <>
                <H3Variant3>
                    Show the beauty of your eyes to the rest of the world with our cosmetic eyelid surgeries.
                </H3Variant3>
            </>,
            <>
                <strong>Eyebrow lift</strong> (used to address droopy or heavy eyebrows)
            </>,
            'Eyebrow lifts are a painless cosmetic procedure that will restore a natural, beautiful and symmetrical appearance. Our oculoplastic surgeon will make a small incision in the temporal side of your eye hidden inside the hairline to lift the temporal part of the brow.',
            'An eyebrow lift is a stress-free procedure which our specialist will discuss with you at your private consultation to prepare you for your treatment day.',
            <strong className="text-[1.8rem] leading-[2.8rem]">
                Find out more about our eyebrow lift treatment today
            </strong>,
            <>
                <BulletList
                    className="!ml-0 mt-6"
                    bulletPoint={
                        <Image
                            src="/images/icons/icon-arrow-right.svg"
                            alt=""
                            width={24}
                            height={24}
                            className="h-[1.4rem] w-[1.4rem] translate-y-3"
                        />
                    }
                    list={[
                        <strong className="text-[1.8rem] leading-[2.8rem]">
                            Private Consultation Cost <strong className="text-[2rem]">£200</strong>
                        </strong>,
                        <strong className="text-[1.8rem] leading-[2.8rem]">
                            Eyebrow Lift Treatment Cost From <strong className="text-[2rem]">£3,500</strong>
                        </strong>
                    ]}
                />
            </>,
            <div className="mt-6">
                <BookConsultation buttonClassName="group/consultation transition-all border-2 border-heading2 duration-500 hover:bg-transparent grid cursor-pointer px-8 py-6 place-items-center grid-flow-col gap-5 bg-heading2 rounded-primary">
                    <button className="" aria-label="Request a callback">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M13.334 1.66699V5.00033"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M6.66602 1.66699V5.00033"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M2.5 8.33301H17.5"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                        </svg>

                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem] text-white transition-all duration-500 group-hover/consultation:text-heading2">
                            Request a callback
                        </span>
                    </button>
                </BookConsultation>
            </div>
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/blepharoplasty-large.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/blepharoplasty-large.png"
                width={544}
                height={392}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        alternativeHeading: <></>,
        descriptions: [
            <>
                <H3Variant3>
                    Blepharoplasty <span className="text-[1.8rem] leading-[2.8rem]">(eyelid reduction)</span>
                </H3Variant3>
            </>,
            'Blepharoplasty is a surgical procedure we offer at our clinic to reduce excess sagging, wrinkles and baggy skin which develops under the eyes. This cosmetic treatment is very common and reshapes the eyelids for a healthy, natural and refreshed appearance.',
            'We offer an all-inclusive, private consultation with our specialist, who will advise and talk you through the cosmetic treatment.',
            'They will talk you through your expectations, your preparations for treatment and what to expect on the surgery day.',
            <strong className="text-[2rem] leading-[2.8rem]">
                Find out more about our eyelid reduction treatment today
            </strong>,
            <strong className="text-[1.8rem] leading-[2.8rem]">Private Consultation Cost £200</strong>,
            <strong className="text-[1.8rem] leading-[2.8rem]">Blepharoplasty Treatment Cost From £3,000</strong>,
            <>
                <strong>Ptosis surgery</strong> (shortening the muscles or tendons that raise the eyelid)
            </>,
            <div className="mt-6">
                <BookConsultation buttonClassName="group/consultation transition-all border-2 border-heading2 duration-500 hover:bg-transparent grid cursor-pointer px-8 py-6 place-items-center grid-flow-col gap-5 bg-heading2 rounded-primary">
                    <button className="" aria-label="Request a callback">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M13.334 1.66699V5.00033"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M6.66602 1.66699V5.00033"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M2.5 8.33301H17.5"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                        </svg>

                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem] text-white transition-all duration-500 group-hover/consultation:text-heading2">
                            Request a callback
                        </span>
                    </button>
                </BookConsultation>
            </div>
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/blepharospasm-botox-large.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/blepharospasm-botox-large.png"
                width={544}
                height={392}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        alternativeHeading: <></>,
        sectionId: 'blepharospasm-botox',
        descriptions: [
            <>
                <H3Variant3>
                    Blepharospasm botox injections{' '}
                    <span className="text-[1.8rem] leading-[2.8rem]">(correcting involuntary spasms of the eyes)</span>
                </H3Variant3>
            </>,
            'Eye squint spasm symptoms (commonly known as ‘blepharospasm’) can be corrected with our botox injections. Our oculoplastic surgeon will treat your involuntary spasms by blocking the nerve signals with botox. Botox for blepharospasm lasts for 2-3 months.',
            'Squints can be caused by many reasons, which vary from previous surgery, trauma to the eyes, previous illness, developmental complications, uncorrected longsightedness (hyperopia), nearsightedness, myopia or astigmatism and/or weak muscles and nerves. Squints can cause headaches, double vision and an appearance of misaligning (crossed) eyes.',
            'By choosing to correct your squint through blepharospasm injections, our oculoplastic surgeon will help reduce any symptoms that are causing you irritation such as: Double vision, eye strain, headaches, difficulty in peripheral vision and eye appearance.',
            <strong className="text-[1.8rem] leading-[2.8rem]">
                Find out more about our Blepharospasm injections today
            </strong>,
            <>
                <BulletList
                    className="!ml-0 mt-6"
                    bulletPoint={
                        <Image
                            src="/images/icons/icon-arrow-right.svg"
                            alt=""
                            width={24}
                            height={24}
                            className="h-[1.4rem] w-[1.4rem] translate-y-3"
                        />
                    }
                    list={[
                        <strong className="text-[1.8rem] leading-[2.8rem]">
                            Private Consultation Cost <strong className="text-[2rem]">£200</strong>
                        </strong>,
                        <strong className="text-[1.8rem] leading-[2.8rem]">
                            Blepharospasm botox injections From <strong className="text-[2rem]">£550</strong>
                        </strong>
                    ]}
                />
            </>,
            <div className="mt-6">
                <BookConsultation buttonClassName="group/consultation transition-all border-2 border-heading2 duration-500 hover:bg-transparent grid cursor-pointer px-8 py-6 place-items-center grid-flow-col gap-5 bg-heading2 rounded-primary">
                    <button className="" aria-label="Request a callback">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M13.334 1.66699V5.00033"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M6.66602 1.66699V5.00033"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M2.5 8.33301H17.5"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                        </svg>

                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem] text-white transition-all duration-500 group-hover/consultation:text-heading2">
                            Request a callback
                        </span>
                    </button>
                </BookConsultation>
            </div>
        ]
    }
];

export const leftRightListYag: Array<LeftRightSectionChildrenInterface> = [
    {
        mobileImage: (
            <Image
                src="/images/section-images/yag-consultation.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/yag-consultation-large.png"
                width={677}
                height={484}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        title: `Consultation`,
        descriptions: [
            <>
                After having your <LinkStyle url="/cataract">cataract surgery,</LinkStyle> some people may experience
                PCO symptoms 1-5 years after treatment. This is completely normal and nothing to worry about.
            </>,
            'Once you have had treatment to permanently get rid of any blurry vision, your natural vision will restore and PCO will never return again. This is due to the thickening of the capsule in your eye. This haze can be removed by the use of our YAG Laser treatment in just 60 seconds!'
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/yag-treatment.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/yag-treatment-large.png"
                width={677}
                height={484}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        title: `Treatment`,
        descriptions: [
            'Our YAG laser eye surgery is a completely painless treatment which takes 5-10 minutes in total. When you come for your treatment, this laser is used to create a visual pathway in the center of the capsule that is thickening and clouding your vision. This will support the lens implant again, restoring the vision you had previously.',
            'When you arrive at our clinic, our friendly nurse will speak with you before the treatment in case you have any questions. They will apply anaesthetic eye drops into your eyes to dilate your pupils to make sure your eyes are completely numb, making our YAG laser treatment completely painless.',
            'Our nurse will welcome you into our laser suite where you will meet the laser specialist who will perform your treatment. Our YAG laser is attached to a slit-lamp microscope and is used to divide the thickened membranes in your eye. This is considered a very minimally invasive surgery because our laser does not damage the eye in any way and you may only experience blurred vision after the YAG procedure which is completely normal. This post-procedure blurriness can take up to a few hours to clear which is why you will need to arrange transport home as you will not be able to drive until your vision is clear again.'
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/yag-aftercare.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/yag-aftercare-large.png"
                width={677}
                height={484}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        title: `Aftercare`,
        descriptions: [
            `We want nothing more than for you to feel comfortable after your laser surgery! Yag Laser capsulotomy treatment is one of our easiest laser procedures to recover from as we do not require you to attend any follow-up appointments unless you are having treatment for another eye condition. YAG laser eye surgery is also very efficient because once you have had the procedure you will have a short recovery period of 1-2 days. During this time, our team is always here to help with any other questions you may have about life after your surgery.`
        ]
    }
];

export const leftRightListPaediatric: Array<LeftRightSectionChildrenInterface> = [
    {
        mobileImage: (
            <Image
                src="/images/section-images/paediatric-consultation.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/paediatric-consultation-large.png"
                width={677}
                height={484}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        title: `Paediatric consultation`,
        descriptions: [
            'A private consultation with our Paediatric eye specialist will be all-inclusive of eye scans, assessments and one-to-one diagnosis with your dedicated Paediatric ophthalmologist.',
            "Our ophthalmologist will explain your child's eye condition and discuss the potential treatment options your child may need if they are showing early and/or progressive signs of any condition."
        ]
    }
];

export const leftRightListPaediatricAftercare: Array<LeftRightSectionChildrenInterface> = [
    {
        mobileImage: (
            <Image
                src="/images/section-images/paediatric-aftercare.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/paediatric-aftercare-large.png"
                width={677}
                height={484}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        title: `Paediatric Aftercare`,
        alternativeHeading: <PaediatricHeading />,
        descriptions: [
            'If your child is required for an aftercare appointment to monitor the progress of any treatment prescribed by our Paediatric specialist, we will book your child this appointment date before you finish your visit with us.'
        ]
    }
];

export const leftRightListCornealTreatments: Array<LeftRightSectionChildrenInterface> = [
    {
        mobileImage: (
            <Image
                src="/images/section-images/keranatural-surgery-large.jpg"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/keranatural-surgery-large.jpg"
                width={695}
                height={580}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        alternativeHeading: (
            <TextColumn
                h3LightHeading={
                    <>
                        Treatments we offer
                        <br />
                    </>
                }
                h3BoldHeading="for corneal conditions"
            />
        ),
        descriptionClassName: 'md:ml-9 md:mt-6',
        descriptions: [
            <>
                <H3Variant3>
                    Keranatural Surgery for Keratoconus{' '}
                    <span className="text-[1.8rem] leading-[2.8rem]">(allograft corneal ring implantation)</span>
                </H3Variant3>
            </>,
            'KeraNatural corneal ring implantation is an advanced alternative treatment to keraring surgery. Keraring surgery is an implantation of intra-corneal ring segments (ICRS) which improve the corneas shape.',
            '. KeraNatural allograft corneal rings improves unaided and aided visual acuity in most patient cases without the complications associated with plastic intrastromal corneal rings such as: corneal melting, ring extrusion and intrusion, and sight-threatening complications like microbial keratitis.',
            <div className="mt-6">
                <BookConsultation buttonClassName="group/consultation transition-all border-2 border-heading2 duration-500 hover:bg-transparent grid cursor-pointer px-8 py-6 place-items-center grid-flow-col gap-5 bg-heading2 rounded-primary">
                    <button className="" aria-label="Request a callback">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M13.334 1.66699V5.00033"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M6.66602 1.66699V5.00033"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M2.5 8.33301H17.5"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                        </svg>

                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem] text-white transition-all duration-500 group-hover/consultation:text-heading2">
                            Request a callback
                        </span>
                    </button>
                </BookConsultation>
            </div>
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/corneal-cross-linking-large.jpg"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/corneal-cross-linking-large.jpg"
                width={711}
                height={522}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        alternativeHeading: <></>,
        descriptions: [
            <>
                <H3Variant3>Corneal cross-linking surgery</H3Variant3>
            </>,
            'Cross-linking is an early surgical intervention to treat keratoconus which decreases the chance of needing invasive corneal surgeries.',
            'Cross-linking surgery strengthens the collagen fibers in your cornea to prevent your Keratoconus from worsening.',
            'Our cornea surgeon uses special eye drops and ultraviolet A(UVA) light to help the damaged tissue in your cornea grow stronger.',
            'This procedure stops the bulge of your eye from getting any worse as it adds special bonds that work like support beams to help the cornea strengthen.',
            'Keratoconus Glasses and Contact Lenses are used to help you see once your Keratoconus has affected your vision.',
            'However, Keratoconus glasses and contact lenses do not prevent the condition of Keratoconus from getting worse.',
            'This is why cross-linking is used as an early surgical intervention to treat the condition before keratoconus progresses any further.',
            <div className="mt-6">
                <BookConsultation buttonClassName="group/consultation transition-all border-2 border-heading2 duration-500 hover:bg-transparent grid cursor-pointer px-8 py-6 place-items-center grid-flow-col gap-5 bg-heading2 rounded-primary">
                    <button className="" aria-label="Request a callback">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M13.334 1.66699V5.00033"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M6.66602 1.66699V5.00033"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M2.5 8.33301H17.5"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                        </svg>

                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem] text-white transition-all duration-500 group-hover/consultation:text-heading2">
                            Request a callback
                        </span>
                    </button>
                </BookConsultation>
            </div>
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/lamellar-corneal-large.jpg"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/lamellar-corneal-large.jpg"
                width={544}
                height={392}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        alternativeHeading: <></>,
        descriptions: [
            <>
                <H3Variant3>
                    Lamellar Corneal Graft{' '}
                    <span className="text-[1.8rem] leading-[2.8rem]">
                        (optical keratoplasty/ tectonic keratoplasty)
                    </span>
                </H3Variant3>
            </>,
            'A Lamellar corneal graft is a minimally invasive surgery which replaces the anterior layer of the cornea with new cornea tissue. This surgery strengthens the corneas structure and can improve vision.',
            <div className="mt-6">
                <BookConsultation buttonClassName="group/consultation transition-all border-2 border-heading2 duration-500 hover:bg-transparent grid cursor-pointer px-8 py-6 place-items-center grid-flow-col gap-5 bg-heading2 rounded-primary">
                    <button className="" aria-label="Request a callback">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M13.334 1.66699V5.00033"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M6.66602 1.66699V5.00033"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M2.5 8.33301H17.5"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                        </svg>

                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem] text-white transition-all duration-500 group-hover/consultation:text-heading2">
                            Request a callback
                        </span>
                    </button>
                </BookConsultation>
            </div>
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/placeholder-image.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/placeholder-image.png"
                width={711}
                height={522}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        alternativeHeading: <></>,
        descriptions: [
            <>
                <H3Variant3>
                    CAIRS{' '}
                    <span className="text-[1.8rem] leading-[2.8rem]">
                        (corneal alloplastic intrastromal ring segment).
                    </span>
                </H3Variant3>
            </>,
            'CAIRS intrastromal corneal ring segments are sourced from human donor corneal tissue and implanted in your eye to strengthen your cornea.',
            'CAIRS can be combined with corneal cross-linking to make this treatment more successful.',
            'CAIRS avoids possible complications that are associated with implanting synthetic material in the cornea such as: corneal melting, ring extrusion and intrusion, corneal necrosis; and infection.',
            <div className="mt-6">
                <BookConsultation buttonClassName="group/consultation transition-all border-2 border-heading2 duration-500 hover:bg-transparent grid cursor-pointer px-8 py-6 place-items-center grid-flow-col gap-5 bg-heading2 rounded-primary">
                    <button className="" aria-label="Request a callback">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M13.334 1.66699V5.00033"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M6.66602 1.66699V5.00033"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M2.5 8.33301H17.5"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                        </svg>

                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem] text-white transition-all duration-500 group-hover/consultation:text-heading2">
                            Request a callback
                        </span>
                    </button>
                </BookConsultation>
            </div>
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/placeholder-image.png"
                width={390}
                height={390}
                quality={70}
                className="rounded-primary md:hidden"
                alt=""
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/placeholder-image.png"
                width={544}
                height={392}
                quality={70}
                className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                alt=""
            />
        ),
        alternativeHeading: <></>,
        descriptions: [
            <>
                <H3Variant3>
                    DMEK{' '}
                    <span className="text-[1.8rem] leading-[2.8rem]">
                        (Descemet's Membrane Endothelial Keratoplasty)
                    </span>
                </H3Variant3>
            </>,
            "DMEK is a Keratoplasty procedure which maintains the tensile strength of the cornea to restore clear, natural vision. DMEk helps restore symptoms of corneal endothelial diseases such as: Fuchs' dystrophy.",
            'This procedure is a minimally invasive surgery where only the posterior layer of the corneal is replaced as opposed to translanting the anterior chamber of your eye.',
            <div className="mt-6">
                <BookConsultation buttonClassName="group/consultation transition-all border-2 border-heading2 duration-500 hover:bg-transparent grid cursor-pointer px-8 py-6 place-items-center grid-flow-col gap-5 bg-heading2 rounded-primary">
                    <button className="" aria-label="Request a callback">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M13.334 1.66699V5.00033"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M6.66602 1.66699V5.00033"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M2.5 8.33301H17.5"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                        </svg>

                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem] text-white transition-all duration-500 group-hover/consultation:text-heading2">
                            Request a callback
                        </span>
                    </button>
                </BookConsultation>
            </div>
        ]
    }
];
