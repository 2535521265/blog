import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Tenf',
  subtitle: 'blog', // 网站的副标题
  lang: 'zh_CN', // 语言设置，如 'en'（英语）、'zh_CN'（简体中文）、'zh_TW'（繁体中文）、'ja'（日语）
  themeColor: {
    hue: 250, // 主题颜色的色调，范围从0到360。例如红色：0，蓝绿色：200，青色：250，粉色：345
    fixed: false, // 对访问者隐藏主题颜色选择器
  },
  banner: {
    enable: true, // 是否启用横幅
    src: 'assets/images/back1.png', // 横幅图片路径，相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
    position: 'center', // 等同于 object-position，默认为中心
  },
  favicon: [ // 留空该数组以使用默认的favicon
    {
      src: '/favicon/icon.jpg', // favicon的路径，相对于 /public 目录
      // theme: 'light', // (可选) 'light' 或 'dark'，只有当你为浅色和深色模式设置了不同的favicon时才设置
      // sizes: '32x32', // (可选) favicon的大小，只有当你有不同大小的favicon时才设置
    }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home, // 首页链接预设
    LinkPreset.Archive, // 归档链接预设
    LinkPreset.About, // 关于链接预设
    {
      name: 'GitHub', // 链接名称
      url: 'https://github.com/2535521265/blog', // 链接URL，内部链接不应包括基础路径，因为它会自动添加
      external: true, // 显示外部链接图标，并在新标签页中打开
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/head.jpg', // 头像图片路径，相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
  name: 'Tenf', // 用户名
  bio: '就读于重庆师范大学，软件工程专业，目前主要学习前端开发，喜欢音乐、运动、游戏，热爱生活。', // 用户简介
  links: [
    {
      name: 'bilibili', // 链接名称
      icon: 'fa6-brands:bilibili', // 访问 https://icones.js.org/ 获取图标代码
      // 如果图标集尚未包含，则需要安装对应的图标集
      // `pnpm add @iconify-json/<icon-set-name>`
      url: 'https://www.bilibili.com/', 
    },
    {
      name: 'Steam',
      icon: 'fa6-brands:steam',
      url: 'https://store.steampowered.com', 
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/2535521265/blog', 
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true, // 是否启用版权信息
  name: 'CC BY-NC-SA 4.0', // 版权协议名称
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/', // 版权协议链接
}