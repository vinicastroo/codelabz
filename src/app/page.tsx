import { Header } from './Components/Header'
import { ProcessContainer } from './Components/ProcessContainer'
import { ServicesContainer } from './Components/ServicesContainer'
import { Cases } from './Components/Cases'
import { Footer } from './Components/Footer'
import { Reason } from './Components/Reason'

export default function Home() {
  return (
    <>
      <Header />
      <Reason />
      <ProcessContainer />
      <ServicesContainer />
      <Cases />
      <Footer />
    </>
  )
}
