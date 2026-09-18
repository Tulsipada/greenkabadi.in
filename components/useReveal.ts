import { useEffect } from 'react'

/** Scroll-reveal: add .in when sections enter viewport (client only). */
export function useReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window) || !reveals.length) {
      reveals.forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -24px 0px' },
    )
    reveals.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
