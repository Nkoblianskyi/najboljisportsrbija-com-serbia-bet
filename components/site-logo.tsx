import Link from "next/link"
import Image from "next/image"

interface BrandLogoProps {
  className?: string
  velicina?: "sm" | "md" | "lg"
}

export function SiteLogo({ className = "", velicina = "md" }: BrandLogoProps) {
  const sizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  }

  const iconSizes = {
    sm: "h-3.5 w-3.5",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  }

  return (
    <Link href="/" className={`flex items-center gap-2 hover:opacity-90 transition-opacity ${className}`}>
      <div className="bg-black rounded-2xl">
        <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
      </div>
      <div className="flex flex-col">
        <span className={`${sizes[velicina]} font-bold tracking-tight text-red-700 leading-none`}>
          Najbolji<span className="text-primary">Sport</span><span className="text-muted-foreground">Srbija</span>
        </span>
      </div>
    </Link>
  )
}
