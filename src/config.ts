import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Bill The Dev',
  subtitle: 'Demo Site',
  lang: 'en',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 250,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: 'assets/images/banner4k.png',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center',      // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: true,         // Display the credit text of the banner image
      text: 'Bill The Dev',              // Credit text to be displayed
      url: 'https://www.youtube.com/@billthedev'                // (Optional) URL link to the original artwork or artist's page
    }
    
  },
  favicon: [    // Leave this array empty to use the default favicon
    // {
    //   src: 'assets/images/demo-avatar.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'dark',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '128x128',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'My Resume',
      url: 'https://www.billthedev.com/',     // Internal links should not include the base path, as it is automatically added
      external: true,                               // Show an external link icon and will open in a new tab
    },
    {
      name: 'GitHub',
      url: 'https://github.com/billtruong003',     // Internal links should not include the base path, as it is automatically added
      external: true,                               // Show an external link icon and will open in a new tab
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/avatar.png',  // Đường dẫn đến ảnh đại diện của bạn
  name: 'Bill The Dev',
  bio: '"Do what I love, love what I do!"  Unity Developer •⩊•)    Programming Teacher •⩊•)    Devlogger | Blogger •⩊•)',
  links: [
      {
        name: 'Facebook',
        icon: 'fa6-brands:facebook',  // Sử dụng icon Facebook
        url: 'https://www.facebook.com/billthedev',  // Liên kết đến Facebook của bạn
      },
      {
        name: 'YouTube',
        icon: 'fa6-brands:youtube',   // Sử dụng icon YouTube
        url: 'https://www.youtube.com/@billthedev',  // Liên kết đến kênh YouTube của bạn
      },
      {
        name: 'LinkedIn',
        icon: 'fa6-brands:linkedin',  // Sử dụng icon LinkedIn
        url: 'https://www.linkedin.com/in/billtruong003/',  // Liên kết đến LinkedIn của bạn
      },
      {
        name: 'GitHub',
        icon: 'fa6-brands:github',    // Sử dụng icon GitHub
        url: 'https://github.com/billtruong003',  // Liên kết đến GitHub của bạn
      },
      {
        name: 'Email',
        icon: 'fa6-solid:envelope',   // Icon email (thư)
        url: 'mailto:billtruong003@gmail.com',  // Liên kết đến email của bạn
      },
      {
        name: 'Dev.to',
        icon: 'fa6-brands:dev',       // Icon Dev.to
        url: 'https://dev.to/billtruong003',  // Liên kết đến Dev.to của bạn
      },
  ],
}


export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
