import { BreadCrumb } from '@/components/Breadcrumb';
import Page from '@/components/Page';
import { CompanyLogos } from '@/components/page-sections';
import Engine from 'src/components/page-sections/SuitabilityCheck';
import Provider from '@/page-sections/SuitabilityCheck/Context';

/**
 * Lazy Eyes page component for the App
 *
 * * Url: /suggestion-engine
 *
 * @export
 * @returns {JSX.Element}
 */
export default function SuitabilityCheck(): JSX.Element {
    return (
        <Page title="Suitability check" description="Check you laser eye surgery suitability">
            <BreadCrumb className="md:flex" />

            <Provider>
                <Engine />
            </Provider>

            <CompanyLogos />
        </Page>
    );
}
