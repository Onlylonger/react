import { defineConfig } from 'rspress/config'
import { pluginPreview } from '@rspress/plugin-preview'
import { pluginPlayground } from '@rspress/plugin-playground'

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
      '/components': [
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
      ],
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
