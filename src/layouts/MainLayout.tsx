import { Header } from '@/components/header';
import LazyComponent from '@/components/LazyComponent';
import { AlertInterface } from '@/features/alert/alertSlice';
import { AppState } from '@/store';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';

const Footer = dynamic(() => import('@/components/footer/Footer'));
const Alert = dynamic(() => import('@/components/alert/Alert'));
const BottomMenu = dynamic(() => import('@/components/page-sections/bottom-menu/BottomMenu'));

interface PropTypes {
    children: ReactNode;
}

/**
 * MainLayout layout
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | null | undefined} children
 * @returns {JSX.Element}
 * @constructor
 */
const MainLayout = ({ children }: PropTypes): JSX.Element => {
    const { showAlert } = useSelector((state: AppState) => state.alert as AlertInterface);
    // Const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    // const deviceSize = useDeviceSize();

    // setTimeout(() => {
    //     if (smallSizes.includes(deviceSize)) {
    //         setLoadCallbackSection(true);
    //     }
    // }, 2500);

    return (
        <>
            <Header />
            {children}
            <LazyComponent>
                <Footer />
            </LazyComponent>
            {showAlert && <Alert />}
            {/* {loadCallbackSection ? <BottomMenu /> : <></>} */}
            <BottomMenu />
        </>
    );
};

export default MainLayout;
