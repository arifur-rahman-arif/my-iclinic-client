export interface FeaturedPatientProps {
    name: string;
    front_image: string;
    additional_images: {
        imageURL: string;
    }[];
    subheading: string;
    heading: string;
    descriptions: string[];
}
