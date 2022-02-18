import icon from 'react-icons/lib/md/new-releases';

export default {
  name: 'sections',
  title: 'Sections',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'blockContent',
    },

    {
      name: 'externalId',
      title: 'External ID',
      type: 'number',
    },

    {
      name: 'feature',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'feature',
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: selection.media,
      };
    },
  },
};
