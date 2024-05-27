import { createSlice } from '@reduxjs/toolkit';
import automotiveHeader from '../../assets/categories/header/automotive.png';
import eletronicsHeader from '../../assets/categories/header/eletronics.png';
import gamesHeader from '../../assets/categories/header/games.png';
import officeHeader from '../../assets/categories/header/office.png';
import soundHeader from '../../assets/categories/header/sound.png';
import automotiveThumb from '../../assets/categories/thumbnail/automotive.png';
import eletronicsThumb from '../../assets/categories/thumbnail/eletronics.png';
import gamesThumb from '../../assets/categories/thumbnail/games.png';
import officeThumb from '../../assets/categories/thumbnail/office.png';
import soundThumb from '../../assets/categories/thumbnail/sound.png';

const initialState = [{
  name: 'Eletrônicos',
  thumbnail: eletronicsThumb,
  header: eletronicsHeader,
  id: 'eletronics',
  description: 'Os melhores e mais atuais dispositivos eletrônicos estão aqui!'
}, {
  name: 'Automotivo',
  thumbnail: automotiveThumb,
  header: automotiveHeader,
  id: 'automotive',
  description: 'Encontre aqui equipamentos para deixar seu carro com a sua cara!'
}, {
  name: 'Jogos',
  thumbnail: gamesThumb,
  header: gamesHeader,
  id: 'games',
  description: 'Adquira os consoles e jogos mais atuais do mercado !'
}, {
  name: 'Escritório',
  thumbnail: officeThumb,
  header: officeHeader,
  id: 'office',
  description: 'Tudo para o que escritório ficar incrível!'
}, {
  name: 'Som e imagem',
  thumbnail: soundThumb,
  header: soundHeader,
  id: 'sound',
  description: 'Curta suas músicas e seus filmes com a melhor qualidade!'
}];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {}
});

export const categoriesSelector = state => state.categories;

export default categoriesSlice.reducer;