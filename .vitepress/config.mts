import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "BroodBrain Dashboard",
  description: "A public, read-only roadmap and task tracker for Mycelium Protocol.",
  base: '/Brood/', // 假设仓库名为 Brood
  themeConfig: {
    logo: '/logo.png', // 如果有 logo 以后可以放这里
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Roadmap', link: '/backlog/docs/doc-5-Roadmap' },
      { text: 'Manifesto', link: '/backlog/docs/doc-4-Mycelium-Manifesto' }
    ],
    sidebar: [
      {
        text: '📖 Foundations',
        items: [
          { text: 'Introduction', link: '/backlog/docs/doc-1-BroodBrain-Readme' },
          { text: 'Manifesto', link: '/backlog/docs/doc-4-Mycelium-Manifesto' },
          { text: 'Roadmap 2026-2027', link: '/backlog/docs/doc-5-Roadmap' }
        ]
      },
      {
        text: '🚀 Phase 1: Genesis',
        items: [
          { text: 'Meta: Genesis Launch', link: '/backlog/tasks/task-23 - Meta-Phase-1-Genesis-Launch' },
          { text: 'Cos72 Extension', link: '/backlog/tasks/task-6 - Release-Cos72-Chrome-Extension-v1.0' },
          { text: 'Sign90 Base', link: '/backlog/tasks/task-7 - Release-Sign90-Base-Version-v1.0' },
          { text: 'SuperPaymaster', link: '/backlog/tasks/task-4 - Project-SuperPaymaster-Decentralized-Gas-Payment' },
          { text: 'AirAccount', link: '/backlog/tasks/task-12 - Feature-AirAccount-Invisible-Crypto-Account' }
        ]
      },
      {
        text: '🍄 Phase 2 & 3',
        items: [
          { text: 'Community Expansion', link: '/backlog/tasks/task-24 - Meta-Phase-2-Community-Expansion' },
          { text: 'Ecosystem Maturity', link: '/backlog/tasks/task-25 - Meta-Phase-3-Ecosystem-Maturity' },
          { text: 'Zu.Coffee', link: '/backlog/tasks/task-15 - Project-Zu.Coffee-Business-DApp' }
        ]
      },
      {
        text: '⚖️ Decisions',
        items: [
          { text: 'D1: MushroomDAO Launch', link: '/backlog/decisions/decision-1 - Start-MushroomDAO-Cold-Launch' },
          { text: 'D2: CCIP-Read Resolver', link: '/backlog/decisions/decision-2 - Choose-OP-Mainnet-for-CCIP-Read-Resolver' },
          { text: 'D3: VitePress System', link: '/backlog/decisions/decision-3-VitePress-Static-Site' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jhfnetboy/Brood' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present Mycelium Protocol'
    }
  }
})
