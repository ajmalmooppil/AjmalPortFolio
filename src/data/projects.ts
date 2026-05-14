import Dashboard1 from '@/assets/images/Dashboard1.jpeg'
import Archana from '@/assets/images/Archana.png'
import HisabMasjid from '@/assets/images/hisabalmasjid.jpeg'

export interface Project {
  title: string
  type: string
  desc: string
  stack: string[]
  bg: string
  image: string
  glowColor: string
  url: string
  link: string
}

export const projects: Project[] = [
  {
    title: 'Business ERP\nCore System.',
    type: 'Full-Stack / Dashboard',
    desc: 'A full-featured ERP platform for a trading company, including inventory, invoicing, purchase orders, and real-time analytics across 6 integrated modules.',
    stack: ['Vue.js', 'Chart.js', 'PrimeIcons'],
    bg: 'linear-gradient(145deg, #0a1628 0%, #112240 100%)',
    image: Dashboard1,
    glowColor: 'rgba(26,86,255,0.4)',
    url: 'erp.ajmal.dev',
    link: '#',
  },
  {
    title: 'Archana Temple\nManagement Platform.',
    type: 'Religious Management System',
    desc: 'A complete temple management solution for handling poojas, offerings, bookings, donations, event scheduling, devotee records, and financial reporting with secure admin access.',
    stack: ['Angular', 'Node.js', 'MongoDB', '.net'],
    bg: 'linear-gradient(145deg, #2a1200 0%, #4a1f00 100%)',
    image: Archana,
    glowColor: 'rgba(255,140,0,0.35)',
    url: 'archana.temple.app',
    link: '#',
  },
  {
    title: 'HISAB AL MASJID\nManagement Platform.',
    type: 'Masjid Administration System',
    desc: 'A comprehensive masjid management platform for handling donations, prayer schedules, announcements, expense tracking, committee management, and financial transparency.',
    stack: ['Angular', ' NestJS', 'PostgreSQL', 'JWT Auth'],
    bg: 'linear-gradient(145deg, #001a12 0%, #003322 100%)',
    image: HisabMasjid,
    glowColor: 'rgba(34,197,94,0.35)',
    url: 'hissabalmasjid.app',
    link: '#',
  },
]
