import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';

export async function getAllPosts() {
  return await getCollection('blog', ({ data }) => data.draft !== true);
}

export function sortMDByDate(posts: Array<CollectionEntry<'blog'>>) {
  return posts.sort((a, b) => {
    const aDate = new Date(a.data.updatedDate ?? a.data.pubDate).valueOf();
    const bDate = new Date(b.data.updatedDate ?? b.data.pubDate).valueOf();
    return bDate - aDate;
  });
}
