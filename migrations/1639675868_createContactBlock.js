'use strict';

module.exports = async (client) => {
  const contactBlock = await client.itemTypes.create({
    name: 'Contact',
    apiKey: 'contact_block',
    modularBlock: true,
  });
}
