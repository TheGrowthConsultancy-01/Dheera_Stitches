export interface Artisan {
  id: string
  name: string
  craft: string
  craftCategory: 'Embroidery' | 'Handloom' | 'Block Print' | 'All'
  location: string
  experienceYears: number
  craftMetric: string // e.g. '42,000+ Hand Stitches'
  fabricType: string // e.g. 'Pure Mulmul Muslin'
  signatureTechnique: string // e.g. 'Bakhiya & Shadow Work'
  hoursPerPiece: string // e.g. '45 Hours'
  image: string
  quote: string
  fullStory: string
  themeColor: {
    bg: string
    accent: string
    lightBg: string
    border: string
    badgeBg: string
  }
}
