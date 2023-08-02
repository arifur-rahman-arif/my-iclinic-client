require('dotenv').config();
const algoliasearch = require('algoliasearch');
const striptags = require('striptags');

if (!process.env?.NEXT_PUBLIC_ALGOLIA) return;

const indexName = process.env.NEXT_PUBLIC_ALGOLIA ? 'My-iClinic' : 'My-iClinic-dev';

const client = algoliasearch('LFKQJW9O2S', '47d64d3c035e3b58c0efafcc0d89e6ed');
const index = client.initIndex(indexName);

/**
 * Slice big string into smaller pieces of string
 *
 * @param {string} string
 * @returns {*[]}
 */
const sliceStringByWordsAndSizeLimit = (string) => {
    const words = string.split(' ');
    const totalWords = words.length;
    const result = [];
    let currentSize = 0;

    for (let i = 0; i < totalWords; i += 500) {
        const limitedWords = words.slice(i, i + 500);
        const limitedString = limitedWords.join(' ');
        const limitedSize = limitedString.length;

        if (currentSize + limitedSize > 10000) {
            break; // Stop if adding the next string would exceed the size limit
        }

        result.push(limitedString);
        currentSize += limitedSize;
    }

    return result;
};
/**
 * Get the post in formatted way
 * @returns {Promise<*>}
 */
const getPosts = async () => {
    const apiResponse = await fetch(`${process.env.WP_REST_URL}/posts?_fields=id,title,content,slug&per_page=100`, {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Authorization: `Bearer ${process.env.WP_JWT_TOKEN}`
        }
    });

    if (apiResponse.status !== 200) {
        throw new Error('Unable to fetch WordPress posts. Error text: ' + apiResponse.statusText);
    }

    const data = await apiResponse.json();

    return data.map((post) => ({
        objectID: post.id,
        title: post?.title?.rendered || '',
        content: sliceStringByWordsAndSizeLimit(striptags(post?.content?.rendered)),
        section: `/articles/${post.slug}`,
        type: 'article'
    }));
};

