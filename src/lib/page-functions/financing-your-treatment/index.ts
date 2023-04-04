import { AverageSpendInterfaceProps } from '@/page-sections/FinanceCalculator/AverageSpend';
import { TreatmentInterface } from '@/page-sections/FinanceCalculator/Treatment';
import { WpPageResponseInterface } from '@/types';
import { getData } from '@/utils/apiHelpers';

interface AcfInterface {
    surgery_cost: string;
    default_upfront_percentage: string;
    minimum_upfront_percentage: string;
    maximum_upfront_percentage: string;
    minimum_instalment: string;
    maximum_instalment: string;
    default_instalment: string;
    averageSpend: AverageSpendInterfaceProps;
}

/**
 * Get the surgery treatment data from WordPress database
 *
 * @returns {Promise<Partial<TreatmentInterface>[]>}
 */
export const getTreatments = async (): Promise<TreatmentInterface[]> => {
    const postResponse: Response = await getData({
        url: `${process.env.WP_REST_URL}/surgery-cost?per_page=100`
    });

    if (postResponse.status !== 200) {
        throw new Error('Unable to fetch WordPress posts. Error text: ' + postResponse.statusText);
    }

    const posts: WpPageResponseInterface<AcfInterface>[] = await postResponse.json();

    return posts.map((post, index) => {
        return {
            name: post.title.rendered,
            active: index === 0,
            cost: Number(post.acf.surgery_cost),
            minUpfront: Number(post.acf.minimum_upfront_percentage),
            maxUpfront: Number(post.acf.maximum_upfront_percentage),
            defaultUpfront: Number(post.acf.default_upfront_percentage),
            minInstallment: Number(post.acf.minimum_instalment),
            maxInstallment: Number(post.acf.maximum_instalment),
            defaultInstallment: Number(post.acf.default_instalment),
            averageSpend: post.acf.averageSpend
        } as TreatmentInterface;
    });
};
