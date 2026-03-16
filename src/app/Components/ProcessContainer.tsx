import { getTranslations } from 'next-intl/server'
import { ProcessStep } from "./proccess-step"

export async function ProcessContainer() {
  const t = await getTranslations('process')

  return (
    <section className="py-24 bg-white text-codelabz-dark" aria-labelledby="processo-desenvolvimento">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-codelabz-accent font-bold uppercase tracking-widest text-sm block mb-2">{t('tag')}</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold">{t('title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <ProcessStep number={t('step1Number')} title={t('step1Title')} text={t('step1Text')} />
          <ProcessStep number={t('step2Number')} title={t('step2Title')} text={t('step2Text')} />
          <ProcessStep number={t('step3Number')} title={t('step3Title')} text={t('step3Text')} />
          <ProcessStep number={t('step4Number')} title={t('step4Title')} text={t('step4Text')} />
        </div>
      </div>
    </section>
  )
}
