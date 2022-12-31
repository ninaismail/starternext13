import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages } from '../../../i18n/settings'

export const LangSwitchBase = ({ t, lng, path = '' }) => {
  return (
<div>
  <Trans i18nKey="languageSwitcher" t={t}>
    Switch from <strong>{{lng}}</strong> to:{' '}
  </Trans>
  {languages.filter((l) => lng !== l).map((l, index) => {
    return (
      <span key={l}>
        {index > 0 && (' or ')}
        <Link href={`/${l}${path}`} className="block bg-black text-white hover:bg-gray-700 font-bold py-2 px-4">
          {l}
        </Link>
      </span>
    )
  })}
</div>
  )
}
