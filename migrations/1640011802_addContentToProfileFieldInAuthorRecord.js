'use strict';
const { buildModularBlock } = require('datocms-client');


module.exports = async (client) => {
  // Retrieve author records
  const authorRecords = await client.items.all({
    filter: {
      type: 'author'
    }
  });

  // Retrieve record for Eva Luna
  const evaLunaRecord = authorRecords.find(rec => rec.name === 'Eva Luna');

  // Block types
  const avatarBlock = await client.itemType.find('avatar_block');
  const contactBlock = await client.itemType.find('contact_block');

  // Content in existing picture field
  const evaLunaPicture = evaLunaRecord.picture;

  const createEvaLunaProfile = await client.items
    .update(evaLunaRecord.id, {
      profileBlocks: [
        buildModularBlock({
          itemType: avatarBlock.id,
          avatarPic: evaLunaPicture,
        }),
        buildModularBlock({
          itemType: contactBlock.id,
          email: 'evaluna@me.com',
        }),
      ]
    });
}
