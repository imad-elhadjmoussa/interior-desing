import exteriorImage from '../assets/services/exterior_service.jpg'
import furnitureImage from '../assets/services/furniture_service.jpg'
import interiorImage from '../assets/services/interior_service.jpg'
import heroImage from '../assets/hero.jpg'

export const projects = [
  {
    number: '01',
    title: 'Restaurants',
    category: 'Restaurants',
    year: '2024',
    description: 'We have delivered multiple projects for Café / Cafeterias & Restaurants with an area of​ 4,000+ sqft for different clients as turnkey solution which includes the furniture, kitchen equipment and​ required approvals from Government & Food Control Authorities.​',
    image: interiorImage,
    imageAlt: 'The Golden House interior project',
    gallery: [interiorImage, furnitureImage, exteriorImage, heroImage],
  },
  {
    number: '02',
    title: 'Noura Courtyard',
    category: 'Hospitality / Jeddah',
    year: '2023',
    description: 'A modern gathering place shaped around shade, texture, and rhythm.',
    image: furnitureImage,
    imageAlt: 'Noura Courtyard hospitality project',
    gallery: [furnitureImage, exteriorImage, heroImage, interiorImage],
  },
  {
    number: '03',
    title: 'Sahara House',
    category: 'Residential / AlUla',
    year: '2023',
    description: 'An intimate retreat where the landscape becomes part of the interior.',
    image: exteriorImage,
    imageAlt: 'Sahara House exterior project',
    gallery: [exteriorImage, heroImage, interiorImage, furnitureImage],
  },
  {
    number: '04',
    title: 'Marsa Residence',
    category: 'Residential / Jeddah',
    year: '2022',
    description: 'A sun-washed interior balancing natural textures with precise geometry.',
    image: heroImage,
    imageAlt: 'Marsa Residence interior project',
    gallery: [heroImage, interiorImage, furnitureImage, exteriorImage],
  },
]
