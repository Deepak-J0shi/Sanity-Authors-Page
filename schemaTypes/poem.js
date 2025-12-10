// sanity-work/schemas/poem.js

export default {
  name: "poem",
  title: "Poems",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "body",
      title: "Poem Body",
      type: "array",
      of: [{ type: "block" }], // yahi pe tum poem ki lines / stanzas likhogi
    },
    {
      name: "createdAt",
      title: "Created at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
  ],
};