getPosts().then((data) => {
    index
        .saveObjects(data)
        .then((res) => {
            console.log('Articles saved');
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
});

const getSpecialistsPost = async () => {
    const apiResponse = await fetch(
        `${process.env.WP_REST_URL}/specialist?_fields=id,title,content,slug,acf&per_page=50`,
        {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                Authorization: `Bearer ${process.env.WP_JWT_TOKEN}`
            }
        }
    );

    const posts = await apiResponse.json();

    return posts.map((post) => {
        return {
            objectID: post.id,
            title: post?.title?.rendered || '',
            designation: post.acf.specialist_data.degree || '' + ' ' + post.acf.specialist_data.title || '',
            content: sliceStringByWordsAndSizeLimit(striptags(post?.content?.rendered)),
            section: `/our-specialists/${post.slug}`,
            type: 'specialist'
        };
    });
};

getSpecialistsPost().then((data) => {
    index
        .saveObjects(data)
        .then((res) => {
            console.log('Specialist saved');
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
});

const objects = [
    {
        objectID: 1,
        title: "North London's Private Eye Clinic",
        content: ['Premium eye care for all the family'],
        section: '/'
    },
    {
        objectID: 2,
        image: '/images/section-images/eye-care-service-card-1.png',
        title: 'ReLEx SMILE',
        content: [
            'Age 20 - 39',
            'The best treatment for',
            'life without glasses or contact lenses',
            'No more compromise.'
        ],
        subheader: 'Private Eye Care Services',
        section: '/relex-smile-london'
    },
    {
        objectID: 3,
        image: '/images/section-images/eye-care-service-card-2.png',
        title: 'Cataract Treatment',
        content: ['Age 55+', 'Best treatment for', 'removing cloudy vision.', 'Restoring clear, natural vision.'],
        subheader: 'Private Eye Care Services',
        section: '/cataract'
    },
    {
        objectID: 4,
        image: '/images/section-images/eye-care-service-card-3.png',
        title: 'Presbyond Treatment',
        content: [
            'Age 40+',
            'The best treatment for freedom from spectacles. See at all distances without glasses',
            'Be free from glasses after cataract surgery'
        ],
        subheader: 'Private Eye Care Services',
        section: '/presbyond-london#treatments'
    },
    {
        objectID: 5,
        image: '/images/section-images/eye-care-service-card-4.png',
        title: 'Implantable Contact Lenses',
        content: [
            'Age 20+',
            'Best treatment',
            'for life without glasses.',
            'Be active without risk of contact lens infections.'
        ],
        subheader: 'Private Eye Care Services',
        section: '/icl'
    },
    {
        objectID: 6,
        image: '/images/section-images/eye-care-service-card-5.png',
        title: 'Glaucoma Care',
        content: [
            'Age 40+',
            'Best treatment for all',
            'glaucoma types.',
            'Get bespoke treatment to manage your glaucoma.'
        ],
        subheader: 'Private Eye Care Services',
        section: '/glaucoma-treatment'
    },
    {
        objectID: 7,
        image: '/images/section-images/eye-care-service-card-6.png',
        title: 'Myopia Control Clinic for Children',
        content: [
            'Age 3+',
            'Best treatment for',
            'slowing down the progression of myopia.',
            'Atropine eye drops available.'
        ],
        subheader: 'Private Eye Care Services',
        section: '/myopia'
    },
    {
        objectID: 8,
        title: 'Are You Considering Vision Correction Treatment?',
        content: [
            'We have the latest vision correction treatments to achieve clear vision at all distances for all ages.',
            'Book your FREE suitability check today to find out if you are suitable for our ReLEx SMILE, Presbyond, Implantable Contact Lenses or LASIK vision correction treatments.'
        ],
        section: '/#considering'
    },
    {
        objectID: 9,
        title: 'Saving Vision',
        content: [
            'Safely care for your eyes',
            'Your eye health is important. Vision Correction Treatments provide:',
            'A no risk of contact lens infections, dry eyes or blindness.'
        ],
        image: '/images/section-images/offscreen-slider-image-1.png',
        section: '/#saving'
    },
    {
        objectID: 10,
        title: 'Saving Money',
        content: [
            'A one-time purchase for clear, natural vision',
            'Spend less on vision correction than you currently are with contact lenses and glasses.',
            'One Laser Eye Surgery or Implantable Contact Lens treatment saves the average glasses & contact lens wearer £13,000+ for the future.',
            'Calculate your treatment with our 24 months finance calculator'
        ],
        image: '/images/section-images/offscreen-slider-image-2.png',
        section: '/#saving'
    },
    {
        objectID: 11,
        title: 'Saving Time',
        content: [
            'Where are my glasses? Where are my contacts?',
            'Wake up in the morning with your eyes ready before you are!'
        ],
        image: '/images/section-images/offscreen-slider-image-3.png',
        section: '/#saving'
    },
    {
        objectID: 12,
        title: 'Saving Your Planet',
        content: [
            'Getting rid of plastic waste',
            '16,000 million tonnes of plastic is wasted by wearing glasses and disposable contact lenses. Our vision correction treatments are a great long-term investment for permanently clear vision without any more plastic waste.',
            'Reducing our carbon footprint'
        ],
        image: '/images/section-images/offscreen-slider-image-4.png',
        section: '/#saving'
    },
    {
        objectID: 13,
        title: 'Begin your care Journey',
        content: [
            'Easy booking with our patient care liaison',
            'Accessible resources available from our specialists',
            'Detailed understanding & instructions given before your private consultation'
        ],
        image: '/images/section-images/journey-slider-image-1.png',
        section: '/#journey'
    },
    {
        objectID: 14,
        title: 'Private Consultation',
        content: [
            'Comprehensive eye assessments and scans',
            'One-to-one with your dedicated ophthalmologist',
            'Understanding your best treatment options'
        ],
        image: '/images/section-images/journey-slider-image-2.png',
        section: '/#journey'
    },
    {
        objectID: 15,
        title: 'Quality care & private treatment',
        content: [
            'Guidance from our friendly team & clinic nurses',
            'Comfortable, stress-free treatment in our private suites',
            'Your ophthalmologist as your dedicated surgeon with over 30+ years experience'
        ],
        image: '/images/section-images/journey-slider-image-3.png',
        section: '/#journey'
    },
    {
        objectID: 16,
        title: 'Aftercare Appointments',
        content: [
            'Free aftercare check ups with your specialist / surgeon',
            'Comprehensive eye assessments & scans',
            'Patient care advice always available'
        ],
        image: '/images/section-images/journey-slider-image-4.png',
        section: '/#journey'
    },
    {
        objectID: 17,
        title: 'Our mission',
        content: [
            'For the past ten years My-iClinic has provided excellent patient care for anybody wanting clear, natural vision.',
            'With leading opthalmologists Mr. Bolger and Ms. Odufuwa-Bolger, our North London team is here to make sure every patient receives the best treatment suitable for their eye health.',
            'We understand how delicate and important our eyes are, which is why we with you through every step of your patient journey.'
        ],
        section: '/#our_mission'
    },
    {
        objectID: 18,
        title: 'Keratoconus treatment London',
        content: ["Keratoconus treatment with London's leading cornea specialists"],
        section: '/keratoconus'
    },
    {
        objectID: 19,
        title: 'London’s best treatment for Keratoconus',
        content: [
            'Keratoconus is a progressive eye condition that affects the development of your cornea (the outer layer of your eyes). Rather than your eye growing in a normal sphere shape, those with Keratoconus develop a cone-shaped cornea that progressively thins, causing a bulge to form on the eye.',
            'This can make it very difficult for the eyes to focus. People who have keratoconus may experience blurry vision, headaches, inflammation in their cornea, frequent changes with their prescription glasses, glares or halos around lights and increased sensitivity to light.',
            'We can provide you with our cross-linking treatment which is the most effective surgical treatment to manage your keratoconus symptoms with our cornea specialist.'
        ],
        image: '/images/section-images/keratoconus.png',
        section: '/keratoconus/#treatment_for_Keratoconus'
    },
    {
        objectID: 20,
        title: 'Understanding your Keratoconus',
        content: [
            'When you arrive for a private consultation you will meet our friendly technician team who will guide you through some eye assessments to measure the thickness of your cornea and check the general health of your eyes.',
            'Our eye assessments take around 1 hour which will inform your specialist of any cornea changes you have experienced and at what progression this may change in the future.',
            'Our cornea specialist will carry out a chorenal typography which measures the curve of your cornea to work out how much astigmatism (impaired eyesight) you have.',
            'They will also measure the thickness of your cornea and If you have already been using keratoconus glasses or hard contact lenses to help correct your sight, it is most likely that you will be suitable for our cross-linking treatment to strengthen the corneal tissue.'
        ],
        image: '/images/section-images/corneal-typography.png',
        subheader: 'Corneal Typography Assessment',
        section: '/keratoconus/#corneal_typography_assessment'
    },
    {
        objectID: 21,
        title: 'Kerataconus treatment and cross-linking surgery',
        content: [
            'The initial treatment for Keratoconus is glasses. However, if the condition worsens, your opticians may suggest hard contact lenses to help correct your sight.',
            'These lenses tend to be thicker and heavier than the soft kind and can also cause your vision to be distorted when you are looking through the edge of the lens.',
            'Despite this, they provide a more even shape to your cornea, which helps improve your ability to focus.',
            'If you are prescribed lenses, you may find that you have to change your glasses frequently. This is because the condition causes your cornea to be thinner and more flexible.'
        ],
        image: '/images/section-images/treatments-for-keratoconus.png',
        subheader: 'treatments for keratoconus',
        section: '/keratoconus/#treatments_for_keratoconus'
    },
    {
        objectID: 22,
        title: 'What is minimally invasive corneal cross-linking surgery?',
        content: [
            'Our specialists may consider corneal cross-linking as the best treatment to help improve your Keratoconus condition. Cross-linking surgery strengthens the collagen fibers in your cornea to prevent your keratoconus from worsening.',
            'Our cornea surgeon uses special eye drops and ultraviolet A(UVA) light to help the damaged tissue in your cornea grow stronger.',
            'This procedure stops the bulge of your eye from getting any worse as it adds special bonds that work like support beams to help the cornea strengthen.'
        ],
        image: '/images/section-images/cross-linking-surgery.png',
        section: '/keratoconus/#corneal_cross_linking'
    },
    {
        objectID: 23,
        title: 'Eliminating invasive surgeries',
        content: [
            'Cross-linking is an early surgical intervention which decreases the chance of needing invasive corneal surgeries in the future to prevent the eye from being at risk of blindness.',
            'Kerataconus Glasses and Contact Lenses are used to help you see once your keratoconus has affected your vision. However, keratoconus glasses and contact lenses do not prevent the condition of keratoconus from getting worse.',
            'This is why cross-linking is used as an early surgical intervention to treat the condition before it progresses any further.'
        ],
        subheader: 'Why you should consider cross-linking at My-iClinic',
        section: '/keratoconus/#cross_linking_at_My_iClinic'
    },
    {
        objectID: 24,
        title: 'A minimally invasive treatment',
        content: [
            'Cross-linking is a minimally invasive surgery which means your eye health is better protected against other future corneal procedures which require larger incisions.',
            'Invasive surgeries can cause more complications with a longer recovery period whereas a minimally invasive surgery is easier and safer with a shorter recovery period.'
        ],
        subheader: 'Why you should consider cross-linking at My-iClinic',
        section: '/keratoconus/#cross_linking_at_My_iClinic'
    },
    {
        objectID: 25,
        title: 'Long term improvement',
        content: [
            'Your natural vision will be better protected. Kerataconus is a condition that worsens overtime and can cause a risk of blindness in the future.',
            'You may achieve a visual improvement in your sight, although visual improvements are not the success of corneal cross-linking surgery.'
        ],
        subheader: 'Why you should consider cross-linking at My-iClinic',
        section: '/keratoconus/#cross_linking_at_My_iClinic'
    },
    {
        objectID: 26,
        title: 'Cornea transplant at My-iClinic',
        content: [
            'A cornea transplant (often known as Keratoplasty or a corneal graft) is a surgery we offer to protect the eyes from severe cases of progressive Keratoconus.',
            'If your case of keratoconus worsens, it is likely that you will become intolerant to visual aids such as: glasses and/or contact lenses.',
            'Our cornea specialist will be able to assess whether a corneal transplant will be a suitable treatment and will remove the damaged area of your cornea, replacing this with donor tissue.',
            'A corneal transplant can significantly reduce the risk of vision loss and improve the health of your eyes for improving vision.'
        ],
        image: '/images/section-images/cta-keratoconus.png',
        section: '/keratoconus/#cornea_transplant'
    },
    {
        objectID: 27,
        title: 'Lazy eyes in adults & children (amblyopia)',
        section: '/lazy-eyes-treatement'
    },
    {
        objectID: 28,
        title: 'Lazy eyes (amblyopia) in children and adults',
        content: [
            "A lazy eye (amblyopia) appears as an eye which turns inward or outward, usually occurring in a child's early development.",
            'This lazy eye causes vision problems and potential vision loss in the future and can be caused by a family history of amblyopia, a refractive error and/or an imbalance in the eye muscles (misalignment of the eyes).'
        ],
        image: '/images/section-images/vision-correction-lazy-eyes.png',
        subheader: 'Correct your vision',
        section: '/lazy-eyes-treatement/#correct_your_vision'
    },
    {
        objectID: 29,
        title: 'Diagnosis and treatment for a Lazy eye',
        content: [
            'If your child has a lazy eye, you may be experiencing the following symptoms:',
            'Blurry and distorted vision',
            'Deficient depth perception',
            'Double vision',
            'Tired, heavy eyes',
            'Eye squinting and/or head tilting to view objects',
            'Excessive blinking',
            'We offer a private consultation with our lazy eye specialist to check your current eye condition and to advise on the best treatment to prevent any further vision loss.'
        ],
        image: '/images/section-images/amblyopia-diagnosis.png',
        subheader: 'amblyopia Diagnosis',
        section: '/lazy-eyes-treatement/#amblyopia_Diagnosis'
    },
    {
        objectID: 30,
        title: 'What is included in my private consultation?',
        content: [
            'A private consultation with our ophthalmologist is an all-inclusive cost of £200',
            'This includes: A comprehensive consultation with your dedicated ophthalmologist (inclusive of all eye assessment and eye scans).',
            'A medical diagnosis of your eye condition with treatment planning.',
            'A referral for surgical treatment and/or a signed prescription (if required).',
            'A dedicated eye care team to support you throughout your eye care journey'
        ],
        image: '/images/section-images/amblyopia-consultation.png',
        subheader: 'amblyopia Diagnosis',
        section: '/lazy-eyes-treatement/#amblyopia_Diagnosis'
    },
    {
        objectID: 31,
        title: 'Lazy eye treatment for adults & children',
        content: [
            'Our ophthalmologist will use occlusion therapy to help your vision. Eye patches are used by our ophthalmologist to stimulate the weaker eye and improve vision overtime.',
            'Other treatments such as: eye drops, corrective glasses and contact lenses may be prescribed or recommended as the best treatment for your lazy eye condition.'
        ],
        image: '/images/section-images/lazy-eye-treatment-large.png',
        subheader: 'Lazy eye treatment',
        section: '/lazy-eyes-treatement/#lazy_eye_treatment'
    },
    {
        objectID: 32,
        title: 'Macular Degeneration Treatment London',
        content: ['Monitor your macular degeneration symptoms with our private clinic'],
        section: '/macular-degeneration'
    },
    {
        objectID: 33,
        title: 'Macular degeneration (AMD)',
        content: [
            'Macular degeneration (AMD) is a common age-related eye disease which affects the clarity of your central vision. The incidence of macular degeneration increases with age, and about three people per 1000 over the age of 50 will develop macular degeneration.',
            'Macular degeneration is categorised as an “age-related” eye condition meaning that it occurs mainly in older people.'
        ],
        section: '/macular-degeneration/#macular_degeneration'
    },
    {
        objectID: 34,
        title: 'Diagnosis and treatment for Macular degeneration',
        content: [
            'Understanding Macular Degeneration',
            "The macula is the area of the retina that's responsible for seeing clearly in the centre of your vision.",
            'If you are experiencing blurriness, distortion or blank spots in your central vision, our ophthalmologists can carry out comprehensive eye assessments to check the condition of your eyes and diagnose the type of macular degeneration you are experiencing.',
            'There are two types of macular degeneration conditions:',
            'Dry age-related macular degeneration:',
            'Have a transient (or intermittent) diplopia condition A progression of vision loss over a period of time.',
            'Wet age-related macular degeneration A sudden and rapid progression of vision loss.'
        ],
        subheader: 'diagnosis',
        section: '/macular-degeneration/#diagnosis'
    },
    {
        objectID: 35,
        title: 'Macular degeneration treatment',
        content: [
            'Although there is no definite treatment to reverse any current symptoms of macular degeneration, our ophthalmologist can help prevent or slow the progression of the disease.',
            'After diagnosing your condition, your specialist will begin the treatment process.',
            'If you are diagnosed with wet macular degeneration, your specialist will repeat Anti-VEGF and/or other injections to preserve and stabilise your vision. This treatment will require regular checkups and monitoring of your vision.',
            'Dry macular degeneration requires frequent monitoring and checkups of the eyes. Dry macular degeneration is a less damaging condition for your eyes and does not require injections for treatment.'
        ],
        subheader: 'treatment',
        section: '/macular-degeneration/#treatment'
    },
    {
        objectID: 36,
        title: 'Translation Service',
        content: ['Understand your care journey with us'],
        section: '/translation-service'
    },
    {
        objectID: 37,
        title: 'About My-iClinic',
        content: ['North London’s Eye Hospital'],
        section: '/about-us'
    },
    {
        objectID: 38,
        title: [
            'We are passionate team of skilled ophthalmologists, optometrists, nurses, and support workers.',
            'We bring modern vision correction treatments to all ages above 21.',
            'Our effective, easy and affordable eye treatments brings tremendous joy and freedom to our patients'
        ],
        section: '/about-us/#about_us_section'
    },
    {
        objectID: 39,
        title: 'My-iClinic sources innovative diagnostic equipment, being at the forefront of ophthalmology and eye care treatments.',
        content: [
            'For the past ten years My-iClinic has been providing excellent private eye care treatments to patients from all over the world. My-iClinic partners with a variety of expert manufacturers to deliver bespoke vision correction treatment for ages 21+ and performs cataract, glaucoma, eyelid and corneal surgeries to improve our patients vision.'
        ],
        section: '/about-us/#innovative_diagnostic'
    },
    {
        objectID: 40,
        title: 'Our story',
        content: [
            'Our clinic directors, Mr. John Bolger and Ms. Bola Odufuwa-Bolger, started their care practices over thirty years ago by treating patients in Harley Street, Royal Free Hospital, Moorfields Eye Hospital and more.',
            'As qualified ophthalmic surgeons, they opened their own independent eye care practice, My-iClinic, to make modern vision correction treatments and eye surgeries accessible and affordable for the new generations of vision.'
        ],
        image: '/images/section-images/how-we-started.png',
        subheader: 'How we started',
        section: '/about-us/#how_we_started'
    },
    {
        objectID: 41,
        title: 'Our approach',
        content: [
            'Our approach is very comprehensive with meticulous attention to the best proven surgical interventions. This is so you can be sure that you are receiving the best current treatment in a caring and patient focused setting.'
        ],
        image: '/images/section-images/our-approach.png',
        subheader: 'How we do',
        section: '/about-us/#how_we_do'
    },
    {
        objectID: 42,
        title: 'Our Affordability',
        content: [
            'We offer everything at a fixed price so that you know in advance what the procedure will cost and what is included. Even if the post-operative care takes longer than planned, there are no extra charges.'
        ],
        image: '/images/section-images/no-hidden-cost.png',
        subheader: 'no hidden cost',
        section: '/about-us/#no_hidden_cost'
    },
    {
        objectID: 43,
        title: 'Our Lifelong medical practices & research',
        content: [
            'My-iClinics senior surgical team regularly travel to medical conferences and meetings, both to listen to new ideas and to teach their own.',
            'Our expert team will talk to you with ease about treatments which have evolved in eye care.',
            'The team at My-iClinic sources innovative diagnostic equipment, being at the forefront of ophthalmology and eye care treatments.'
        ],
        image: '/images/section-images/medical-practices.jpg',
        section: '/about-us/#practices_and_research'
    },
    {
        objectID: 44,
        title: 'Our Lifelong medical practices & research',
        content: [
            'My-iClinics senior surgical team regularly travel to medical conferences and meetings, both to listen to new ideas and to teach their own.',
            'Our expert team will talk to you with ease about treatments which have evolved in eye care.',
            'The team at My-iClinic sources innovative diagnostic equipment, being at the forefront of ophthalmology and eye care treatments.'
        ],
        image: '/images/section-images/medical-practices.jpg',
        section: '/about-us/#practices_and_research'
    },
    {
        objectID: 45,
        title: 'Correcting your Astigmatism with Vision Correction Treatment',
        section: '/astigmatism-treatment'
    },
    {
        objectID: 46,
        title: 'Astigmatism in children and adults',
        content: [
            'Astigmatism is a condition which causes blurry vision. Astigmatism develops when the shape of your eye (your cornea or lens) isn’t perfectly round.',
            'This means the light which your eye needs to perceive clear vision bends in the wrong way and refracts in multiple directions, leading to distorted sight and blurry vision.',
            'If you currently wear glasses and/or contact lenses and are still experiencing blurry vision, you may have irregular astigmatism, which can be permanently corrected by our vision correction procedures.'
        ],
        image: '/images/section-images/vision-correction-astigmatism.png',
        subheader: 'Correct your vision',
        section: '/astigmatism-treatment/#correct_your_vision'
    },
    {
        objectID: 47,
        title: 'Diagnosis and vision correction for astigmatism',
        content: [
            'If you or your child is experiencing the following symptoms, you may be experiencing astigmatism:',
            'Blurry, distorted vision',
            'Squinting to see objects in the distance',
            'Difficulty seeing at night',
            'Seeing glares and/or halos around lights',
            'Headaches, eye strain & eye fatigue',
            'Changes in your prescription glasses',
            'We offer a private consultation with our ophthalmologist to check the health of your eye, your prescription and to advise on a suitable treatment for astigmatism that can correct your astigmatism and prevent any further vision loss.'
        ],
        image: '/images/section-images/astigmatism-diagnosis.png',
        subheader: 'astigmatism Diagnosis',
        section: '/astigmatism-treatment/#astigmatism_diagnosis'
    },
    {
        objectID: 48,
        title: 'What is included in my private consultation?',
        content: [
            'A private consultation with our ophthalmologist is an all-inclusive cost of £200',
            'This includes:',
            'A comprehensive consultation with your dedicated ophthalmologist (inclusive of all eye assessment and eye scans).',
            'A medical diagnosis of your eye condition with treatment planning.',
            'A signed prescription (if required) and/or vision correction treatment planning',
            'A dedicated eye care team to support you throughout your eye care journey.',
            'A scheduled astigmatism treatment date to be free from astigmatism without needing glasses and contact lenses.'
        ],
        image: '/images/section-images/astigmatism-consultation.png',
        subheader: 'astigmatism consultation',
        section: '/astigmatism-treatment/#astigmatism_consultation'
    },
    {
        objectID: 49,
        title: 'Astigmatism treatment for children',
        content: [
            "Our children's paediatrician will carry out comprehensive eye assessments to diagnose the cause of your child's astigmatism.",
            'Astigmatism may be present on its own but is typically associated with Myopia. or Hyperopia.',
            'Children with myopia (nearsightedness) or hyperopia (farsightedness) are more likely to have astigmatism.'
        ],
        image: '/images/section-images/children-astigmatism.png',
        subheader: 'Children Astigmatism',
        section: '/astigmatism-treatment/#children_astigmatism'
    },
    {
        objectID: 50,
        title: 'Blepharitis treatment in London',
        content: ['London’s best treatment for Blepharitis symptoms'],
        section: '/blepharitis-treatment'
    },
    {
        objectID: 51,
        title: 'London’s best treatment for Blepharitis symptoms',
        content: [
            "At My iClinic, we understand that Blepharitis can be a difficult condition to manage on your own. That's why we offer comprehensive treatment plans designed to help you manage the symptoms and get back to living a life free of discomfort.",
            'Our Blepharitis treatment specialists provide straightforward, effective solutions tailored to your individual needs.'
        ],
        image: '/images/section-images/blepharitis.png',
        section: '/blepharitis-treatment/#blepharitis_symptoms'
    },
    {
        objectID: 52,
        title: 'Relieve your symptoms with Treatment for Blepharitis',
        content: [
            'Blepharitis is a chronic condition involving the inflammation of your eyelids, leading them to become red and swollen.',
            'Although Blepharitis is not painful in the eye or contagious, it can be very uncomfortable and irritating to anybody experiencing their symptoms getting worse.',
            'We understand how blepharitis can be very stressful and problematic which is why our treatment options for blepharitis are very straightforward and can help ease the stress of facing these symptoms alone.'
        ],
        image: '/images/section-images/symptoms-relieve-large.png',
        subheader: 'symptoms Relieve',
        section: '/blepharitis-treatment/#blepharitis_symptoms'
    },
    {
        objectID: 53,
        title: 'Managing your Blepharitis with treatment',
        content: [
            'Although blepharitis is a chronic condition that needs constant management, we have the most successful treatments to help remission (lessen) your symptoms and relieve you of the stress and worry you might be experiencing with Blepharitis throughout your daily life.',
            'When arriving at a private consultation with us, our blepharitis specialist will guide you through some eye checks which are essential in capturing where the blepharitis is growing and how your blepharitis symptoms can be best treated.'
        ],
        image: '/images/section-images/treatments-for-blepharitis-large.png',
        subheader: 'treatments for blepharitis',
        section: '/blepharitis-treatment/#treatments_for_blepharitis'
    },
    {
        objectID: 54,
        title: 'Don’t suffer with your Blepharitis symptoms we can always help!',
        content: [
            'Although blepharitis is a chronic condition that needs constant management, we have the most successful treatments to help remission (lessen) your symptoms and relieve you of the stress and worry you might be experiencing with Blepharitis throughout your daily life.',
            'When arriving at a private consultation with us, our blepharitis specialist will guide you through some eye checks which are essential in capturing where the blepharitis is growing and how your blepharitis symptoms can be best treated.'
        ],
        subheader: 'we can always help',
        section: '/blepharitis-treatment/#we_can_always_help'
    },
    {
        objectID: 55,
        title: 'Blepharitis Eye drops',
        content: [
            'Our Blepharitis specialist will be able to prescribe you the correct eye drops to reduce any symptoms of irritation, inflammation and itchiness. For more serious conditions, your specialist will prescribe any appropriate treatment needed.'
        ],
        subheader: 'Eye Drops',
        section: '/blepharitis-treatment/#we_can_always_help'
    },
    {
        objectID: 56,
        title: 'Blepharoplasty Surgery',
        content: [
            'Blepharitis surgery (blepharoplasty surgery) is a surgical treatment performed to remove any excess skin that is affecting your eyes.'
        ],
        subheader: 'Surgery',
        section: '/blepharitis-treatment/#we_can_always_help'
    },
    {
        objectID: 57,
        title: 'Other Treatments',
        content: [
            'If your blepharitis specialist believes that your symptoms require another course of treatment they will help and advise you on the best steps you can take.'
        ],
        subheader: 'Treatments',
        section: '/blepharitis-treatment/#we_can_always_help'
    },
    {
        objectID: 58,
        title: 'Conjunctivitis Treatment London',
        section: '/conjuctivitis-treatment-london'
    },
    {
        objectID: 59,
        title: 'Treat your Conjunctivitis symptoms today with our specialist',
        content: [
            'If you have conjunctivitis (also known as ‘Pink Eye’), having the correct diagnosis is essential before treating and managing your symptoms.'
        ],
        image: '/images/section-images/conjunctivitis.png',
        section: '/conjuctivitis-treatment-london/#conjunctivitis'
    },
    {
        objectID: 60,
        title: 'Conjunctivitis Consultation',
        content: [
            'When you visit our clinic, we use our special imaging technology to carry out in-depth eye assessments to capture the health of your eyes, particularly the surface of the conjunctiva.',
            'Our friendly technicians will guide you through these easy assessments to appropriately diagnose your conjunctivitis before meeting your ophthalmologist.',
            'In your private consultation, your ophthalmologist will talk you through your diagnosis and conjunctivitis treatment.'
        ],
        image: '/images/section-images/conjunctivitis-consultation.png',
        section: '/conjuctivitis-treatment-london/#conjunctivitis_consultation'
    },
    {
        objectID: 61,
        title: 'What is included in my private consultation?',
        content: [
            'This includes:',
            'A comprehensive consultation with your dedicated ophthalmologist (inclusive of all eye assessment and eye scans).',
            'A medical diagnosis of your eye condition with treatment planning.',
            'A signed prescription to ease your conjunctivitis symptoms.',
            'A dedicated eye care team to support you throughout your eye care journey.'
        ],
        image: '/images/section-images/conjunctivitis-private-consultation.png',
        subheader: 'Conjunctivitis Consultation',
        section: '/conjuctivitis-treatment-london/#private_consultation'
    },
    {
        objectID: 62,
        title: 'Conjunctivitis Treatment',
        content: [
            'Our ophthalmologist can provide different antibiotics to treat conjunctivitis, depending on the cause of your condition. If you have conjunctivitis, having the correct diagnosis is essential'
        ],
        section: '/conjuctivitis-treatment-london/#conjunctivitis_treatment'
    },
    {
        objectID: 63,
        title: 'Bacterial conjunctivitis',
        content: [
            'Our ophthalmologist will prescribe a short course of antibiotic drops and monitor your eyes until your conjunctivitis is successfully eliminated.'
        ],
        image: '/images/section-images/bacterial-conjunctivitis.png',
        section: '/conjuctivitis-treatment-london/#conjunctivitis_treatment'
    },
    {
        objectID: 64,
        title: 'Viral Conjunctivitis',
        content: [
            'Our ophthalmologist can make viral conjunctivitis symptoms more comfortable for you with lubricating conjunctivitis eye drops.',
            'These eye drops will help remissen your symptoms while the body removes the virus.'
        ],
        image: '/images/section-images/viral-conjunctivitis.png',
        section: '/conjuctivitis-treatment-london/#conjunctivitis_treatment'
    },
    {
        objectID: 65,
        title: 'Allergic Conjunctivitis',
        content: [
            'Allergic conjunctivitis is best treated by avoiding the causative allergen, but if that is not possible, then our ophthalmologist will prescribe anti-allergy drops such as antihistamine.'
        ],
        image: '/images/section-images/allergic-conjunctivitis.png',
        section: '/conjuctivitis-treatment-london/#conjunctivitis_treatment'
    },
    {
        objectID: 66,
        title: 'Contact Us',
        content: ['Our specialist team will reply as soon as possible'],
        section: '/contact-us'
    },
    {
        objectID: 67,
        title: 'Cookie Policy',
        content: [
            'A “cookie” is a piece of information that is stored on your computer’s hard drive and which records how you move your way around a website so that, when you revisit that website, it can present tailored options based on the information stored about your last visit. Cookies can also be used to analyse traffic and for advertising and marketing purposes.',
            'If you want to check or change what types of cookies you accept, this can usually be altered within your browser settings. You can block cookies at any time by activating the setting on your browser that allows you to refuse the setting of all or some cookies. By not blocking cookies and continuing to browse you are authorising the use of cookies. If you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of our site.'
        ],
        subheader: "What's a cookie?",
        section: '/cookie-policy'
    },
    {
        objectID: 68,
        title: 'Cookie Policy',
        content: [
            'A “cookie” is a piece of information that is stored on your computer’s hard drive and which records how you move your way around a website so that, when you revisit that website, it can present tailored options based on the information stored about your last visit. Cookies can also be used to analyse traffic and for advertising and marketing purposes.',
            'If you want to check or change what types of cookies you accept, this can usually be altered within your browser settings. You can block cookies at any time by activating the setting on your browser that allows you to refuse the setting of all or some cookies. By not blocking cookies and continuing to browse you are authorising the use of cookies. If you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of our site.'
        ],
        subheader: "What's a cookie?",
        section: '/cookie-policy'
    },
    {
        objectID: 69,
        title: 'Cornea specialists in London',
        content: ['Corneal eye treatments at My-iClinic'],
        section: '/corneal-treatments'
    },
    {
        objectID: 70,
        title: 'Private consultation for corneal treatments and corneal disease management',
        content: [
            'When visiting My-iClinic you will begin your eye care journey with comprehensive eye assessments to investigate the condition of your cornea.',
            'Corneal eye conditions can be prevented with early surgical intervention and other corneal surgeries we provide in our private clinic.'
        ],
        image: '/images/section-images/private-consultation-corneal-diseases.png',
        section: '/corneal-treatments/#private_consultation'
    },
    {
        objectID: 71,
        title: 'What is included in my private consultation?',
        content: [
            'A private consultation with our ophthalmologist is an all-inclusive cost of £200',
            'This includes:',
            'A comprehensive consultation with your dedicated ophthalmologist (inclusive of all eye assessment and eye scans).',
            'A medical diagnosis of your eye condition with treatment planning.',
            'A referral for surgical treatment and/or a signed prescription (if required).',
            'A dedicated eye care team to support you throughout your eye care journey.'
        ],
        image: '/images/section-images/cornea-consultation-large.png',
        subheader: 'Cornea consultation',
        section: '/corneal-treatments/#private_consultation'
    },
    {
        objectID: 72,
        title: 'Keranatural Surgery for Keratoconus (allograft corneal ring implantation)',
        content: [
            'KeraNatural corneal ring implantation is an advanced alternative treatment to keraring surgery. Keraring surgery is an implantation of intra-corneal ring segments (ICRS) which improve the corneas shape.',
            '. KeraNatural allograft corneal rings improves unaided and aided visual acuity in most patient cases without the complications associated with plastic intrastromal corneal rings such as: corneal melting, ring extrusion and intrusion, and sight-threatening complications like microbial keratitis.'
        ],
        image: '/images/section-images/keranatural-surgery-large.jpg',
        subheader: 'Treatments we offer for corneal conditions',
        section: '/corneal-treatments/#treatments'
    },
    {
        objectID: 73,
        title: 'Corneal cross-linking surgery',
        content: [
            'Cross-linking is an early surgical intervention to treat keratoconus which decreases the chance of needing invasive corneal surgeries.',
            'Cross-linking surgery strengthens the collagen fibers in your cornea to prevent your Keratoconus from worsening.',
            'Our cornea surgeon uses special eye drops and ultraviolet A(UVA) light to help the damaged tissue in your cornea grow stronger.',
            'This procedure stops the bulge of your eye from getting any worse as it adds special bonds that work like support beams to help the cornea strengthen.',
            'Keratoconus Glasses and Contact Lenses are used to help you see once your Keratoconus has affected your vision.',
            'However, Keratoconus glasses and contact lenses do not prevent the condition of Keratoconus from getting worse.',
            'This is why cross-linking is used as an early surgical intervention to treat the condition before keratoconus progresses any further.'
        ],
        image: '/images/section-images/corneal-cross-linking-large.jpg',
        subheader: 'Treatments we offer for corneal conditions',
        section: '/corneal-treatments/#treatments'
    },
    {
        objectID: 74,
        title: 'Lamellar Corneal Graft (optical keratoplasty/ tectonic keratoplasty)',
        content: [
            'A Lamellar corneal graft is a minimally invasive surgery which replaces the anterior layer of the cornea with new cornea tissue. This surgery strengthens the corneas structure and can improve vision.'
        ],
        image: '/images/section-images/lamellar-corneal-large.jpg',
        subheader: 'Treatments we offer for corneal conditions',
        section: '/corneal-treatments/#treatments'
    },
    {
        objectID: 75,
        title: 'CAIRS (corneal alloplastic intrastromal ring segment).',
        content: [
            'CAIRS intrastromal corneal ring segments are sourced from human donor corneal tissue and implanted in your eye to strengthen your cornea.',
            'CAIRS can be combined with corneal cross-linking to make this treatment more successful.',
            'CAIRS avoids possible complications that are associated with implanting synthetic material in the cornea such as: corneal melting, ring extrusion and intrusion, corneal necrosis; and infection.'
        ],
        subheader: 'Treatments we offer for corneal conditions',
        section: '/corneal-treatments/#treatments'
    },
    {
        objectID: 76,
        title: "DMEK (Descemet's Membrane Endothelial Keratoplasty)",
        content: [
            "DMEK is a Keratoplasty procedure which maintains the tensile strength of the cornea to restore clear, natural vision. DMEk helps restore symptoms of corneal endothelial diseases such as: Fuchs' dystrophy.",
            'This procedure is a minimally invasive surgery where only the posterior layer of the corneal is replaced as opposed to translanting the anterior chamber of your eye.'
        ],
        subheader: 'Treatments we offer for corneal conditions',
        section: '/corneal-treatments/#treatments'
    },
    {
        objectID: 77,
        title: 'Double vision symptoms (Diplopia)',
        content: ['Monitor your double vision symptoms with our private ophthalmologist'],
        section: '/double-vision-treatment-london'
    },
    {
        objectID: 78,
        title: 'In most cases double vision is usually a temporary and uncommon issue',
        content: [
            'If you have blurry vision, you may need your eyes checked and your glasses corrected with a new prescription to correct the astigmatism.',
            'However, if you are still experiencing double vision, a comprehensive eye assessment with our ophthalmologist is recommended to determine the health of your eyes.'
        ],
        image: '/images/section-images/double-vision.png',
        section: '/double-vision-treatment-london/#double_vision'
    },
    {
        objectID: 79,
        title: 'Double vision symptoms and vision testing',
        content: [
            'Our patients describe double vision astigmatism as seeing one image as two, blurring between one another.',
            'If your double vision is persisting or you are experiencing double vision in frequent episodes, you may be:',
            'Developing cataracts',
            'Have a transient (or intermittent) diplopia condition',
            'Have a cross-eye or lazy eye (misaligning eyes)',
            'Have an underlying neurological condition',
            'If you see two distinct images side-by-side or one above the other, and one of the images disappears when one eye is covered, then there may be a neurological problem that needs to be investigated.'
        ],
        image: '/images/section-images/double-vision.png',
        subheader: 'symptoms and vision',
        section: '/double-vision-treatment-london/#symptoms_and_vision'
    },
    {
        objectID: 80,
        title: 'Private consultation & treatment for double vision',
        content: [
            'Our specialists understand that double vision can cause headaches, reading difficulty and general discomfort when performing daily, routine tasks.',
            'If you are concerned about your double vision, we can provide you with an all-inclusive private consultation to investigate and diagnose the cause of your double vision symptoms.',
            'Once we’ve identified the underlying cause of your double vision, our ophthalmologist will find you the best suitable treatment.'
        ],
        image: '/images/section-images/consultation-&-treatment-double-vision.png',
        subheader: 'consultation & treatment',
        section: '/double-vision-treatment-london/#consultation_and_treatment'
    },
    {
        objectID: 81,
        title: 'Dry Eyes',
        content: ['Monitor your dry eye symptoms with our private ophthalmologist'],
        section: '/dry-eyes-treatment-london'
    },
    {
        objectID: 82,
        title: 'Private consultation for dry eyes',
        content: [
            'Our specialists understand that dry syndrome can cause everyday discomfort. If you are concerned about dry eyes, we can provide you with an all-inclusive private consultation to investigate and offer a treatment solution.',
            'Once we’ve identified the underlying cause of your dry eyes, our ophthalmologist will find you the best suitable treatment.'
        ],
        image: '/images/section-images/dry-eye-private-consultation-large.jpg',
        subheader: 'Dry eye syndrome symptoms and vision testing',
        section: '/dry-eyes-treatment-london/#dry_eye_syndrome'
    },
    {
        objectID: 83,
        title: 'What is included in my private consultation?',
        content: [
            'A private consultation with our ophthalmologist is an all-inclusive cost of £200',
            'This includes:',
            'A comprehensive consultation with your dedicated ophthalmologist (inclusive of all eye assessment and eye scans).',
            'A medical diagnosis of your eye condition with treatment planning.',
            'A referral for surgical treatment and/or a signed prescription (if required).',
            'A dedicated eye care team to support you throughout your eye care journey.'
        ],
        image: '/images/section-images/dry-eye-consultation-large.jpg',
        subheader: 'Dry eye consultation',
        section: '/dry-eyes-treatment-london/#dry_eye_syndrome'
    },
    {
        objectID: 84,
        title: 'Managing your dry eye syndrome',
        content: [
            'Our consultants will help you manage your dry eye syndrome for a clearer, brighter quality of life.'
        ],
        subheader: 'eye syndrome',
        section: '/dry-eyes-treatment-london/#eye_syndrome'
    },
    {
        objectID: 85,
        title: 'Dry eye Eye drops',
        content: [
            'Depending on the cause of your dry eyes, replacement drops may be prescribed as a substitute treatment.'
        ],
        subheader: 'Eye drops',
        section: '/dry-eyes-treatment-london/#eye_syndrome'
    },
    {
        objectID: 86,
        title: 'Dry Eye Surgery',
        content: [
            'In some rare dry eye cases it may be necessary to graft new cells into your conjunctiva. The conjunctiva is a clear and thin, protective layer which forms mucus in the eye. Grafting new cells produces fresh mucin if your eyes are defective.'
        ],
        subheader: 'Surgery',
        section: '/dry-eyes-treatment-london/#eye_syndrome'
    },
    {
        objectID: 87,
        title: 'Friendly vision correction treatment for dry eyes',
        content: [
            'If you are experiencing dry eye symptoms and have difficulty with short sightedness or near sightedness (a refractive error in your eye), we offer vision correction treatment options which can eliminate the need for wearing glasses and/or uncomfortable contact lenses.',
            'Implantable Contact Lenses are a friendly vision correction treatment which helps dry eye syndrome. To regain clear, natural eyesight without needing your glasses and contact lenses we can offer you a FREE suitability check for our implantable contact lenses.'
        ],
        image: '/images/section-images/glasses-free-presbyond-large.png',
        section: '/dry-eyes-treatment-london/#friendly_vision_correction'
    },
    {
        objectID: 88,
        title: 'Eyelid surgery London',
        content: ['Medical and cosmetic Eyelid surgery for Cysts, Chalazion, Styes, blepharoplasty, and more.'],
        section: '/eyelid-surgery-london'
    },
    {
        objectID: 89,
        title: 'Eyelid malposition (Entropion, ectropion correction)',
        content: [
            'Eyelid malposition (Entropion, ectropion correction)',
            "We offer Entropion surgery to correct the upper or lower eyelids turning inwards into the eye. Entropion can cause your eyelashes to rub against your eye's surface, including sensitivity to light, watery eyes and discharge.",
            'Our oculoplastic surgeon will correct the eyelid malposition, preventing irritation and future vision loss.',
            'If you have been diagnosed with Entropion, we can book you a private consultation to see our oculoplastic specialist.',
            'This consultation is an all-inclusive assessment to understand the condition of your eyes and your specialist will be your surgeon on your day of treatment.',
            'Find out more about our Entropion treatment today'
        ],
        image: '/images/section-images/eyelid-malposition.jpg',
        subheader: 'Medical Eyelid Surgery',
        section: '/eyelid-surgery-london/#medical_eyelist_surgery'
    },
    {
        objectID: 90,
        title: 'Ectropion treatment (Correction of the lower eyelid)',
        content: [
            'We offer Ectropion surgery to correct drooping eyelids that turn inside and/ or expose the outside of the eye. Ectropion is a condition caused by weakening tendons and muscle tissue which will under and/or overexpose the eyelid.',
            'Our oculoplastic surgeon will relieve discomfort and side effects of Ectropion (such as soreness, irritation and blockage of tears) by removing excess skin and strengthening the muscle to rest normally on your eye.',
            'Our private consultation is all-inclusive of eye scans and assessments, which will help your consultant diagnose your Ectropion condition and prepare you for your treatment day.'
        ],
        image: '/images/section-images/ectropion-treatment.jpg',
        subheader: 'Medical Eyelid Surgery',
        section: '/eyelid-surgery-london/#medical_eyelist_surgery'
    },
    {
        objectID: 91,
        title: 'Eyelid Cyst removal (removing a cyst from the eyelid)',
        content: [
            "Removing a cyst on an eyelid couldn't be easier with our oculoplastic surgeon. We offer a private consultation which is all-inclusive of eye scans and assessments which inform your consultant of your cysts condition and prepare you for your treatment day.",
            'An eyelid cyst is a fairly common eye condition that is caused by a blockage in your eyelid oil glands. To ease your symptoms of discomfort and irritation, our surgeon will remove the cyst and correct your eyelid malposition, which will prevent irritation, further infection and future vision loss. You can learn more about our cyst eyelid treatment below.'
        ],
        image: '/images/section-images/eyelid-cyst-removal.png',
        subheader: 'Medical Eyelid Surgery',
        section: '/eyelid-surgery-london/#medical_eyelist_surgery'
    },
    {
        objectID: 92,
        title: 'Eyelid Chalazion removal (Removing a Chalazion from the eyelid).',
        content: [
            'Treatment for a Chalazion removal with our oculoplastic surgeon is a simple and stress-free procedure to prevent discomfort and prolonged irritation of your condition.',
            'A Chalazion is identified as a red bump that swells on your eyelid. This can develop as a result of an untreated cyst and is caused by chronic inflammation from an oil gland (meibomian) being blocked in your eyelid.',
            'Our oculoplastic surgeon specializes in Chalazion removal treatment and easing any symptoms of irritation you are experiencing. We offer a private consultation with our specialist, which is all-inclusive of eye scans and assessments to understand the condition of your Chalazion and prepare for your treatment day.'
        ],
        image: '/images/section-images/eyelid-chalazion-removal-large.png',
        subheader: 'Medical Eyelid Surgery',
        section: '/eyelid-surgery-london/#medical_eyelist_surgery'
    },
    {
        objectID: 93,
        title: 'Eye Stye Removal (Removing a stye)',
        content: [
            'Removing a stye is a simple and stress-free procedure. Our oculoplastic surgeon will be able to alleviate the uncomfortable symptoms of the stye, which, left untreated, may cause the stye infection to grow.',
            'A stye is identified as a small, red, uncomfortable bump which develops from bacteria infecting an eyelid gland or an eyelash follicle.',
            'If you are experiencing pain, irritation, swelling and discomfort, we offer an all-inclusive private consultation where our specialist will diagnose your stye condition by carrying out relevant eye scans and assessments.',
            'Your specialist will prepare you for your treatment day and will answer any questions you may have about your condition and treatment.'
        ],
        image: '/images/section-images/eye-stye-removal-large.png',
        subheader: 'Medical Eyelid Surgery',
        section: '/eyelid-surgery-london/#medical_eyelist_surgery'
    },
    {
        objectID: 94,
        title: 'Ptosis surgery (correcting upper eyelid)',
        content: [
            'Ptosis is identified as a condition which causes the upper eyelid to droop, sometimes blocking and restricting vision. This is commonly caused by nerve damage in the eye, which can affect the eye’s muscle strength.',
            'If you can identify with Ptosis or have been already diagnosed with the condition, our oculoplastic surgeon can relieve your symptoms and correct the excess skin by shortening the muscles and tendons to raise the eyelid, restoring your ability to see and restore the symmetry between your upper eyelids.',
            'We provide a private consultation with our specialist, inclusive of all relevant eye scans and assessments with a confirmed diagnosis of your condition. Once you are seen by our specialist, they will answer and advise you on any questions you may have and will prepare you for your treatment day. Your specialist will be dedicated to your consultation and surgery, and will answer any questions you may have about your condition and treatment.'
        ],
        image: '/images/section-images/ptosis-surgery-large.png',
        subheader: 'Medical Eyelid Surgery',
        section: '/eyelid-surgery-london/#medical_eyelist_surgery'
    },
    {
        objectID: 95,
        title: 'Pterygium Surgery (removing extra tissue from the eyes surface)',
        content: [
            'We offer Pterygium surgery to remove the overgrowth of the conjunctiva tissue, which develops at the front of the eye’s surface. In extreme cases, Pterygium can cause vision loss if left untreated and is generally experienced with irritation, inflammation and continual growth of the tissue.',
            'Our oculoplastic surgeon will remove the overgrown tissue on the eye’s surface and permanently implant a healthy graft of tissue in order to prevent any future growth of eye tissue.',
            'At our clinic, we offer a private consultation, all-inclusive of relevant eye scans and assessments, for our specialist to diagnose your condition and prepare you for your treatment day. Your specialist will be dedicated to your consultation and surgery and will answer any questions you may have about your condition and treatment.'
        ],
        image: '/images/section-images/pterygium-surgery-large.png',
        subheader: 'Medical Eyelid Surgery',
        section: '/eyelid-surgery-london/#medical_eyelist_surgery'
    },
    {
        objectID: 96,
        title: 'Show the beauty of your eyes to the rest of the world with our cosmetic eyelid surgeries.',
        content: [
            'Eyebrow lift (used to address droopy or heavy eyebrows)',
            'Eyebrow lifts are a painless cosmetic procedure that will restore a natural, beautiful and symmetrical appearance. Our oculoplastic surgeon will make a small incision in the temporal side of your eye hidden inside the hairline to lift the temporal part of the brow.',
            'An eyebrow lift is a stress-free procedure which our specialist will discuss with you at your private consultation to prepare you for your treatment day.'
        ],
        image: '/images/section-images/cosmetic-eyelid-surgery-large.png',
        subheader: 'Cosmetic Eyelid Surgery',
        section: '/eyelid-surgery-london/#cosmetic_eyelid_surgery'
    },
    {
        objectID: 97,
        title: 'Show the beauty of your eyes to the rest of the world with our cosmetic eyelid surgeries.',
        content: [
            'Eyebrow lift (used to address droopy or heavy eyebrows)',
            'Eyebrow lifts are a painless cosmetic procedure that will restore a natural, beautiful and symmetrical appearance. Our oculoplastic surgeon will make a small incision in the temporal side of your eye hidden inside the hairline to lift the temporal part of the brow.',
            'An eyebrow lift is a stress-free procedure which our specialist will discuss with you at your private consultation to prepare you for your treatment day.'
        ],
        image: '/images/section-images/cosmetic-eyelid-surgery-large.png',
        subheader: 'Cosmetic Eyelid Surgery',
        section: '/eyelid-surgery-london/#cosmetic_eyelid_surgery'
    },
    {
        objectID: 98,
        title: 'Blepharoplasty (eyelid reduction)',
        content: [
            'Blepharoplasty is a surgical procedure we offer at our clinic to reduce excess sagging, wrinkles and baggy skin which develops under the eyes. This cosmetic treatment is very common and reshapes the eyelids for a healthy, natural and refreshed appearance.',
            'We offer an all-inclusive, private consultation with our specialist, who will advise and talk you through the cosmetic treatment.',
            'They will talk you through your expectations, your preparations for treatment and what to expect on the surgery day.'
        ],
        image: '/images/section-images/blepharoplasty-large.png',
        subheader: 'Cosmetic Eyelid Surgery',
        section: '/eyelid-surgery-london/#cosmetic_eyelid_surgery'
    },
    {
        objectID: 99,
        title: 'Blepharospasm botox injections (correcting involuntary spasms of the eyes)',
        content: [
            'Eye squint spasm symptoms (commonly known as ‘blepharospasm’) can be corrected with our botox injections. Our oculoplastic surgeon will treat your involuntary spasms by blocking the nerve signals with botox. Botox for blepharospasm lasts for 2-3 months.',
            'Squints can be caused by many reasons, which vary from previous surgery, trauma to the eyes, previous illness, developmental complications, uncorrected longsightedness (hyperopia), nearsightedness, myopia or astigmatism and/or weak muscles and nerves. Squints can cause headaches, double vision and an appearance of misaligning (crossed) eyes.',
            'By choosing to correct your squint through blepharospasm injections, our oculoplastic surgeon will help reduce any symptoms that are causing you irritation such as: Double vision, eye strain, headaches, difficulty in peripheral vision and eye appearance.'
        ],
        image: '/images/section-images/blepharospasm-botox-large.png',
        subheader: 'Cosmetic Eyelid Surgery',
        section: '/eyelid-surgery-london/#cosmetic_eyelid_surgery'
    },
    {
        objectID: 100,
        title: 'Eye Flashes & Floaters Symptoms & Treatment',
        content: ['Eye flashes & floaters in children and adults'],
        section: '/flashes-floaters'
    },
    {
        objectID: 101,
        title: 'Eye flashes & floaters in children and adults',
        content: [
            'Flashes & floaters are presented in your vision as:',
            'Dark and/or clear spots and lines',
            'Small spots of flashing lights',
            'Eye flashes & floaters can be monitored with regular eye checks and the appearance of flashes and floaters in your vision is usually nothing to be concerned about.',
            'Flashes & floaters indicate that there is a change in the vitreous gel in the back of your eye.',
            'If you have short-sightedness (myopia), you may experience flashes & floaters earlier in life.',
            'For people over the age of 50, eye flashes & floaters may indicate early signs of a retinal tear or detachment. Retinal tears and detachments happen when the retina in the back of the eye becomes loose and may suggest a more serious eye condition such as macular degeneration.'
        ],
        image: '/images/section-images/eye-flashes-&-floaters-large.png',
        subheader: 'children and adults',
        section: '/flashes-floaters/#children_and_adults'
    },
    {
        objectID: 102,
        title: 'Diagnosis, treatment & management for eye flashes & floaters',
        content: [
            'We offer a private consultation with our ophthalmologist to check the health of your eye and provide a diagnosis of any eye conditions you may have, including floater treatment advice and surgery planning if required.',
            'Although you may experience eye floaters and flashes of light, it is rare to be given a diagnosis for an eye condition as these floaters are generally nothing to worry about in early adulthood.',
            'For people over the age of 50, flashes & floaters may indicate early signs of more serious eye conditions. If you are over the age of 50 and experiencing eye flashes & floaters, please contact our support team for a private consultation with our ophthalmologist.'
        ],
        image: '/images/section-images/eye-flashes-diagnosis-large.png',
        subheader: 'Diagnosis, treatment',
        section: '/flashes-floaters/#diagnosis_treatment'
    },
    {
        objectID: 103,
        title: 'What is included in my private consultation?',
        content: [
            'A private consultation with our ophthalmologist is an all-inclusive cost of £300',
            'This includes: A comprehensive consultation with your dedicated ophthalmologist (inclusive of all eye assessment and eye scans).',
            'A medical diagnosis of your eye condition with treatment planning.',
            'A referral for surgical treatment and/or a signed prescription (if required).',
            'A dedicated eye care team to support you throughout your eye care journey.'
        ],
        image: '/images/section-images/cornea-consultation-large.png',
        subheader: 'consultation',
        section: '/flashes-floaters/#consultation'
    },
    {
        objectID: 104,
        title: 'Retinal detachments signs & treatment',
        content: [
            'Flashes & floaters may indicate signs of retinal detachments:',
            'Dark floaters affecting your vision',
            'Sudden blurry and/or distorted vision',
            'Flashes of light in one or both eyes ( known as ‘photopsia’)',
            'Shadows over your field of vision'
        ],
        image: '/images/section-images/retinal-detachments.png',
        subheader: 'Retinal detachments',
        section: '/flashes-floaters/#retinal_detachments'
    },
    {
        objectID: 105,
        title: 'Friendly vision correction treatment for dry eyes',
        content: [
            'If you are experiencing dry eye symptoms and have difficulty with short sightedness or near sightedness (a refractive error in your eye), we offer vision correction treatment options which can eliminate the need for wearing glasses and/or uncomfortable contact lenses.',
            'Implantable Contact Lenses are a friendly vision correction treatment which helps dry eye syndrome. To regain clear, natural eyesight without needing your glasses and contact lenses we can offer you a FREE suitability check for our implantable contact lenses.'
        ],
        image: '/images/section-images/glasses-free-presbyond-large.png',
        section: '/flashes-floaters/#treatment_for_dry_eyes'
    },
    {
        objectID: 106,
        title: 'YAG Capsulotomy Laser Treatment London',
        content: ['Reducing PCO symptoms after Cataract Surgery.'],
        section: '/cataract/yag-capsulotomy-for-pco'
    },
    {
        objectID: 107,
        title: 'Consultation',
        content: [
            'After having your cataract surgery, some people may experience PCO symptoms 1-5 years after treatment. This is completely normal and nothing to worry about.',
            'Once you have had treatment to permanently get rid of any blurry vision, your natural vision will restore and PCO will never return again. This is due to the thickening of the capsule in your eye. This haze can be removed by the use of our YAG Laser treatment in just 60 seconds!'
        ],
        image: '/images/section-images/yag-consultation-large.png',
        section: '/cataract/yag-capsulotomy-for-pco/#consultation'
    },
    {
        objectID: 108,
        title: 'Treatment',
        content: [
            'Our YAG laser eye surgery is a completely painless treatment which takes 5-10 minutes in total. When you come for your treatment, this laser is used to create a visual pathway in the center of the capsule that is thickening and clouding your vision. This will support the lens implant again, restoring the vision you had previously.',
            'When you arrive at our clinic, our friendly nurse will speak with you before the treatment in case you have any questions. They will apply anaesthetic eye drops into your eyes to dilate your pupils to make sure your eyes are completely numb, making our YAG laser treatment completely painless.',
            'Our nurse will welcome you into our laser suite where you will meet the laser specialist who will perform your treatment. Our YAG laser is attached to a slit-lamp microscope and is used to divide the thickened membranes in your eye. This is considered a very minimally invasive surgery because our laser does not damage the eye in any way and you may only experience blurred vision after the YAG procedure which is completely normal. This post-procedure blurriness can take up to a few hours to clear which is why you will need to arrange transport home as you will not be able to drive until your vision is clear again.'
        ],
        image: '/images/section-images/yag-treatment-large.png',
        section: '/cataract/yag-capsulotomy-for-pco/#treatment'
    },
    {
        objectID: 109,
        title: 'Aftercare',
        content: [
            'We want nothing more than for you to feel comfortable after your laser surgery! Yag Laser capsulotomy treatment is one of our easiest laser procedures to recover from as we do not require you to attend any follow-up appointments unless you are having treatment for another eye condition. YAG laser eye surgery is also very efficient because once you have had the procedure you will have a short recovery period of 1-2 days. During this time, our team is always here to help with any other questions you may have about life after your surgery.'
        ],
        image: '/images/section-images/yag-aftercare-large.png',
        section: '/cataract/yag-capsulotomy-for-pco/#aftercare'
    },
    {
        objectID: 110,
        title: 'YAG laser Capsulotomy surgery cost London',
        content: ['Save an average of £1,000'],
        section: '/cataract/yag-capsulotomy-for-pco/price'
    },
    {
        objectID: 111,
        title: 'What’s included in my private consultation and treatment?',
        content: [
            'A comprehensive consultation and YAG laser treatment performed in our private laser suite with your dedicated specialist and our friendly team',
            'FREE aftercare appointments with your dedicated YAG laser specialist.'
        ],
        image: '/images/section-images/private-consultation-yag-large.png',
        subheader: 'Your consultation',
        section: '/cataract/yag-capsulotomy-for-pco/price/#your_consultation'
    },
    {
        objectID: 112,
        title: '£395 per eye',
        content: ['The price of your laser consultation & surgery', 'Permanently correct your PCO symptoms'],
        section: '/cataract/yag-capsulotomy-for-pco/price/#price'
    },
    {
        objectID: 113,
        title: 'The cost of YAG Laser capsulotomy couldn’t be easier!',
        content: [
            'Our London laser specialists save you an average of £1,000 for your treatment and aftercare appointments compared to other eye clinics.'
        ],
        image: '/images/section-images/yag-capsulotomy-large.png',
        section: '/cataract/yag-capsulotomy-for-pco/price/#laser_capsulotomy'
    },
    {
        objectID: 114,
        title: 'Private Cataract Surgery London',
        content: ['We’re here to make cataract surgery easy'],
        section: '/cataract'
    },
    {
        objectID: 115,
        title: 'Your Consultation',
        content: [
            'The first step to living life with clearer vision is a consultation with one of our friendly cataract specialists.',
            'Your cataract consultation will begin with some initial scans so we can examine your eyes and explain the most suitable treatment options for you.',
            'With our expert technology, our senior technicians will be able to capture how the cataracts are affecting you, your lifestyle and where exactly they are affecting your field of vision.',
            'These assessments will be passed to your cataract specialist, who will meet with you and talk you through the best lens implants options for your cataract surgery.',
            'Your first cataract consultation and assessment is an all-inclusive £200 fee, with no obligation to have surgery if you wish to have some time to consider your treatment options.'
        ],
        image: '/images/section-images/cataract-consultation-large.png',
        section: '/cataract/#your_consultation'
    },
    {
        objectID: 116,
        title: 'Your Surgery',
        content: [
            'The most comforting part of our care is that our patients know their surgeon from the beginning; they will be your dedicated specialist throughout your consultation, treatment and aftercare.',
            'Before your surgery day, our patient care coordinator will reach out and answer any extra information that will be helpful to you before your treatment.',
            'On the day of your cataract surgery, our friendly nurse team will be with you before your treatment time and they will answer any questions you may have for your ease, care and comfort.',
            'Your cataract surgery will be completely painless and takes just an average of 10 minutes per eye, depending on your lens options.',
            'Our nurses will be there after your surgery to help you through our at-home instructions which will help you in your recovery time.'
        ],
        image: '/images/section-images/cataract-surgery-large.png',
        section: '/cataract/#your_surgery'
    },
    {
        objectID: 117,
        title: 'Your Aftercare',
        content: [
            'There is nothing more important than our patients feeling comfortable after their procedure.',
            'We advise a two week recovery period before attending your aftercare appointment with us.',
            'Our team will always be at the end of a phone call throughout your recovery at home to answer any more questions you may have.',
            'In your aftercare appointment, your cataract specialist will check the improvement of your vision before you can enjoy your cataract-free vision'
        ],
        image: '/images/section-images/cataract-aftercare-large.png',
        section: '/cataract/#your_aftercare'
    },
    {
        objectID: 118,
        title: 'Hear from a patient',
        content: [
            'When you choose My-iClinic’s 5-star rated services, you can rest assured that you’ve made the best possible choice for your eyesight.',
            'Our specialist optometrists carefully work with you to evaluate your eyes to offer you the best possible course of treatment – allowing you to re-discover a life of normal vision.'
        ],
        subheader: 'What our Cataract patients say after treatment',
        section: '/cataract/#hear_from_a_patient'
    },
    {
        objectID: 119,
        title: 'Cataract Surgery prices',
        content: [
            'We do our best to understand your needs and aims so we can offer you the best vision correction options with a fair, transparent price!',
            '£2,400 per eye',
            'One Dedicated Cataract Specialist For Your Treatment',
            'Most Affordable Price In London'
        ],
        image: '/images/section-images/cataract-transparent-price-large.png',
        subheader: 'Transparent Price',
        section: '/cataract/#transparent_price'
    },
    {
        objectID: 120,
        title: 'Living life again with cataract-free vision!',
        content: [
            'Most patients are not aware of how bad their vision has become until after the cataract surgery and treatment.',
            'Once they see the difference in brightness, colour, imagery and detail; they are delighted to experience their lifestyle activities again with the clear vision they should have always had.'
        ],
        image: '/images/section-images/vision-correction-cataract-large.png',
        subheader: 'Vision correction treatment',
        section: '/cataract/#vision_correction_treatment'
    },
    {
        objectID: 121,
        title: 'Living life again with cataract-free vision!',
        content: [
            'Most patients are not aware of how bad their vision has become until after the cataract surgery and treatment.',
            'Once they see the difference in brightness, colour, imagery and detail; they are delighted to experience their lifestyle activities again with the clear vision they should have always had.'
        ],
        image: '/images/section-images/vision-correction-cataract-large.png',
        subheader: 'Vision correction treatment',
        section: '/cataract/#vision_correction_treatment'
    },
    {
        objectID: 122,
        title: 'Improved Vision',
        content: [
            'After cataract surgery, your natural vision is restored.',
            'Our patients have described their vision to be improved and a new',
            'All the colours around me are bright again; I can’t believe the detail',
            'The real plus is that I don’t have to wear contact lenses and can see better',
            'When I go for country walks, I can now see the birds in the trees, or a bunny hopping...',
            'Now I can finally read all the motorway signs when I drive…'
        ],
        image: '/images/section-images/card-improved-vision.png',
        section: '/cataract/#features'
    },
    {
        objectID: 123,
        title: 'Improved Quality of Life',
        content: [
            'As our vision deteriorates, and colours begin to fade, it affects our perception and experiences in everyday tasks.',
            'A life without cataracts is not only a life of improved vision, but an opportunity to have an improved quality of life!',
            'No more compromise in your daily tasks',
            'Full independence in your routine',
            'An easy discovery of new hobbies'
        ],
        image: '/images/section-images/card-man-drinking-water.png',
        section: '/cataract/#features'
    },
    {
        objectID: 124,
        title: 'Quick Procedure',
        content: [
            'With our specialist team, your cataract procedure is an average of 60 minutes and our friendly nurses will guide you before and after the surgery for your ease and comfort.',
            'An average of 60 minutes for surgery',
            'Our friendly nurse team always beside you',
            'One specialist dedicated to your treatment'
        ],
        image: '/images/section-images/card-user-writing.png',
        section: '/cataract/#features'
    },
    {
        objectID: 125,
        title: 'Easy Recovery & Aftercare',
        content: [
            'Our patients describe their recovery as a very simple and easy process.',
            'What to expect in your aftercare',
            'A detailed chat about your aftercare routine with our nurses',
            '2 weeks recovery time at home',
            'A detailed assessment of your vision after surgery',
            'A helpful and fully comprehensive appointment with your cataract specialist'
        ],
        image: '/images/section-images/card-lady-smiling.png',
        section: '/cataract/#features'
    },
    {
        objectID: 126,
        title: 'Enjoy clear vision without glasses',
        content: [
            'Following cataract surgery, the most satisfied patients are those who do not require glasses to see clearly.',
            'Since your eye is refocused during the operation, our experts take the opportunity to focus it for no distance glasses, even if you have worn glasses all your life.',
            'Implants, like glasses, come in different strengths and we will measure your eye to find the strength of the implant most suitable for you.'
        ],
        image: '/images/section-images/better-vision-cataract-large.png',
        subheader: 'better vision',
        section: '/cataract/#better_vision'
    },
    {
        objectID: 127,
        title: 'Book Your Private Cataract Surgery Today',
        image: '/images/section-images/glasses-free-presbyond-large.png',
        section: '/cataract/#book'
    },
    {
        objectID: 128,
        title: 'Independence from glasses after Cataract surgery London',
        content: ['Be independent from wearing glasses after your cataract surgery'],
        section: '/cataract/premium-lenses'
    },
    {
        objectID: 129,
        title: 'Presbyond laser Treatment After cataract surgery',
        content: [
            'Be glasses free after cataract surgery',
            'We provide Presbyond laser eye treatment after cataract surgery',
            'Presbyond uses a blend zone technology which corrects the near, intermediate and distance sight and helps cataract patients adjust to all points of sight after their surgery.',
            'This option is best suited to people with cataracts who have a very active lifestyle and want to continue their work, hobbies and driving without compromising their vision with glasses.'
        ],
        image: '/images/section-images/laser-treatment-presbyond-large.png',
        subheader: 'Be Glasses free',
        section: '/cataract/premium-lenses/#be_glasses_free'
    },
    {
        objectID: 130,
        title: 'You might be considering laser eye surgery to be completely independent from your glasses after removing your cataracts',
        content: [
            'We provide the perfect laser treatment for seeing near, intermediate and distance vision altogether without artificial lens implantation.'
        ],
        section: '/cataract/premium-lenses/#book'
    },
    {
        objectID: 131,
        title: 'EDoF Lenses',
        content: [
            'Our Extended Depth of Focus lenses are used for our presbyopic patients needing a broader range of vision from their intermediate to distance vision.',
            'The lenses have a continuous change in periphery range by focusing the light in an extended longitudinal plane, instead of discrete points in a patient’s sight.',
            'Edof is the best lens implant option to achieve a brighter, and larger periphery of vision. Edof lenses have minimal glare, or halo side effects that can be associated with multifocal lenses.'
        ],
        section: '/cataract/premium-lenses/#edof_lenses'
    },
    {
        objectID: 132,
        title: 'Toric Lenses',
        content: [
            'Our Torric lenses are for patients who may require some correction of astigmatism in their cornea.',
            'We aim to correct any astigmatism for our patients with Torric as part of our standard care after Cataract Surgery.'
        ],
        section: '/cataract/premium-lenses/#toric_lenses'
    },
    {
        objectID: 133,
        title: 'Monofocal Lenses',
        content: [
            'Our Monofocal lenses are for patients that would like their distance sight to be clear. This means tasks such as: reading signs and sightseeing will be clear.',
            'However, these lenses will require our patients to use glasses for intermediate and near tasks.'
        ],
        section: '/cataract/premium-lenses/#monofocal_lenses'
    },
    {
        objectID: 134,
        title: 'Multifocal Lenses',
        content: [
            'Our Multifocal lenses are for patients needing near, intermediate and distance sight. These lenses are to maximise the range of vision to reduce the possibility of glasses wearing.',
            'However, glasses may still be needed for intensive near tasks, for example: reading very small print, or in poor light situations.'
        ],
        section: '/cataract/premium-lenses/#multifocal_lenses'
    },
    {
        objectID: 135,
        title: 'Monovision',
        content: [
            'Monovision is when we correct the dominant eye for distance vision, and the other eye is corrected for near vision. When both eyes are viewing together, the distances pair.',
            'However, monovision is an older technique which can create more complications when trying to correct the distances. Our patients prefer newer lenses that work for a better optimal visual outcome.'
        ],
        section: '/cataract/premium-lenses/#multifocal_lenses'
    },
    {
        objectID: 136,
        title: 'Cataract surgery cost in London',
        content: ['Save you an average of £1,000 for your cataract treatment'],
        section: '/cataract/price'
    },
    {
        objectID: 137,
        title: 'What’s included in my private consultation and treatment?',
        content: [
            'A comprehensive consultation with your dedicated cataract specialist (inclusive of all eye assessment and eye scans).',
            'Your cataract treatment was performed in our private theater with your dedicated specialist and our friendly team.',
            'FREE aftercare appointments with your dedicated cataract specialist (inclusive of eye assessments and eye scans).'
        ],
        image: '/images/section-images/private-consultation-cataract-large.png',
        subheader: 'Cataract consultation',
        section: '/cataract/price/#cataract_consultation'
    },
    {
        objectID: 138,
        title: 'Want to pay with your health insurance?',
        content: [
            'We are partnered with health insurance companies to make the cost of your treatment easier!',
            "It's always best to check with your healthcare insurance provider that they will cover your fees and produce a pre-authorisation code for you.",
            'We will require your pre-authorization code before your consultation and cataract surgery.'
        ],
        image: '/images/section-images/private-consultation-cataract-large.png',
        subheader: 'Cataract insurance',
        section: '/cataract/price/#cataract_consultation'
    },
    {
        objectID: 139,
        title: 'The price of your Cataract consultation',
        content: [
            'Your consultation fee is inclusive of eye assessments and a private one-to-one consultation with our ophthalmologist'
        ],
        section: '/cataract/price/#price'
    },
    {
        objectID: 140,
        title: 'The price of your Cataract surgery',
        content: ['We are partnered with health insurance companies to make the cost of your treatment easier!'],
        section: '/cataract/price/#price'
    },
    {
        objectID: 141,
        title: 'Cataract laser surgery couldn’t be more cost-effective!',
        content: [
            'Our London laser specialists save you an average of £1,000 for your treatment and aftercare appointments compared to other eye clinics.'
        ],
        image: '/images/section-images/cost-effective-price.jpg',
        section: '/cataract/price/#cost_effective'
    },
    {
        objectID: 142,
        title: 'How to raise a complaint',
        content: ['The Independent Sector Complaints Adjudication Service (ISCAS)'],
        section: '/complaint'
    },
    {
        objectID: 143,
        title: 'The Independent Sector Complaints Adjudication Service (ISCAS)',
        content: [
            'To address a formal complaint with our clinic please notify the complaints department by emailing veranika@my-iclinic.co.uk.',
            'You will receive written acknowledgment within five working days and a formal response within twenty-eight working days.',
            'Complaints can be made by a patient, a former patient, or someone acting on a patient’s behalf within 12 months of the date of the event that is being complained about.',
            'My-iClinic will offer to meet with the complainant in order to discuss the manner in which the complaint is to be handled and how the issue/s might be resolved.',
            'Please click the button below to download our official complaints procedure process. This complaints guide will help you understand the proceedings that will occur afterwards to ensure we resolve your complaint effectively and efficiently.Click here to download the ISCAS Guide (Button)'
        ],
        image: '/wp-content/uploads/2023/04/ISCAS-logo-v2-400x107-1.png',
        section: '/complaint/#iscas'
    },
    {
        objectID: 144,
        title: 'Glaucoma Treatment London',
        content: ['Affordable management and treatment for your Glaucoma!'],
        section: '/glaucoma-treatment'
    },
    {
        objectID: 145,
        title: 'Manage and Treat your glaucoma with our 5-star Glaucoma clinic in London?',
        content: [
            'Glaucoma is a chronic eye condition which is detected by our Glaucoma specialists after careful and regular assessments for your eyes.',
            'We call Glaucoma the ‘silent thief of sight’ because the condition quietly progresses over time, without any sudden noticeable signs or symptoms.',
            'Glaucoma tends to run in families and certain groups are more at risk than others. We understand this can be worrying, which is why our Glaucoma specialists are here to help manage and treat your Glaucoma for a better and happier quality of life!'
        ],
        image: '/images/section-images/manage-glaucoma.png',
        subheader: '5-star Glaucoma clinic',
        section: '/glaucoma-treatment/#glaucoma_clinic'
    },
    {
        objectID: 146,
        title: 'Glaucoma Conditions',
        content: [
            'There are two main types of Glaucoma:',
            'Open angle glaucoma',
            'Closed angle glaucoma',
            'These glaucoma conditions differ in how they present and how they are managed to help remission your symptoms and prevent the potential risk of blindness.',
            'Acute open angle glaucoma',
            'Acute open angle glaucoma is commonly presented in patients as a gradual change in vision impairment.',
            'Open angle glaucoma requires monitoring and treatment to reduce high pressure in the eye.',
            'Closed angle glaucoma (narrow angle glaucoma)',
            'is commonly presented as a sudden change in vision impairment.',
            'Closed angle glaucoma requires immediate surgery to reduce high pressure in the eye and prevent damage to the optic nerve which can cause vision loss.'
        ],
        image: '/images/section-images/glaucoma-conditions.png',
        section: '/glaucoma-treatment/#glaucoma_conditions'
    },
    {
        objectID: 147,
        title: 'Glaucoma consultation',
        content: [
            'We already know that quality of life increases with the quality of clear vision, without needing to worry about losing sight in your future. Because Glaucoma is such an extensive condition with many treatment options, we carry out very comprehensive eye assessments to understand the best treatment options for your Glaucoma case. When you first visit our Glaucoma clinic, you will meet our friendly technicians who will guide you through these detailed eye assessments. These assessments are designed to capture all angles of your eyes, measuring your corneal thickness, understanding your eyes behavior and knowing what you can or can’t see in your peripheral vision. On your second visit to our London clinic, your dedicated glaucoma specialist will have reviewed your assessments and made a diagnosis of your glaucoma type.',
            'They will diagnose you privately and answer any questions you have about your glaucoma condition and the best treatment. Your Glaucoma specialist may do further pressure checks to determine the best solution to reduce high pressure in your eyes. Once you finish your consultation, you will have full confidence and awareness of the best glaucoma treatment options for your eyes.'
        ],
        image: '/wp-content/uploads%2F2023%2F04/glaucoma-consultation-large.png',
        section: '/glaucoma-treatment/#glaucoma_consultation'
    },
    {
        objectID: 148,
        title: 'Treatment, aftercare and monitoring Glaucoma',
        content: [
            'In a subsequent visit to our clinic, our glaucoma specialist will continue to provide a dedicated care service for your Glaucoma management.',
            'When you come for your first visit with us, our specialists can determine what package will be best suited for your Glaucoma management.'
        ],
        section: '/glaucoma-treatment/#glaucoma_management'
    },
    {
        objectID: 149,
        title: 'Glaucoma Treatment London',
        content: [
            'Selective Laser Trabeculoplasty (SLT) uses a gentle laser light to clean up the natural drainage pathway of the eye. It does this by creating biological conditions that ultimately improve the drainage pathway and result in lowering pressure of the eyes.',
            'This treatment is successful in 2 out of 3 patients and the effect lasts for 2-3 years. In patients in whom the treatment works, it is safe to repeat Selective Laser Trabeculoplasty treatment every 2 years.',
            'YAG Laser iridotomy YAG laser iridotomy is a preventive treatment that is recommended for people who have very narrow angles that put them at risk of angle closure glaucoma. It is also used to treat acute angle closure glaucoma is an acutely painful eye condition.',
            'Our Glaucoma specialist makes a tiny internal opening in the iris with a laser, this creates a small internal bypass channel that keeps the eye safe from the sudden painful pressure risk of angle closure glaucoma.'
        ],
        image: '/wp-content/uploads/2023/04/glaucoma-laser-large.png',
        subheader: 'Glaucoma Treatments',
        section: '/glaucoma-treatment/#glaucoma_treatments'
    },
    {
        objectID: 150,
        title: 'Glaucoma Eye drops',
        content: [
            'Glaucoma drops are the most common first-line treatment for reducing high pressure in the eyes of patients with glaucoma or ocular hypertension.',
            'We provide the best preservative free eye drops as our patients.',
            'Any eye drops given to you as an ongoing course of treatment will be medically provided based on your eye assessments, medical history and any allergies you may have.'
        ],
        image: '/wp-content/uploads/2023/04/glaucoma-eye-drops-large.png',
        subheader: 'Glaucoma Treatments',
        section: '/glaucoma-treatment/#glaucoma_treatments'
    },
    {
        objectID: 151,
        title: 'Glaucoma Eye Surgery',
        content: [
            'HFDS (High-frequency deep sclerotomy) is a surgical procedure also suited to people who have mild to moderate open angle Glaucoma (chronic Glaucoma).',
            'Our HFDS procedure is a very minimally invasive surgery which means only a very small 1.2mm incision is required to get inside your eye.',
            'Our Glaucoma specialist will form six very small pockets in your ‘trabecular meshwork’ (the tissue inside your eye) which improves the flow of eye fluid to drain easily.',
            'Our HFDS procedure is designed to let fluid naturally drain without needing any implant inserted which lowers the pressure in your eyes.',
            'If you also suffer from cataracts, our Glaucoma specialist can remove your cataracts, as well as treat your Glaucoma, in this one procedure.'
        ],
        subheader: 'Glaucoma Treatments',
        section: '/glaucoma-treatment/#glaucoma_treatments'
    },
    {
        objectID: 152,
        title: 'PreserFlo is a surgical procedure also suited to people who have mild to moderate open angle Glaucoma (chronic Glaucoma).',
        content: [
            'Our Glaucoma specialist will create a small flap in your conjunctiva (the white part of your eye) and insert a small 8mm tube called a ‘PreserFlo Microshunt’.',
            'This tube is inserted in the space between your iris and cornea (called the ‘anterior segment’) designed to lower eye pressure by letting fluid bypass the eyes tissue and drain out of the eye.',
            'Our Glaucoma specialist will treat your eye with anti-scarring medication before the procedure is finished.'
        ],
        subheader: 'Glaucoma Treatments',
        section: '/glaucoma-treatment/#glaucoma_treatments'
    },
    {
        objectID: 153,
        title: 'Glaucoma Trabeculectomy is a surgical procedure most suited to people who have open angle Glaucoma (chronic Glaucoma).',
        content: [
            'In this procedure, our Glaucoma specialist makes a small incision into the white part of your eye called the ‘conjunctiva’ (just above your iris) and removes some trabecular meshwork (eye tissue) to form a small flap.',
            'This flap serves as a trapdoor and will allow fluid to escape the eye and reabsorb into the body safely without any further damage to your optic nerve.',
            'You cannot see this flap after the surgery has finished because the flap is very small and unnoticeable.',
            'Our Trabeculectomy procedure allows excess fluid to pass through the eye easily and lower high pressure in your eyes.'
        ],
        subheader: 'Glaucoma Treatments',
        section: '/glaucoma-treatment/#glaucoma_treatments'
    },
    {
        objectID: 154,
        title: 'Glaucoma Trabeculectomy is a surgical procedure most suited to people who have open angle Glaucoma (chronic Glaucoma).',
        content: [
            'In this procedure, our Glaucoma specialist makes a small incision into the white part of your eye called the ‘conjunctiva’ (just above your iris) and removes some trabecular meshwork (eye tissue) to form a small flap.',
            'This flap serves as a trapdoor and will allow fluid to escape the eye and reabsorb into the body safely without any further damage to your optic nerve.',
            'You cannot see this flap after the surgery has finished because the flap is very small and unnoticeable.',
            'Our Trabeculectomy procedure allows excess fluid to pass through the eye easily and lower high pressure in your eyes.'
        ],
        subheader: 'Glaucoma Treatments',
        section: '/glaucoma-treatment/#glaucoma_treatments'
    },
    {
        objectID: 155,
        title: 'Glaucoma Canaloplasty is a procedure to enlarge the drainage canal in your eye and reduce intraocular pressure for people diagnosed with open angle glaucoma.',
        content: [
            'Once a tiny incision is made to gain access to a canal in the eye, our Glaucoma specialist will insert a small microcatheter to help the pressure in your eye flow naturally.'
        ],
        subheader: 'Glaucoma Treatments',
        section: '/glaucoma-treatment/#glaucoma_treatments'
    },
    {
        objectID: 156,
        title: 'Taking charge of your Glaucoma!',
        content: [
            'Most patients say they wish they’d treat their Glaucoma sooner!',
            'Many people who have Glaucoma do not realize how their vision has deteriorated.',
            'Glaucoma is a gradual thief of sight which can gradually affect a person without them knowing.'
        ],
        image: '/wp-content/uploads/2023/04/glaucoma-charge.png',
        section: '/glaucoma-treatment/#taking_charge'
    },
    {
        objectID: 157,
        title: 'We promise the benefits of our Glaucoma',
        content: [
            'This includes two Glaucoma investigations with our specialist, plus free unlimited pressure checks. This package will begin on your second visit with us (after your initial Glaucoma consultation).'
        ],
        subheader: 'Glaucoma packages',
        section: '/glaucoma-treatment/#taking_charge'
    },
    {
        objectID: 158,
        title: 'Glaucoma Annual Management Package £750',
        content: [
            'Providing three full Glaucoma investigations with our specialist, plus free unlimited pressure checks.',
            'This package will begin on your second visit with us (after your initial Glaucoma consultation).',
            'Your consultations in your annual management package will be carried out every four months for the year for a comprehensive checkup.'
        ],
        subheader: 'Glaucoma packages',
        section: '/glaucoma-treatment/#taking_charge'
    },
    {
        objectID: 159,
        title: 'Glaucoma Annual Management Package £750',
        content: [
            'Providing three full Glaucoma investigations with our specialist, plus free unlimited pressure checks.',
            'This package will begin on your second visit with us (after your initial Glaucoma consultation).',
            'Your consultations in your annual management package will be carried out every four months for the year for a comprehensive checkup.'
        ],
        subheader: 'Glaucoma packages',
        section: '/glaucoma-treatment/#taking_charge'
    },
    {
        objectID: 160,
        title: 'Glaucoma treatment and management cost London',
        content: ['The cost of Glaucoma management'],
        section: '/glaucoma-treatment/price'
    },
    {
        objectID: 161,
        title: 'The cost of Glaucoma management',
        content: [
            'The price of your private glaucoma consultation',
            '£400',
            'A comprehensive, private consultation with our dedicated Glaucoma specialist (inclusive of all eye assessments and eye scans).'
        ],
        subheader: 'Your consultation',
        section: '/glaucoma-treatment/price'
    },
    {
        objectID: 162,
        title: 'The cost of Glaucoma management',
        content: [
            'The price of your private glaucoma consultation',
            '£400',
            'A comprehensive, private consultation with our dedicated Glaucoma specialist (inclusive of all eye assessments and eye scans).'
        ],
        image: '/images/section-images/private-consultation-glaucoma-large.png',
        subheader: 'Your consultation',
        section: '/glaucoma-treatment/price'
    },
    {
        objectID: 163,
        title: 'Glaucoma Annual Screening Package',
        content: [
            'This includes two Glaucoma investigations with our specialist, plus free unlimited pressure checks. This package will begin on your second visit with us (after your initial Glaucoma consultation).'
        ],
        subheader: 'Manage your glaucoma',
        section: '/glaucoma-treatment/price/#manage'
    },
    {
        objectID: 164,
        title: 'Glaucoma Annual Management Package',
        content: [
            'Providing three full Glaucoma investigations with our specialist, plus free unlimited pressure checks. This package will begin on your second visit with us (after your initial Glaucoma consultation). Your consultations in your annual management package will be carried out every four months for the year for a comprehensive checkup.'
        ],
        subheader: 'Manage your glaucoma',
        section: '/glaucoma-treatment/price/#manage'
    },
    {
        objectID: 165,
        title: 'Glaucoma Laser Surgery',
        content: ['Selective Laser Trabeculoplasty (SLT)', '£495 per eye', 'YAG Laser Iridotomy', '£395 per eye'],
        subheader: 'Private treatment',
        section: '/glaucoma-treatment/price/#private_treatment'
    },
    {
        objectID: 166,
        title: 'Glaucoma Eye Surgery',
        content: [
            'Trabeculectomy',
            '£3,500 per eye',
            'HFDS (High-frequency deep sclerotomy)',
            '£1,200 per eye',
            'PreserFlo',
            '£3,500 per eye',
            'Canaloplasty',
            '£2,200 per eye'
        ],
        subheader: 'Private treatment',
        section: '/glaucoma-treatment/price/#private_treatment'
    },
    {
        objectID: 167,
        title: 'ICL Surgery in London',
        content: ['Implantable Contact Lenses'],
        section: '/icl'
    },
    {
        objectID: 168,
        title: 'London’s latest vision correction treatment for glasses and contact lens wearers',
        content: [
            'If you are ready to break from compromising with your everyday contact lenses or glasses, take a look at our biocompatible ICL lenses made by EVO Visian - a groundbreaking Evolution in Visual Freedom!'
        ],
        image: '/images/section-images/icl-vision-correction-large.png',
        subheader: 'Vision correction treatment',
        section: '/icl/#vision_correction'
    },
    {
        objectID: 169,
        title: 'ICL Consultation',
        content: [
            'An ICL consultation for Implantable contact lenses couldn’t be easier! Our friendly team will guide you through some eye assessments which will take approximately one hour.',
            'Once complete, your specialist will advise you on the best lens size for your eyes.',
            'During your eye assessments, we will need to dilate your pupil with drops to take detailed measurements of your retina and your exact prescription.',
            'Prior to your ICL appointment, we will advise that you do not wear contact lenses for two weeks to ensure your eye is ready for measurements to be taken.',
            'None of these measurements are invasive or uncomfortable and our ophthalmic technician will support you through these assessments.',
            'The eye drops will make your vision blurry so we advise that you have a friend or family member to help transport you home.',
            'Based on your ICL assessments, our specialist will talk with you about proceeding with the treatment and how this treatment can best suit your lifestyle!'
        ],
        image: '/images/section-images/icl-consultation-large.png',
        section: '/icl/#consultation'
    },
    {
        objectID: 170,
        title: 'ICL Treatment',
        content: [
            'On the day of your ICL treatment, it’s best not to wear eye makeup or to put drops in your eyes.',
            'Once arriving at our ICL clinic, our friendly nurse will explain what to expect during and after the procedure. Once ready you will be escorted into the procedure room.',
            'A drop of anesthetic is placed on your cornea which also dilates your eyes.',
            'The surgeon will be giving you clear and easy instructions to guide you throughout the procedure while they insert the contact lens implant.',
            'Once the procedure is finished our nurse will discuss our aftercare advice and how to use your new eye drops before your aftercare appointment with your specialist.',
            'Our Implantable contact Lens procedure lasts for two hours from when you arrive and when you return back home.'
        ],
        image: '/images/section-images/icl-treatment-large.png',
        section: '/icl/#treatment'
    },
    {
        objectID: 171,
        title: 'ICL Aftercare',
        content: [
            'For Implantable Contact Lens treatment there is a one-week recovery period where minimal activity is required before attending an aftercare appointment with your specialist.',
            'During the one week recovery period, our team is always here to answer any other questions you may have so that you can live confidently and comfortably following your ICL surgery.',
            'Once you attend an aftercare appointment with the ICL specialist you will be able to begin life without glasses or disposable contact lenses again!'
        ],
        image: '/images/section-images/icl-aftercare-large.png',
        section: '/icl/#aftercare'
    },
    {
        objectID: 172,
        title: 'Life after Implantable Contact Lenses!',
        content: [
            '99.4% of people would choose to have ICL again',
            '2,000,000+ ICL procedures worldwide',
            '20+ years of premium ICL performance',
            'Saving Money',
            'One custom lens means one all- time purchase.',
            'Never waste money by repeatedly buying plastic contact lenses to throw away. One ICL procedure saves the average contact lens buyer £13,200!',
            'For an average prescription, wearing glasses and contact lenses every year averages around £660 to keep your sight, with the added guarantee of an infection risk. For twenty years of sight that accumulates to a cost of £13,200, while contributing to 16,000 million tonnes of plastic for those twenty tears of purchase and use.',
            'Implantable Contact Lenses are a great long-term investment for permanently clear vision without any plastic waste!',
            'Saving Time',
            'Where are my contacts?',
            'Wake up in the morning with your sight ready before you are!',
            'Saving Vision',
            'No risk of infections, dry eyes or blindness',
            'Your eye health is safely cared for.',
            'Saving Our Planet',
            'Sustainable contact lenses for a sustainable future.'
        ],
        image: '/images/section-images/icl-quality-improvement-large.png',
        subheader: 'Life quality improvement',
        section: '/icl/#life_quality_improvement'
    },
    {
        objectID: 173,
        title: 'Our Implantable Contact Lenses Are transparent in price too!',
        content: [
            '£2750 per eye',
            'With 10 months interest-free finance available!',
            'The best ICL surgery price in London, saving an average of £2,000 in your treatment when you come to My-iClinic.'
        ],
        image: '/images/section-images/icl-transparent-price-large.png',
        subheader: 'Life quality improvement',
        section: '/icl/#life_quality_improvement'
    },
    {
        objectID: 174,
        title: 'Implantable Contact Lens cost London',
        content: ['Save an average of £1,000'],
        section: '/icl/price'
    },
    {
        objectID: 175,
        title: 'What’s included in my private consultation and treatment?',
        content: [
            'A FREE suitability check with our ICL specialist (a comprehensive assessment of your suitability and how implantable contact lenses will suit your lifestyle).',
            'A comprehensive consultation with your dedicated ICL specialist (inclusive of all eye assessment and eye scans).',
            'Your Implantable Contact Lens treatment performed in our private suite with your dedicated specialist and our friendly team.',
            'Up to four FREE aftercare appointments with your dedicated ICL specialist (inclusive of eye assessments and eye scans).'
        ],
        image: '/images/section-images/private-consultation-icl-large.png',
        section: '/icl/price/#consultation'
    },
    {
        objectID: 176,
        title: 'Want to pay for your treatment each month?',
        content: [
            'Finance available for Implantable Contact Lenses (ICL)',
            'We understand having ICL to correct your vision is a great investment in your eye health and lifestyle. We offer 10 months interest- free finance to help make that investment become a reality!',
            'You are eligible for our 24 months interest-free finance',
            'Calculate your monthly spend for your ICL treatment'
        ],
        image: '/images/section-images/icl-finance-large.png',
        subheader: 'ICL finance',
        section: '/icl/price/#finance'
    },
    {
        objectID: 177,
        title: '£200 The price of your ICL Consultation',
        content: [
            'Your consultation fee is inclusive of eye assessments and a private one-to-one consultation with our ophthalmologist'
        ],
        section: '/icl/price/#price'
    },
    {
        objectID: 178,
        title: '£2,750 per eye The price of your ICL Surgery',
        content: ['With 10 months interest-free finance available!'],
        section: '/icl/price/#price'
    },
    {
        objectID: 179,
        title: 'LASEK, PRK & PTK laser eye surgery London',
        section: '/lasek-prk'
    },
    {
        objectID: 180,
        title: 'Well-known for being the first generation of laser eye procedures',
        content: [
            'LASEK & PRK surgery is chosen very occasionally and in very special scenarios to correct conditions such as short-sightedness (Myopia) , long-sightedness (Hyperopia) and astigmatism.',
            'Our PTK laser eye surgery is an alternative vision correction treatment for people who want independence from glasses but also suffer from an injury on their cornea. If you have any corneal injuries, or corneal eye diseases you might be suitable for our PTK laser surgery to correct your vision.',
            'As laser eye surgery must be tailored to each patient’s prescription with complete accuracy, our laser specialists use precise algorithms to program a laser to help you see clearly without glasses or contacts.'
        ],
        image: '/images/section-images/lasek-doctor.png',
        section: '/lasek-prk/#well_known'
    },
    {
        objectID: 181,
        title: 'Well-known for being the first generation of laser eye procedures',
        content: [
            'LASEK & PRK surgery is chosen very occasionally and in very special scenarios to correct conditions such as short-sightedness (Myopia) , long-sightedness (Hyperopia) and astigmatism.',
            'Our PTK laser eye surgery is an alternative vision correction treatment for people who want independence from glasses but also suffer from an injury on their cornea. If you have any corneal injuries, or corneal eye diseases you might be suitable for our PTK laser surgery to correct your vision.',
            'As laser eye surgery must be tailored to each patient’s prescription with complete accuracy, our laser specialists use precise algorithms to program a laser to help you see clearly without glasses or contacts.'
        ],
        image: '/images/section-images/lasek-doctor.png',
        section: '/lasek-prk/#well_known'
    },
    {
        objectID: 182,
        title: 'LASEK, PRK & PTK Laser Eye Surgery at My-iClinic',
        content: [
            'LASEK (Laser Assisted Epithelial Keratomileusis) and PRK (Photorefractive keratectomy) are almost identical vision correction procedures.',
            'LASEK & PRK eye surgery only differ in how our laser specialists remove different layers of the cornea. In LASEK eye surgery, the top layer of cells is simply moved to one side and replaced after surgery, whereas the PRK surgery removes them completely.',
            'Both LASEK and PRK surgery procedures use a laser to reshape the tissue on the surface of the eye to achieve clear vision.'
        ],
        image: '/images/section-images/lasek-vision-correction-treatment-large.png',
        subheader: 'Vision correction treatment',
        section: '/lasek-prk/#vision_correction_treatment'
    },
    {
        objectID: 183,
        title: 'Consultation',
        content: [
            'Our laser treatments are the most technically advanced options for people who want the latest and greatest vision correction option to treat any blurriness, astigmatism and short-sightedness.',
            'When you visit us for a private consultation, our laser specialists will conduct a number of eye tests in order to examine all the factors involved in correcting your eyesight. Prior to your appointment, we will advise that you do not wear soft contact lenses for two weeks.',
            'If you wear hard contact lenses, we advise you not to wear these for a minimum of two weeks (including a week for every decade you have worn hard contact lenses). This is to ensure the cornea of your eye is ready for measurements to be taken accurately.',
            'Your laser specialist will then be able to offer the best possible course of treatment to correct your vision. Your first consultation will be an all-inclusive cost of £200, with no obligation to have treatment if you wish to have some time to consider your options.'
        ],
        image: '/images/section-images/lasek-vision-correction-treatment-large.png',
        section: '/lasek-prk/#consultation'
    },
    {
        objectID: 184,
        title: 'Treatment',
        content: [
            'On the day of your LASEK, PRK or PTK surgery, we advise that you do not wear any makeup or perfume and be accompanied by a relative or friend who can assist you home afterwards.',
            'When you arrive at your appointment, you will be shown into our private laser suite, where our friendly nurses will talk you through the procedure.',
            'They will place a small drop of anaesthetic on your eye and provide you with support for your eyelids, so there is no need to worry about blinking.',
            'After you are comfortable and relaxed, your laser specialist will give you easy, simple instructions throughout the process to make sure your laser treatment is smooth and accurate.'
        ],
        image: '/images/section-images/lasek-treatment-large.png',
        section: '/lasek-prk/#treatment'
    },
    {
        objectID: 185,
        title: 'Aftercare',
        content: [
            'There is nothing more important than our patients feeling comfortable after their laser treatment - which is why your dedicated laser specialist will check your eyes 1 day after your surgery.',
            'Once they check your vision, they will advise you to rest for 1 week before resuming any exercise, driving or strenuous activities.',
            'Our team will always be at the end of a phone call throughout your recovery at home to answer any more questions you may have about your life after laser treatment.',
            'In your aftercare appointment, your laser specialist will check the improvement of your vision and answer any other questions you may have before you can finally experience your new life without contact lenses and glasses!'
        ],
        image: '/images/section-images/lasek-aftercare-large.png',
        section: '/lasek-prk/#aftercare'
    },
    {
        objectID: 186,
        title: 'LASEK, PRK & PTK laser surgery cost London',
        content: ['Save an average of £1,000'],
        section: '/lasek-prk/price'
    },
    {
        objectID: 187,
        title: 'What’s included in my private consultation and treatment?',
        content: [
            'A FREE suitability laser check with our laser specialist (acomprehensive assessment of your suitability and how LASEK or PRK laser eye surgery will suit your lifestyle).',
            'A comprehensive consultation with your dedicated laser specialist (inclusive of all eye assessment and eye scans).',
            'Your laser surgery performed in our private laser suite with your dedicated specialist and our friendly team.',
            'Up to four FREE aftercare appointments with your dedicated laser specialist (inclusive of eye assessments and eye scans)'
        ],
        image: '/images/section-images/private-consultation-lasek-large.png',
        subheader: 'Your consultation',
        section: '/lasek-prk/price/#your_consultation'
    },
    {
        objectID: 188,
        title: 'Thinking about splitting your laser treatment cost?',
        content: [
            'Finance available for LASEK, PRK & PTK laser eye surgery',
            'We understand having LASEK, PRK or PTK to correct your vision is a great investment in your eye health and lifestyle. We offer 24 months interest- free finance to help make that investment become a reality!',
            'YOU ARE ELIGIBLE FOR OUR 12 MONTHS INTEREST-FREE FINANCE',
            'Calculate your monthly spend for your laser treatment',
            'If you’re eligible for our interest-free finance, you can calculate your monthly spend so you’re always in the know with regard to payments for your laser eye treatment.',
            'If you have any queries regarding pricing, you can get in touch with our specialists for a consultation today on 0208 445 8877.'
        ],
        image: '/images/section-images/lasek-finance-large.png',
        subheader: 'Cost & finance',
        section: '/lasek-prk/price/#cost_and_finance'
    },
    {
        objectID: 189,
        title: '£200 The price of your LASEK & PRK consultation',
        content: [
            'Your consultation fee is inclusive of eye assessments and a private one-to-one consultation with our ophthalmologist'
        ],
        section: '/lasek-prk/price/#price'
    },
    {
        objectID: 190,
        title: '£2,400 per eye The price of your LASEK & PRK Laser eye surgery',
        content: ['With 24 months interest-free finance available.'],
        section: '/lasek-prk/price/#price'
    },
    {
        objectID: 191,
        title: 'LASIK Laser Eye Surgery London',
        content: ['The traditional laser eye surgery method to remove glasses & contact lenses from everyday life!'],
        section: '/lasik-london'
    },
    {
        objectID: 192,
        title: 'LASIK may be the suitable alternative to correct your vision',
        content: [
            "Do you own multiple pairs of reading glasses or varifocals? While they’re a fact of aging, you most likely feel you shouldn't need them yet. Our lifestyles shouldn't be compromised by the limitations of our vision.",
            'If you’d really like to get rid of your glasses, but you’re not sure where to begin, our LASIK procedure is safe and effective for someone like you.'
        ],
        image: '/images/section-images/lasik-banner.png',
        section: '/lasik-london/#suitable_alternative'
    },
    {
        objectID: 193,
        title: 'LASIK Consultation',
        content: [
            'Before arriving at your LASIK consultation, we would ask that you do not wear soft or hard contact lenses for two weeks.',
            'This is because contact lenses reshape the surface of your eye and can interfere with the measurements we need to take in order to make sure your vision can be precisely corrected.',
            'When you arrive at our LASIK clinic, our friendly technicians will guide you through a number of eye assessments on your cornea in order to determine the best possible outcome LASIK can give you.',
            'Once you meet your LASIK specialist, they will be able to assess whether your eyes are suitable for this treatment or if any alternative laser treatments might be better for your eye health, for example, to reduce the risk of unusually dry eyes following the procedure.',
            'Because we dilate your pupils to comprehensively assess your eyes, we advise that a friend or family member accompany you to help transport you home.',
            'Our private LASIK consultation is completely FREE without any obligation to have treatment if you wish to consider your options.'
        ],
        image: '/images/section-images/lasik-consultation-large.png',
        section: '/lasik-london/#consultation'
    },
    {
        objectID: 194,
        title: 'LASIK Treatment',
        content: [
            'When you arrive at our clinic, our friendly nurse will take you to our laser suite, they will talk you through the procedure and answer any questions you may have about your LASIK procedure.',
            'They will administer anesthetic eye drops into your eyes to make sure the procedure itself is very easy and completely painless.',
            'Our nurse will introduce you to your laser specialist and make you comfortable.',
            'Our laser specialist makes a small incision to create a flap on the surface of your eye. The LASIK laser reshapes these exposed layers before the specialist will fold the flap back into position.',
            'LASIK reshapes the eye’s cornea and increases the focus of light on your retina.This removes the need for contact lenses or glasses because LASIK changes the focusing power of your cornea and restores natural vision again.',
            'Your eye will heal naturally over the following hours and days, and the majority of patients report their vision improves within 24 hours!'
        ],
        image: '/images/section-images/lasik-treatment-large.png',
        section: '/lasik-london/#treatment'
    },
    {
        objectID: 195,
        title: 'LASIK Aftercare',
        content: [
            'We want nothing more than for you to feel comfortable after your LASIK surgery, which is why our team is always here to answer any questions you may have during your recovery.',
            'Before you leave on the day of your LASIK surgery, our friendly nurse will give you aftercare instructions and eye drops to take home.',
            'The following day after your LASIK treatment your laser specialist will check your vision and monitor the progress of your vision.',
            'After your first day aftercare appointment you will have to have minimal physical activity and rest for 1 week.',
            'This is to make sure your eye can heal properly without any possibility of injury. Once your 1 week recovery period is over you laser specialist will check in with you again and carry out some further eye assessments.',
            'Following this, you can resume all normal activities again with your natural, clear vision restored!'
        ],
        image: '/images/section-images/lasik-aftercare-large.png',
        section: '/lasik-london/#aftercare'
    },
    {
        objectID: 196,
        title: 'LASIK laser eye surgery cost London',
        content: ['Save you an average of £1,000'],
        section: '/lasik-london/price'
    },
    {
        objectID: 197,
        title: 'What’s included in my private consultation and treatment?',
        content: [
            'A FREE suitability laser check with our laser specialist (a comprehensive assessment of your suitability and how LASIK laser eye surgery will suit your lifestyle).',
            'A comprehensive consultation with your dedicated laser specialist (inclusive of all eye assessment and eye scans).',
            'Your LASIK surgery was performed in our private laser suite with your dedicated specialist and our friendly team.',
            'Up to four FREE aftercare appointments with your dedicated laser specialist (inclusive of eye assessments and eye scans)'
        ],
        image: '/images/section-images/private-consultation-lasik-large.png',
        subheader: 'LASIK consultation',
        section: '/lasik-london/price/#consultation'
    },
    {
        objectID: 198,
        title: 'Thinking about splitting your treatment cost?',
        content: [
            'Finance available for LASIK laser eye surgery',
            'We understand having LASIK to correct your vision is a great investment in your eye health and lifestyle. We offer 12 months interest- free finance to help make that investment become a reality!'
        ],
        image: '/images/section-images/lasik-finance-large.png',
        subheader: 'LASIK finance',
        section: '/lasik-london/price/#finance'
    },
    {
        objectID: 199,
        title: '£200 The price of your LASIK consultation',
        content: [
            'Your consultation fee is inclusive of eye assessments and a private one-to-one consultation with our ophthalmologist'
        ],
        section: '/lasik-london/price/#price'
    },
    {
        objectID: 200,
        title: '£2,400 per eye The price of your LASIK surgery',
        content: ['With 12 months interest-free finance available.'],
        section: '/lasik-london/price/#price'
    },
    {
        objectID: 201,
        title: 'LASIK laser eye surgery couldn’t be more cost-effective!',
        content: [
            'Our London laser specialists save you an average of £1,000 for your treatment and aftercare appointments compared to other eye clinics.'
        ],
        section: '/lasik-london/price/#cost_effective'
    },
    {
        objectID: 202,
        title: 'LASIK laser eye surgery cost London',
        content: ['Save you an average of £1,000'],
        section: '/myopia'
    },
    {
        objectID: 203,
        title: 'Myopia Mitigation Clinic for Children London',
        content: ['Manage your child’s short sightedness with our Myopia treatment & management clinic'],
        section: '/myopia'
    },
    {
        objectID: 204,
        title: 'What is Myopia?',
        content: [
            'Myopia, also known as ‘shortsightedness’, is where the eye grows too long, causing your distant vision to become very blurry',
            'As the eyes continue to abnormally elongate, the retina is stretched over a greater length. This means the light comes to a focus in front of the retina and glasses or contact lenses are required to see.',
            'he more the eye elongates the greater the risk of irreversible loss of vision later in life. This is why the prevention of myopia (shortsightedness) is very important. Myopia has become much more prominent among children to the point where it is now considered a pandemic. More children are becoming myopic and the myopia is more severe.'
        ],
        image: '/wp-content/uploads/2023/04/myopia-large.png',
        section: '/myopia/#what_is_myopia'
    },
    {
        objectID: 205,
        title: 'Myopia Lifestyle',
        content: [
            "Bringing your child's indoor lifestyle into the outdoor environment. The more we continue our lifestyle inside without natural light, we risk progressing our myopia.",
            "Your child's lifestyle plays a very important role in their everyday eyesight and for their future sight.",
            "To prevent and mitigate the risk of myopia, we encourage a change in lifestyle by bringing your child's everyday activities outdoors.",
            'Our Myopia specialist, Dr. Bolger will provide you and your child with material to recommend these lifestyle adjustments when visiting our Myopia control clinic.'
        ],
        image: '/wp-content/uploads/2023/04/myopia-lifestyle-large.png',
        section: '/myopia/#lifestyle'
    },
    {
        objectID: 206,
        title: 'Myopia Research',
        content: [
            'Our Myopia specialist, Mr. Bolger has been treating children and adults with myopia (nearsightedness) and hyperopia (farsightedness) for the past ten years.',
            'During these years, he has noticed a rapid progression of myopia in young children, aged as little as 3 years old.',
            "His research has identified that natural daylight is essential for our eyes to develop naturally, without the eye needing to compensate its natural and normal shape. The longer the axial length of a child's eye, the more difficult their vision becomes.",
            "The purpose of monitoring and preventing the growth of your child's axial length is to make sure their vision in the future is saved and they will not experience blindness."
        ],
        image: '/wp-content/uploads/2023/04/myopia-research-large.png',
        section: '/myopia/#research'
    },
    {
        objectID: 207,
        title: 'Myopia Treatments?',
        content: [
            "Lifestyle changes, atropine eye drops and careful, continuous monitoring of your child's myopia are all effective in treating your child's myopic condition.",
            "Our 0.01% and 0.05% atropine eye drops can be prescribed by our myopia specialist to prevent your child's eye from elongating and remissen the symptoms of worsening vision.",
            'However, our atropine treatments are most effective when lifestyle changes are made by changing our day-to-day indoor activities into the natural daylight.'
        ],
        image: '/wp-content/uploads/2023/04/myopia-treatments-large.png',
        section: '/myopia/#treatments'
    },
    {
        objectID: 208,
        title: "Mitigating Your Child's Myopia",
        content: [
            'Our Myopia mitigation and control clinic is a program of treatment that reduces the rate of growth of the eye and stops it getting too long.',
            "By 2050 the World Health Organization predicts that 50% of our world's population will be suffering from Myopia.",
            'We are here to create a positive impact and help reduce this predicted number by providing accessible Atropine treatment and expert medical advice for your child.'
        ],
        image: '/wp-content/uploads/2023/04/mitigating-myopia-large.png',
        section: '/myopia/#mitigating'
    },
    {
        objectID: 209,
        title: 'Atropine eye drops 0.01% & 0.05%',
        content: [
            'Low-dose atropine eye drops such as 0.01% and 0.05% are proven to be an effective treatment to slow down Myopia progression. Your child’s Myopia specialist will be able to assess which dose will be the right treatment for your child’s vision.',
            'Our 0.01% is best suited for children who have started to develop Myopia but the growth of their eyes are not rapidly progressing.',
            'Our 0.05% is a stronger concentration of treatment and may work better to slow or control Myopia progression if the stage of your child’s Myopia is rapidly progressing.',
            'When coming for a private Myopia consultation with our Myopia specialist, they will decide which Atropine eye drops are best for your child’s eye health based on how fast your child’s Myopia is progressing.',
            'Professional advice on how to maintain your child’s eye health is very helpful for preventing and slowing down Myopia. Your Myopia specialist will be able to talk with you and your child about lifestyle activities and how adjusting your daily routine with more natural light can also be better changed for the benefit of your child’s eye health.'
        ],
        subheader: 'Myopia treatment we can provide with regular management',
        section: '/myopia/#management'
    },
    {
        objectID: 210,
        title: 'Myopia check-up & management appointments',
        content: [
            'After your child has been given a course of our Atropine eye drops, it is very important that they attend a Myopia check-up.',
            'Your child’s Myopia specialists will need to assess the effectiveness of the treatment and the health of your child’s eye. Because Myopia is a chronic condition, it needs to be monitored carefully to prevent the eye from growing.',
            'Most people think Myopia is a curable eye condition once they have their Atropine eye drops, but in some cases your child’s eyes may start rapidly growing too long (also known as Hyperopia) or the concentration of their treatment may need to change.',
            'A myopia check-up appointment is very important especially after your child has been given a course of treatment because our Myopia specialist will need to check the progress of the treatment to make your child’s quality of life and vision much better.'
        ],
        subheader: 'Myopia treatment we can provide with regular management',
        section: '/myopia/#management'
    },
    {
        objectID: 211,
        title: 'Other treatments your opticians can help with',
        content: [
            'Miyosmart glasses Miyosmart glasses monitor and reduce the growth of your child’s eye. MiyoSmart glasses provide clear vision simultaneously at all viewing distances',
            'Ortho-k contact lensesOrtho-k contact lenses gently reshape the cornea of your child’s eyes while they sleep. Astigmatism can also be corrected by using Ortho-K and can slow the progression of myopia.'
        ],
        image: '/wp-content/uploads/2023/04/myopia-other-treatments-large.png',
        section: '/myopia/#other_treatments'
    },
    {
        objectID: 212,
        title: 'Have you noticed that your child has an existing or emerging eye condition?',
        content: [
            'It’s worrying, because you know that good vision is essential for them to not fall behind, both developmentally and socially.',
            'So, you’re looking for a child-friendly and affordable eye doctor who can help give your child the best opportunity to live a visually able life.'
        ],
        image: '/wp-content/uploads/2023/04/myopia-emerging-eye-condition-large.png',
        section: '/myopia/#other_treatments'
    },
    {
        objectID: 213,
        title: 'The world feels different',
        content: [
            'Your child has gotten used to frequent changes in their glasses prescription. But headaches, eyestrain and squinting is not always the best quality of life, especially when children are growing, adapting and learning new things everyday.',
            'When myopia develops, it can be difficult for children to understand their condition without appropriate guidance and treatment.'
        ],
        image: '/wp-content/uploads/2023/04/myopia-stack-card-1-large.png',
        section: '/myopia/#mytopia_experience'
    },
    {
        objectID: 214,
        title: 'Experience of development',
        content: [
            'A child’s experience of learning, exploring the world and developing shouldn’t be hindered by the experience of glasses. Children with myopia can feel hopeless and frustrated when they believe they have little chance of removing their glasses.',
            'For us, helping children understand that their myopia condition can be slowed down by lifestyle changes and available treatments will give them a chance to embrace their glasses without frequent prescription changes.'
        ],
        image: '/wp-content/uploads/2023/04/myopia-stack-card-2-large.png',
        section: '/myopia/#mytopia_experience'
    },
    {
        objectID: 215,
        title: 'Are you above the age of 21 and experiencing Myopia?',
        content: [
            'Fortunately, there are many amazing ways we can correct short sightedness in adults.',
            'Glasses can be a low cost solution. Contact lenses, although not always ideal, can be a practical one. But there are even more effective ways to correct vision now.',
            'At My-iClinic, our specialists are experts in three types of procedures that can cure your short sight, with or without astigmatism:'
        ],
        image: '/wp-content/uploads/2023/04/myopia-experiencing-large.png',
        section: '/myopia/#age_of_21'
    },
    {
        objectID: 216,
        title: 'By 2050, 4.9 billion people will be myopic, most of whom have not yet been born.',
        content: [
            'When they arrive in this world their eyes will contain the perfect algorithm for eye growth that evolved for millions of generations and has produced emmetropia (crisp clear vision).',
            'But as soon as they arrive in the modern urbanized world this algorithm is corrupted by unnatural environmental inputs which causes the eye to continue to elongate, resulting in Myopia.',
            'Plano 2025 is an organization whose aim is that no child born after 2025 should become myopic. If we are diagnosing 10-year-olds with myopia in 2035 we have failed.',
            'And it is not a question of finding a “cure” for myopia, it is a question of allowing our future children to live in an environment that is close to nature.',
            'This will allow natural eye development and stop the development of myopia in the first place.',
            'Leave the eye alone and it will be perfect. This concept is not only true for myopia but for many of the crises that the human race is currently facing.'
        ],
        image: '/wp-content/uploads/2023/04/myopia-plano-2025-large.png',
        subheader: 'Piano 2025',
        section: '/myopia/#piano_2025'
    },
    {
        objectID: 217,
        title: 'Myopia control management & treatment cost London',
        content: ['Save you an average of £500'],
        section: '/myopia/price'
    },
    {
        objectID: 218,
        title: 'Is your child suffering from Myopia (short-sightedness)?',
        content: [
            "We can provide Atropine treatment and management check ups to monitor your child's eye health with our private Myopia specialist in London."
        ],
        subheader: 'Myopia consultation',
        section: '/myopia/price/#consultation'
    },
    {
        objectID: 219,
        title: '£400 All-inclusive of comprehensive eye assessments for your child',
        content: [
            'Your consultation fee is inclusive of eye assessments and a private one-to-one consultation with our ophthalmologist'
        ],
        section: '/myopia/price/#price'
    },
    {
        objectID: 220,
        title: '£250 per check up consultation A Myopia management consultation',
        content: [
            "This is all inclusive of comprehensive scans to monitor your child's treatment and payable at the time of booking. Please read our refunds and cancellation policy for all new and aftercare Myopia appointments."
        ],
        section: '/myopia/price/#price'
    },
    {
        objectID: 221,
        title: 'Our refunds and cancellation policy',
        content: [
            'A new Myopia consultation with our specialists is £350 (non-refundable). However, we understand there can be circumstances where you may not be able to attend after booking.',
            'Therefore, If you would like to change your appointment after booking, you will need to inform the clinic 72 hours before your appointment time to ensure you do not lose your appointment fee.',
            'Any cancellations that are not communicated before after our 72 hour period policy is subject to be held by the clinic and any new appointment will need to be booked again.'
        ],
        image: '/images/section-images/myopia-refunds-and-cancellation-large.png',
        subheader: 'refunds and cancellation',
        section: '/myopia/price/#refunds_and_cancellation'
    },
    {
        objectID: 222,
        title: 'A new myopia consultation',
        content: [
            'Our London Myopia specialists save you an average of £500 for your treatment and aftercare appointments compared to other eye clinics.'
        ],
        image: '/images/section-images/new-myopia-consultation.png',
        section: '/myopia/price/#new_myopia_consulation'
    }
];

index
    .saveObjects(objects)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
