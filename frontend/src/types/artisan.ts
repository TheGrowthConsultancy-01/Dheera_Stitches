export interface Artisan {
  id: string
  name: string
  craft: string
  location: string
  experienceYears: number
   // e.g. '45,000+ Hand Stitches'
  fabricType: string // e.g. 'Pure Mulmul Silk'
  image: string
  quote: string
  fullStory: string
  themeColor: {
    bg: string // card background
    accent: string // border & badge accent
    lightBg: string // tag background
    border: string // outline border
    foldShadow: string // shadow accent
  }
}
