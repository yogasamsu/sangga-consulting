import { getDictionary } from '@/lib/dictionary'
import OfferLadder from '@/components/OfferLadder'

export default async function Page({ params }) {
    const { lang } = await params
    const dictionary = await getDictionary(lang)

    return (
        <main style={{ paddingTop: '2rem' }}>
            <OfferLadder dictionary={dictionary} />
        </main>
    )
}
