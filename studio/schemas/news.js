import icon from 'react-icons/lib/md/new-releases';

export default {
  name: 'news',
  title: 'News',
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
      name: 'extract',
      title: 'Extract',
      type: 'blockContent',
    },
    {
      name: 'meta',
      title: 'Meta',
      type: 'string',
    },
    {
      name: 'publishedDate',
      title: 'Published date',
      type: 'datetime',
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
      date: 'publishedDate',
      media: 'feature',
    },
    prepare(selection) {
      const year = selection.date && selection.date.split('-')[0];

      return {
        title: `${selection.title} ${year ? `(${year})` : ''}`,
        date: selection.date,
        media: selection.media,
      };
    },
  },
};
