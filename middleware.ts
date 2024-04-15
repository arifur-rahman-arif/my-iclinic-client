import { NextRequest, NextResponse } from 'next/server';
import { isPagePublished } from 'src/lib/commonUtils';

// eslint-disable-next-line require-jsdoc
export async function middleware(request: NextRequest) {
    const currentPath = new URL(request.url).pathname;

    // Check if the request is for a page (not an asset) and not starting with /api/
    if (
        !currentPath.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|json|woff|woff2|ttf|eot|mp4)$/) &&
        !currentPath.startsWith('/api/')
    ) {
        // Remove the leading slash and replace other slashes with dashes
        const convertedPath = currentPath.replace(/^\//, '').replace(/\//g, '-');

        const isPublished = await isPagePublished({ slug: convertedPath });
        if (!isPublished && convertedPath != '404') {
            return NextResponse.redirect(new URL('/404', request.url));
        }
    }
}
