'use client'

import { LangSwitchBase } from './LangSwitchBase'
import { useTranslation } from '../../../i18n/client'

export const LangSwitch = ({ lng, path }) => {
  const { t } = useTranslation(lng, 'footer')
  return <LangSwitchBase t={t} lng={lng} path={path} />
}
