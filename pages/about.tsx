import React from 'react'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const About: React.FC = () => {
  const router = useRouter()
  const { t } = useTranslation('about')

  return (
    <div>
      <h1>{t('h1')}</h1>
      <ul>
        <li>
          {t('currentUrl')} : http://localhost:3000
          {router.locale !== 'ko' && '/' + router.locale}
          {router.pathname}
        </li>
        <li>locale: {router.locale}</li>
        <li>pathname: {router.pathname}</li>
      </ul>
    </div>
  )
}

export default About

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['about'])),
  },
})
