import PostInterface from './api/single-post';
import WPSettings from './api/wp-settings';
import DoubleVisionPageContentInterface from './pages/doubleVision';
import WpPageResponseInterface, { PageDataInterface } from './api/wp-page';
import { ImageType, ImageType2 } from './image';
import AstigmatismPageContentInterface from './pages/astigmatism';
import ConjunctivitisPageContentInterface from './pages/conjunctivitis';
import EyeDiagnosticsPageContentInterface from './pages/eyeDiagnostics';
import LazyEyesPageContentInterface from './pages/lazyEyes';

export type {
	PostInterface,
	WPSettings,
	DoubleVisionPageContentInterface,
	EyeDiagnosticsPageContentInterface,
	ImageType,
	ImageType2,
	WpPageResponseInterface,
	PageDataInterface,
	ConjunctivitisPageContentInterface,
	AstigmatismPageContentInterface,
	LazyEyesPageContentInterface
};
