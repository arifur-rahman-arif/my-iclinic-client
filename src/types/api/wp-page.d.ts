export interface PageDataInterface<I> extends I {
    masthead_image: {
        image: string
        image_medium: string
        image_large: string
    },
    masthead_heading: string
    masthead_subheading: string
    masthead_price: string
    google_reviews: string
    trustpilot_reviews: string;
    request_callback_title: string;
    full_width_image_section: {
        heading: string;
        descriptions?: string[];
        image: string;
        large_image: string;
    };
    cta_section: {
        subheading: string,
        heading: string,
        description: string
    },
}

export default interface WpPageResponseInterface<PageContentInterface> {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
        rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
        protected: boolean;
    };
    excerpt: {
        rendered: string;
        protected: boolean;
    };
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    template: string;
    meta: any[];
    categories: string[];
    _links: {
        self: {
            href: string;
        };
        collection: {
            href: string;
        };
        about: {
            href: string;
        };
        author: {
            embeddable: boolean;
            href: string;
        };
        replies: {
            embeddable: boolean;
            href: string;
        };
        'version-history': {
            href: string;
        };
        'wp:attachment': {
            href: string;
        };
        'wp:term': {
            taxonomy: string;
            embeddable: boolean;
            href: string;
        };
        curies: {
            name: string;
            href: string;
            templated: boolean;
        }[];
    };
    
    acf: Partial<PageDataInterface<PageContentInterface> & PageContentInterface>;
    yoast_head: any;
    yoast_head_json: any;
}
