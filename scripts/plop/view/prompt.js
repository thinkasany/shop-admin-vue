const { notEmpty } = require('../util.js')

module.exports = {
  description: 'generate a view',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '页面文件名',
      validate: notEmpty('name')
    },
    {
      type: 'checkbox',
      name: 'blocks',
      message: 'Blocks:',
      choices: [
        {
          name: '<template>',
          value: 'template',
          checked: true
        },
        {
          name: '<script>',
          value: 'script',
          checked: true
        },
        {
          name: 'style',
          value: 'style',
          checked: true
        }
      ],
      validate(value) {
        if (value.indexOf('script') === -1 && value.indexOf('template') === -1) {
          return 'View require at least a <script> or <template> tag.'
        }
        return true
      }
    }
  ],
  actions: data => {
    const name = '{{name}}'
    const actions = [
      {
        type: 'add',
        path: `src/views/${name}.vue`,
        templateFile: 'scripts/plop/view/index.hbs',
        data: {
          name: name,
          template: data.blocks.includes('template'),
          script: data.blocks.includes('script'),
          style: data.blocks.includes('style')
        }
      }
    ]

    return actions
  }
}
