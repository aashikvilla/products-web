import { getDictionary } from '../../../getDictionary'
import { Locale } from '../../../i18n-config'

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  console.log(lang);
  const dictionary = await getDictionary(lang)

  return (
    <div>
      <p>Current locale: {lang}</p>
      <p>
        This text is rendered on the server:{' '}
        {dictionary['welcome']}
      </p>
   
    </div>
  )
}