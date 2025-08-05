// Google Analytics types
type GtagCommand = 'config' | 'event' | 'js' | 'set';
type GtagConfigParams = {
	page_title?: string;
	page_location?: string;
	page_path?: string;
	send_page_view?: boolean;
};
type GtagEventParams = Record<string, string | number | boolean>;

declare global {
	interface Window {
		dataLayer: unknown[];
		gtag: (
			command: GtagCommand,
			targetId?: string | Date,
			config?: GtagConfigParams | GtagEventParams
		) => void;
	}
}

export {};