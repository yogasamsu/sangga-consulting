import { getDictionary } from '@/lib/dictionary'

export default async function Page({ params }) {
    const { lang } = await params
    const dictionary = await getDictionary(lang || 'en')
    return (
        <div className="container section-padding">
            <h1>{dictionary.navigation.blog}</h1>
            <p>Articles...</p>
        </div>
    )
}
