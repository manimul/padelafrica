import icon from 'react-icons/lib/md/new-releases';

export default {
  name: 'team',
  title: 'Team',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },

    {
      name: 'boardPosition',
      title: 'Board Position',
      type: 'string',
    },

    {
      name: 'myTags',
      title: 'Tags',
      type: 'tags',
      options: {
        includeFromRelated: 'myTags',
      },
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'blockContent',
    },
    {
      title: 'Linkedin Link',
      name: 'linkedinUrl',
      type: 'url',
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
        date: selection.date,
        media: selection.media,
      };
    },
  },
};
