import React, { useCallback, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCountries } from '../redux/actions/country'
import { DataGrid } from '@mui/x-data-grid';
import { Grid, Input } from '@mui/material';

const countryImg = {
  width: '5rem',
}

function setCountryData(data) {
  const countryData = []

  data.forEach((country, key) => {
    countryData.push({
      id: 'id' + key,
      flag: country.flags.png,
      name: country.name.official,
      cca2: country.cca2,
      cca3: country.cca3,
      countryCallingCode: country.idd.root,
      nativeName: country.name.nativeName
        ? Object.values(country.name.nativeName).map((zho) => zho.official)
        : [],
      alertCountryName: country.altSpellings[0],
    })
  })

  return countryData
}

export default function CountryList() {
  const [search, setSearch] = useState('')
  const [perPage, setPerPage] = useState(10);
  const dispatch = useDispatch()
  const data = useSelector((state) => state.country.countries)

  useEffect(() => {
    dispatch(fetchCountries(1, perPage))
  }, [dispatch])
  const countryData = setCountryData(data)

  const onSearchHandler = (e) => {
    setSearch(e.target.value)
  }

  const filteredCountries = search ? countryData.filter((country) => {
    return country.name.toLowerCase().includes(search.toString().toLowerCase())
  }) : countryData;

  const columns = [
    {
      field: 'flag',
      headerName: 'Flags',
      width: 130,
      sortable: false,
      renderCell: (params)=>{
        return (
          <div>
            <img 
              src={params.row.flag}
              alt={params.row.name}
              style={countryImg}
            />
          </div>
        )
      }
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 250
    },
    {
      field: 'cca2',
      headerName: 'Country Code',
      sortable: false,
      type: 'number',
      width: 150,
    },
    {
      field: 'cca3',
      headerName: 'Country Code',
      sortable: false,
      type: 'number',
      width: 150,
    },
    {
      field:'nativeName',
      headerName: 'Native Name',
      sortable: false,
      width: 450,
      renderCell: (params)=>{
        return (
          <div>
            {params.row.nativeName.join(',')}
          </div>
        )
      }
    },
    {
      field: 'alertCountryName',
      headerName: 'Alternative Country Name',
      sortable: false,
      width: 200,
    },
    {
      field: 'countryCallingCode',
      headerName: 'Country Calling Code',
      sortable: false,
      width: 200,
    },
  ];

  return (
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={12} sm={10} style={{ height: 800, width: '100%' }}>
          <Input
            style={{ margin: 10 }}
            placeholder='Search...'
            onChange={onSearchHandler}
          />
          <DataGrid
            rows={filteredCountries}
            columns={columns}
            pageSize={25}
            rowsPerPageOptions={[25]}
            disableColumnMenu 
          />
        </Grid>
        <Grid item xs={1} sm={6}></Grid>
      </Grid>
  )
}