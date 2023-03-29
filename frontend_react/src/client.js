import sanityClient  from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
    projectId: '6onm6625',
    dataset: 'production',
    apiVersion: '2023-03-23',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
}

);


const builder =imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

