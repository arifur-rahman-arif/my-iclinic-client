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
        <Page title="Suitability check" description="Suggestion Engine">
            <BreadCrumb className="md:flex" />

            <Provider>
                <Engine />
            </Provider>

            <CompanyLogos />
        </Page>
    );
}
