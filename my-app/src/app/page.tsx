import Hero from './components/widgets/Hero'
import CoreTracks from './components/widgets/CoreTracks'
import Api from './components/widgets/Api'
import TwoWayBinding from './components/widgets/TwoWayBinding'
import AppRouting from './components/widgets/AppRouting'

export default function Home() {
  return (
    <main>

      {/* Hero Section */}
      <Hero />

      {/* Core Track Section */}
      <CoreTracks />
      <Api />

      {/* Practice Purpose - React */}
      <TwoWayBinding />
      <AppRouting />

    </main>
  )
}
