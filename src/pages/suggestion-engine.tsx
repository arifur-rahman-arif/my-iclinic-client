import { BreadCrumb } from '@/components/Breadcrumb';
import Page from '@/components/Page';
import { CompanyLogos } from '@/components/page-sections';
import Engine from '@/page-sections/SuggestionEngine';
import Provider from '@/page-sections/SuggestionEngine/Context';

/**
 * Lazy Eyes page component for the App
 *
 * * Url: /suggestion-engine
 *
 * @export
 * @returns {JSX.Element}
 */
export default function SuggestionEngine(): JSX.Element {
    return (
        <Page
            title="Lazy Eye treatment in London"
            description="My-iClinic offers experienced and comprehensive treatment for Lazy eyes in adults and children (amblyopia). Get in touch with us to learn how we can help."
        >
            <BreadCrumb className="md:flex" />

            <Provider>
                <Engine />
            </Provider>

            <CompanyLogos />
        </Page>
    );
}
