import { client } from '../../lib/client';

export async function loadData() {
  const query = `{
    "footers": *[_type == "footer"] | order(publishedDate desc) {_id, publishedDate, title, slug, description, mainImage, _createdAt, categories[], body, author->},
    "total": count(*[_type == "footer"])
  }`;

  const { footers } = await client.fetch(query);

  return {
    footers
  }
}