'use strict';

module.exports = async (client) => {
  const contactBlock = await client.itemType.find('contact_block');
  const authorModel = await client.itemType.find('author');

  const profileBlockField = await client.fields.create(authorModel.id, {
    label: 'Profile',
    apiKey: 'profile_blocks',
    fieldType: 'rich_text',
    validators: {
      richTextBlocks: {
        itemTypes: [
          contactBlock.id,
        ]
      }
    },
    appearance: {
      editor: 'rich_text',
      parameters: {
        start_collapsed: true
      },
      addons: [],
    },
  });
}
