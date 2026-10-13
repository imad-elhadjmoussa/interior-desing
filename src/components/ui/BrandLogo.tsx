type BrandLogoProps = {
  className?: string
}

export function BrandLogo({ className = '' }: BrandLogoProps) {
  return (
    <span className={` flex items-center gap-1  text-lg font-semibold tracking-[-0.02em] sm:text-xl ${className}`}>
      {/* <img
        src="logo.png"
        alt="Interior design company logo"
        className="mr-2 h-6 w-6 object-contain"
      /> */}
      <span className="text-brand-accent font">Interior Design</span>
    </span>
  )
}
