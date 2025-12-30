import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"

import Bibliografi from "./pages/Bibliografi"
import Valgdager from "./pages/Bibliografi/valgdager"
import MennesketsBolger from "./pages/Bibliografi/menneskets-bolger"
import EnTidForALeve from "./pages/Bibliografi/en-tid-for-a-leve"
import MrWoolf from "./pages/Bibliografi/mr-woolf"
import Berge from "./pages/Bibliografi/berge"
import SlektersGang from "./pages/Bibliografi/slekters-gang"
import MennesketsVidde from "./pages/Bibliografi/menneskets-vidde"
import SteinBlirKaptein from "./pages/Bibliografi/stein-blir-kaptein"
import NormansOmrade from "./pages/Bibliografi/normans-omrade"
import JegErBrodreneWalker from "./pages/Bibliografi/jeg-er-brodrene-walker"
import MirandasSkattkammer from "./pages/Bibliografi/mirandas-skattkammer"
import KjaerstadsMatrise from "./pages/Bibliografi/kjaerstads-matrise"
import KongenAvEuropa from "./pages/Bibliografi/kongen-av-europa"
import MennesketsNett from "./pages/Bibliografi/menneskets-nett"
import TegnTilKjaerlighet from "./pages/Bibliografi/tegn-til-kjaerlighet"
import Oppdageren from "./pages/Bibliografi/oppdageren"
import MennesketsFelt from "./pages/Bibliografi/menneskets-felt"
import Erobreren from "./pages/Bibliografi/erobreren"
import HosSheherasadFantasiensDronning from "./pages/Bibliografi/hos-sheherasad-fantasiens-dronning"
import Forforeren from "./pages/Bibliografi/forforeren"
import Rand from "./pages/Bibliografi/rand"
import JaktenPaDeSkjulteVaffelhjertene from "./pages/Bibliografi/jakten-pa-de-skjulte-vaffelhjertene"
import TusenOgEnNattBind1Og2 from "./pages/Bibliografi/tusen-og-en-natt-bind-1-og-2"
import MennesketsMatrise from "./pages/Bibliografi/menneskets-matrise"
import DetStoreEventyret from "./pages/Bibliografi/det-store-eventyret"
import HomoFalsusEllerDetPerfekteMord from "./pages/Bibliografi/homo-falsus-eller-det-perfekte-mord"
import Speil from "./pages/Bibliografi/speil"
import KlodenDreierStilleRundt from "./pages/Bibliografi/kloden-dreier-stille-rundt"

import Biografi from "./pages/Biografi"

function App() {
  return (
    <BrowserRouter>
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
          <Route path="/bibliografi/normans-omrade" element={<NormansOmrade />} />
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
          <Route path="/bibliografi/jakten-pa-de-skjulte-vaffelhjertene" element={<JaktenPaDeSkjulteVaffelhjertene />}/>
          <Route path="/bibliografi/tusen-og-en-natt-bind-1-og-2" element={<TusenOgEnNattBind1Og2 />} />
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
