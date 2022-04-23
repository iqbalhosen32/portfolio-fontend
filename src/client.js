import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: "wn1a2joj",
    dataset: "production",
    apiVersion: '2022-02-01',
    useCdn: true,
    // token: 'skYWU13WW7Wti5g7wO6VZg47Qye38TRDjcnk3cFtUSj43y7pBcDVyWI6FoQswhLAinKMmSHYITDuMJ8RwriDfOjfI1an14BUhm10ZqHTl5U0oQY8vhTRkwEYB57rtmSCbzCDkLAnBuMC48N3aCGk9U3jSLiTULgx8p3X2uaa1G8D5CxCLRVi',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);