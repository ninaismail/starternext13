import { useTranslation } from '../../../i18n'
import { LangSwitchBase } from './LangSwitchBase'

export const LangSwitch = async ({ lng, path }) => {
  const { t } = await useTranslation(lng, 'footer')
  return <LangSwitchBase t={t} lng={lng} path={path} />
}