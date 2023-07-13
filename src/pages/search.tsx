import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import Page from '@/components/Page';
import { Section } from '@/components/Section';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const SearchResults = dynamic(() => import('@/components/SearchResults'), {
    loading: () => <ComponentLoader />,
    ssr: false
});
/**
 * Search page
 * @returns {*} JSX Element
 */
export default function Search(): JSX.Element {
    const router = useRouter();
    const query = router.query?.query;

    let title = 'Search Results';

    if (query) {
        title = `Search Results | ${query}`;
    }

    return (
        <Page title={title}>
            <Section>
                <Container>
                    <SearchResults router={router} />
                </Container>
            </Section>
        </Page>
    );
}
