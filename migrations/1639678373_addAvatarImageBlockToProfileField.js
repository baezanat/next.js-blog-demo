'use strict';

module.exports = async (client) => {
  const avatarBlock = await client.itemTypes.create({
    name: 'Avatar',
    apiKey: 'avatar_block',
    modularBlock: true,
  });

  const imageField = await client.fields.create(avatarBlock.id, {
    label: 'Avatar',
    apiKey: 'avatar_pic',
    fieldType: 'file',
    validators: {
      extension: {
        predefined_list: 'image',
      },
    },
    appearance: {
      editor: 'file',
      parameters: {},
      addons: [],
    },
  });

  const profileBlockField = await client.field.find('author::profile_blocks');
  const validBlockTypes = profileBlockField.validators.richTextBlocks.itemTypes

  client.field.update(profileBlockField.id, {
    validators: {
      richTextBlocks: {
        itemTypes: [...validBlockTypes, avatarBlock.id]
      }
    }
  });
}
