import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { resetSearch, searchItems, searchSelector } from '../../store/reducers/searchSlice'
import './styles.scss'

const Search = () => {
  const dispatch = useDispatch()
  const search = useSelector(searchSelector)

  const handleSearch = (value) => {
    dispatch(searchItems(value))
  }

  const { pathname } = useLocation()

  useEffect(() => {
    dispatch(resetSearch())
  },[pathname, dispatch])

  return (
    <div className='input-search'>
      <input 
        className='input' 
        placeholder='O que você procura?'
        value={search}
        onChange={e => handleSearch(e.target.value)}
      />
    </div>
  )
}

export default Search
