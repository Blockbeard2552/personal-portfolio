import {createClient, type ClientConfig} from '@sanity/client';

const config: ClientConfig = {
    projectId: 'g6qhz6g8',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2025-01-09'
}

const sanityClient = createClient(config);

export default sanityClient;

