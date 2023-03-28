import ComponentLoader from '@/components/ComponentLoader';
import { NavMenuType } from '@/components/Header/navMenuList';
import SubMenuBlogs from '@/components/Header/SubMenus/SubMenuBlogs';
import SubMenuList from '@/components/Header/SubMenus/SubMenuList';
import { NextRouter } from 'next/router';

interface PricingFinancing {
    submenu: NavMenuType[];
    router: NextRouter;
    posts?: any;
}

/**
 * Price submenu
 *
 * @param {NavMenuType[]} submenu
 * @param {NextRouter} router
 * @param {any} posts
 * @returns {JSX.Element}
 * @constructor
 */
const PricingFinancing = ({ submenu, router, posts }: PricingFinancing): JSX.Element => {
    return (
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(30rem,_1fr))] gap-12 py-12 xl:gap-40 xl:py-20">
            <div className="grid gap-[4.5rem]">
                <SubMenuList submenu={submenu} router={router} subMenuTitle="consultation Prices" />

                <SubMenuList
                    submenu={[
                        {
                            name: 'Our health insurance partners',
                            url: '/pricing-and-financing/financing-your-treatment#insurance',
                            slug: 'our-health-insurance-partners',
                            metaDescription: 'Fund your treatment with our health insurance partners'
                        },
                        {
                            name: 'Finance calculator',
                            url: '/pricing-and-financing/financing-your-treatment#calculator',
                            slug: 'our-health-insurance-partners',
                            metaDescription: '24 month finance option'
                        }
                    ]}
                    router={router}
                    subMenuTitle={
                        <>
                            insurance partners and <br /> finance options
                        </>
                    }
                />
            </div>

            <div className="grid gap-[4.5rem]">
                <SubMenuList
                    submenu={[
                        {
                            name: 'Cataract surgery cost',
                            url: '/cataract/price',
                            slug: 'cataract-surgery-cost',
                            metaDescription: 'Save you an average of £1,000 for your cataract treatment'
                        },
                        {
                            name: 'ReLEx SMILE treatments cost',
                            url: '/relex-smile-london/price',
                            slug: 'relex-smile-treatments-cost',
                            metaDescription:
                                'ReLEx SMILE laser eye surgery is a new vision correction treatment to fix short-sightedness, blurriness & astigmatism. Learn more about fixing your vision with our treatments.'
                        },
                        {
                            name: 'Presbyond treatments cost',
                            url: '/presbyond-london/price',
                            slug: 'presbyond-treatments-cost',
                            metaDescription: 'Save an average of £1,000'
                        },
                        {
                            name: 'Glaucoma surgery cost',
                            url: '/glaucoma-treatment/price',
                            slug: 'glaucoma-surgery-cost',
                            metaDescription: 'Reducing PCO after Cataract Surgery'
                        },
                        {
                            name: 'Myopia Treatment cost',
                            url: '/myopia/price',
                            slug: 'myopia-treatment-cost',
                            metaDescription: 'Myopia control management & treatment cost London'
                        }
                    ]}
                    router={router}
                    subMenuTitle="Our treatment prices"
                />
            </div>

            {/* Blogs */}
            {Array.isArray(posts) ? (
                posts.length && <SubMenuBlogs title="Our clinic" blogContainerClassName="!grid-cols-1" posts={posts} />
            ) : (
                <ComponentLoader />
            )}
        </div>
    );
};

export default PricingFinancing;
