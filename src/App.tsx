import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

import Home from "./pages/Home"

import Bibliografi from "./pages/Bibliografi"
import Valgdager from "./pages/bibliografi/valgdager"
import MennesketsBolger from "./pages/bibliografi/menneskets-bolger"
import EnTidForALeve from "./pages/bibliografi/en-tid-for-a-leve"
import MrWoolf from "./pages/bibliografi/mr-woolf"
import Berge from "./pages/bibliografi/berge"
import SlektersGang from "./pages/bibliografi/slekters-gang"
import MennesketsVidde from "./pages/bibliografi/menneskets-vidde"
import SteinBlirKaptein from "./pages/bibliografi/stein-blir-kaptein"
import NormansOmrade from "./pages/bibliografi/normans-omraade"
import JegErBrodreneWalker from "./pages/bibliografi/jeg-er-brodrene-walker"
import MirandasSkattkammer from "./pages/bibliografi/mirandas-skattkammer"
import KjaerstadsMatrise from "./pages/bibliografi/kjaerstads-matrise"
import KongenAvEuropa from "./pages/bibliografi/kongen-av-europa"
import MennesketsNett from "./pages/bibliografi/menneskets-nett"
import TegnTilKjaerlighet from "./pages/bibliografi/tegn-til-kjaerlighet"
import Oppdageren from "./pages/bibliografi/oppdageren"
import MennesketsFelt from "./pages/bibliografi/menneskets-felt"
import Erobreren from "./pages/bibliografi/erobreren"
import HosSheherasadFantasiensDronning from "./pages/bibliografi/hos-sheherasad-fantasiens-dronning"
import Forforeren from "./pages/bibliografi/forforeren"
import Rand from "./pages/bibliografi/rand"
import JaktenPaDeSkjulteVaffelhjertene from "./pages/bibliografi/jakten-paa-de-skjulte-vaffelhjertene"
import TusenOgEnNattBind1Og2 from "./pages/bibliografi/tusen-og-en-natt-bind-1-og-2"
import MennesketsMatrise from "./pages/bibliografi/menneskets-matrise"
import DetStoreEventyret from "./pages/bibliografi/det-store-eventyret"
import HomoFalsusEllerDetPerfekteMord from "./pages/bibliografi/homo-falsus-eller-det-perfekte-mord"
import Speil from "./pages/bibliografi/speil"
import KlodenDreierStilleRundt from "./pages/bibliografi/kloden-dreier-stille-rundt"

import Biografi from "./pages/Biografi"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/bibliografi" element={<Bibliografi />} />
          <Route path="/bibliografi/valgdager" element={<Valgdager />} />
          <Route path="/bibliografi/menneskets-bolger" element={<MennesketsBolger />} />
          <Route path="/bibliografi/en-tid-for-a-leve" element={<EnTidForALeve />} />
          <Route path="/bibliografi/mr-woolf" element={<MrWoolf />} />
          <Route path="/bibliografi/berge" element={<Berge />} />
          <Route path="/bibliografi/slekters-gang" element={<SlektersGang />} />
          <Route path="/bibliografi/menneskets-vidde" element={<MennesketsVidde />} />
          <Route path="/bibliografi/stein-blir-kaptein" element={<SteinBlirKaptein />} />
          <Route path="/bibliografi/normans-omraade" element={<NormansOmrade />} />
          <Route path="/bibliografi/jeg-er-brodrene-walker" element={<JegErBrodreneWalker />} />
          <Route path="/bibliografi/mirandas-skattkammer" element={<MirandasSkattkammer />} />
          <Route path="/bibliografi/kjaerstads-matrise" element={<KjaerstadsMatrise />} />
          <Route path="/bibliografi/kongen-av-europa" element={<KongenAvEuropa />} />
          <Route path="/bibliografi/menneskets-nett" element={<MennesketsNett />} />
          <Route path="/bibliografi/tegn-til-kjaerlighet" element={<TegnTilKjaerlighet />} />
          <Route path="/bibliografi/oppdageren" element={<Oppdageren />} />
          <Route path="/bibliografi/menneskets-felt" element={<MennesketsFelt />} />
          <Route path="/bibliografi/erobreren" element={<Erobreren />} />
          <Route path="/bibliografi/hos-sheherasad-fantasiens-dronning"element={<HosSheherasadFantasiensDronning />}/>
          <Route path="/bibliografi/forforeren" element={<Forforeren />} />
          <Route path="/bibliografi/rand" element={<Rand />} />
          <Route path="/bibliografi/jakten-paa-de-skjulte-vaffelhjertene" element={<JaktenPaDeSkjulteVaffelhjertene />}/>
          <Route path="/bibliografi/menneskets-matrise" element={<MennesketsMatrise />} />
          <Route path="/bibliografi/det-store-eventyret" element={<DetStoreEventyret />} />
          <Route path="/bibliografi/homo-falsus-eller-det-perfekte-mord" element={<HomoFalsusEllerDetPerfekteMord />}/>
          <Route path="/bibliografi/speil" element={<Speil />} />
          <Route path="/bibliografi/kloden-dreier-stille-rundt" element={<KlodenDreierStilleRundt />} />

          <Route path="/biografi" element={<Biografi />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
