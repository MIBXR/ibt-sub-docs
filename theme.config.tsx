import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <img src="/icons/camera.svg" alt="Docs Icon" style={{ width: '24px', height: '24px' }} />
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
      Choco Xie Docs
      </span>
    </>
  ),
  project: {
    link: 'https://github.com/MIBXR/code-docs',
  },
  docsRepositoryBase: 'https://github.com/MIBXR/code-docs/blob/main',
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} © {'谢睿. Powered by Nextra'}
      </span>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Choco Xie Docs'
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'http://localhost:3000' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Choco Xie Docs'} />
        <meta
          property="og:description"
          content={'IBT Docs. Powered by Nextra'}
        />
      </>
    )
  },
  gitTimestamp: () => null, // Providing an empty component
  // banner: {
  //   key: 'new post',
  //   text: (
  //     <a href="https://vblog.choco-xie.xyz/" target="_blank">
  //       🎉 My Blog is released. Read more →
  //     </a>
  //   )
  // },
  sidebar: {
    toggleButton: true,
  },
  direction: "ltr",
  feedback: {
    content: (
      <p>
        Question or discussion? Give me feedback →
      </p>
    ),
    labels: "discussion",
  },
  editLink:{
    text: "Edit this page on Github (Permission required) →"
  },
}

export default config
