// sanity-work/schemas/blog.js

export default {
  name: "blog",
  title: "Blogs",
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
      name: "excerpt",
      title: "Short summary",
      type: "text",
      rows: 3,
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }], // rich text for blog content
    },
    {
      name: "createdAt",
      title: "Created at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
  ],
};