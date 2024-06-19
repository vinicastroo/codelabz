import { Header } from './Components/Header'
import { ProcessContainer } from './Components/ProcessContainer'
import { ServicesContainer } from './Components/ServicesContainer'
import { Cases } from './Components/Cases'
import { Footer } from './Components/Footer'
import { Reason } from './Components/Reason'

export const revalidate = 3600
export default function Home() {
  return (
    <>
      <Header />
      <Reason />
      <ServicesContainer />
      <ProcessContainer />
      <Cases />
      <Footer />
    </>
  )
}
