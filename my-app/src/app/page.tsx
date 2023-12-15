import Hero from './components/widgets/Hero'
import CoreTracks from './components/widgets/CoreTracks'
import Api from './components/widgets/Api'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Core Track Section */}
      <CoreTracks />

      <Api />

    </main>
  )
}
