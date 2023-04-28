interface IconHomeInterface {
    className?: string;
    active?: boolean;
}

/**
 * Home icon
 *
 * @returns {*}  {JSX.Element}
 */
const IconHome = ({ className, active = false }: IconHomeInterface): JSX.Element => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                stroke={active ? 'var(--color-heading2)' : `#9B9FA1`}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9 22V12H15V22"
                stroke={active ? 'var(--color-heading2)' : `#9B9FA1`}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default IconHome;
