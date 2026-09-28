import { getTranslations } from 'next-intl/server'
import { ProcessStep } from "./proccess-step"

export async function ProcessContainer() {
  const t = await getTranslations('process')

  return (
    <section className="relative overflow-hidden bg-white py-24 text-codelabz-dark lg:py-32" aria-labelledby="processo-desenvolvimento">
      <div className="absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full border border-codelabz-dark/[0.04]" />
      <div className="absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full border border-codelabz-accent/[0.08]" />

      <div className="container relative mx-auto px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-20">
          <div className="lg:sticky lg:top-32">
            <span className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-codelabz-accent">
              <span className="h-px w-8 bg-codelabz-accent" />
              {t('tag')}
            </span>
            <h2 id="processo-desenvolvimento" className="max-w-[11ch] font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] md:text-5xl lg:text-6xl">
              {t('title')}
            </h2>
            <div className="mt-10 hidden items-center gap-3 text-xs font-bold tracking-[0.2em] text-slate-400 lg:flex">
              <span>01</span>
              <span className="h-px w-16 bg-slate-200" />
              <span>04</span>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-codelabz-dark shadow-[0_30px_100px_rgba(2,29,63,0.2)]">
            <ProcessStep number={t('step1Number')} title={t('step1Title')} text={t('step1Text')} />
            <ProcessStep number={t('step2Number')} title={t('step2Title')} text={t('step2Text')} />
            <ProcessStep number={t('step3Number')} title={t('step3Title')} text={t('step3Text')} />
            <ProcessStep number={t('step4Number')} title={t('step4Title')} text={t('step4Text')} last />
          </div>
        </div>
      </div>
    </section>
  )
}
