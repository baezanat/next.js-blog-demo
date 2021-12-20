'use strict';

module.exports = async (client) => {
  const contactBlock = await client.itemType.find('contact_block');

  const emailField = await client.fields.create(contactBlock.id, {
    label: 'E-mail',
    apiKey: 'email',
    fieldType: 'string',
    validators: {
      required: {},
      format: {
        predefined_pattern: "email",
      },
    },
    appearance: {
      editor: 'single_line',
      parameters: {
        heading: false,
      },
      addons: [],
    },
  });

  const linkedInField = await client.fields.create(contactBlock.id, {
    label: 'LinkedIn',
    apiKey: 'linkedin_url',
    fieldType: 'string',
    validators: {
      format: {
        predefined_pattern: "url",
      },
    },
    appearance: {
      editor: 'single_line',
      parameters: {
        heading: false,
      },
      addons: [],
    },
  });
}
