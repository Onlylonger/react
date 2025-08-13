import { defineConfig } from 'rspress/config'
import { pluginPreview } from '@rspress/plugin-preview'
import { pluginPlayground } from '@rspress/plugin-playground'

const componentsList = [
  {
    text: 'Button',
    link: '/components/button',
  },
  {
    text: 'Toast',
    link: '/components/toast',
  },
  {
    text: 'Popover',
    link: '/components/popover',
  },
  {
    text: 'Input',
    link: '/components/input',
  },
  {
    text: 'Checkbox',
    link: '/components/checkbox',
  },
  {
    text: 'CheckboxGroup',
    link: '/components/checkbox-group',
  },
  {
    text: 'Form',
    link: '/components/form',
  },
  {
    text: 'Table',
    link: '/components/table',
  },
  {
    text: 'Tooltip',
    link: '/components/tooltip',
  },
  {
    text: 'Activity',
    link: '/components/activity',
  },
  {
    text: 'Skeleton',
    link: '/components/skeleton',
  },
  // {
  //   text: 'DataTable',
  //   link: '/components/data-table',
  // },
]

export default defineConfig({
  // 文档根目录
  root: 'docs',
  base: '/react/',
  builderConfig: {
    output: {
      assetPrefix: 'https://onlylonger.github.io/react/',
    },
  },
  icon: '/favicon.ico',
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/Onlylonger/react',
      },
    ],
    nav: [
      {
        text: 'Quick Start',
        link: '/',
        activeMatch: '^(\/(index(\.html)?)?)?$',
        // activeMatch: '^/index\.html$',
      },
      {
        text: 'Components',
        link: '/components/button',
        activeMatch: '/components',
      },
    ],
    sidebar: {
      '/components': componentsList.sort((a, b) =>
        a.text.localeCompare(b.text),
      ),
    },
  },
  plugins: [
    pluginPreview({
      defaultRenderMode: 'pure',
    }),
    pluginPlayground({
      defaultRenderMode: 'pure',
    }),
  ],
})
