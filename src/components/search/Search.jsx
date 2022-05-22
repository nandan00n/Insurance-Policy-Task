import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import BasicCard from '../card/Cards';
import Add from '../modal/Add';
import records from '../chart/db.json'

const Searchbar = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        margin: '5vh auto',
        border: '1px solid black',
    },
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const Search = ({data, search}) => {

    console.log(data);
    // console.log(setCardData.Policy_id, "hhhereee");

    const [records, setRecords] = useState([]);
    const [filteredData, setFilteredData] = useState();
    const [searchInput, setSearchInput] = useState('');
    const [filteredchart, setfilteredchart] = useState('');

    useEffect(() => {
        const Data = () => {
            setRecords(data)
        }
        console.log(data, "records data")
          Data()
      }, [data])


    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== "") {
            // eslint-disable-next-line
            const filteredRecords = records.filter(data => {
                if (data.Policy_id.toString().startsWith(searchValue))
                    return data
            })
            // console.log(filteredRecords)
            setFilteredData(filteredRecords)
        } else {
            setFilteredData(records)
        }
    }

    useEffect(() => {
        const chartData = () => {
            setfilteredchart(data)
        }
        console.log(data, "Chart data")
          chartData()
      }, [data])

    return (
        <>
       {search && <Searchbar sx={{ width: "15vw", display:'flex' }}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={(e) => searchItems(e.target.value)}
                        />
                      <Add />
                    </Searchbar>}
                    
            <div className='cards'>

                {
                searchInput.length > 1 ? (
                filteredData &&  filteredData.map((data) => {
                        return (
                            <BasicCard
                                key={data.Policy_id}
                                data={data}
                            />
                        )
                    })
                ) : (
                    records.map((data) => {
                        return (
                            <BasicCard
                                key={data.Policy_id}
                                data={data}
                            />
                        )
                    })
                )
                }
            </div>
        </>
    )
}

export default Search


