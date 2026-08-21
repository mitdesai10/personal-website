import ContactButton from './ContactButton'
import FadeIn from './FadeIn'
import Magnet from './Magnet'

const PORTRAIT_SRC = '/portrait.png'

export default function HeroSection() {
  return (
    <section
      className="relative h-screen flex flex-col font-kanit pt-16"
      style={{ overflowX: 'clip' }}
    >
      <div className="overflow-hidden">
        <FadeIn
          as="h1"
          delay={0.15}
          y={40}
          className="hero-heading w-full font-black uppercase tracking-tight leading-none whitespace-nowrap text-center text-[17.5vw] sm:text-[18.5vw] md:text-[19.9vw] lg:text-[21.9vw] mt-6 sm:mt-4 md:-mt-5"
        >
          Hi, i&rsquo;m mit
        </FadeIn>
      </div>

      <Magnet
        padding={150}
        strength={3}
        activeTransition="transform 0.3s ease-out"
        inactiveTransition="transform 0.6s ease-in-out"
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[380px] sm:w-[520px] md:w-[640px] lg:w-[780px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <FadeIn delay={0.6} y={30}>
          <img
            src={PORTRAIT_SRC}
            alt="Mit Desai"
            className="w-full h-auto block"
          />
        </FadeIn>
      </Magnet>

      <div className="relative z-20 mt-auto flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
          style={{ color: '#D7E2EA', fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          a 3d creator driven by crafting striking and unforgettable projects
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
