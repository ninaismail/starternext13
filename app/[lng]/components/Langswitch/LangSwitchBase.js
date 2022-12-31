import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages } from '../../../i18n/settings'

export const LangSwitchBase = ({ t, lng, path = '' }) => {
  return (
<div class="absolute top-0 z-10 flex items-center justify-cemter">
  {languages.filter((l) => lng !== l).map((l, index) => {
    return (
      <span key={l}>
        <Link href={`/${l}${path}`} className="block bg-black text-white hover:bg-gray-700 font-bold py-2 px-4">
        <Trans i18nKey="languageSwitcher">
          <strong>{l}</strong>
        </Trans>
       </Link>
      </span>
    )
  })}
</div>
  )
}
