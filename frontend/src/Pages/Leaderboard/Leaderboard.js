import React, { useState, useEffect } from 'react'
import { 
    Container, 
    Grow, 
    Grid, 
    Paper, 
    Button,
    ButtonGroup,
    Typography,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
    } 
    from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useStyles from "./styles";
import { fetchUsers } from './api';
import Footer from '../../components/UI/Footer/Footer';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#990000',
      color: theme.palette.common.white,
      fontSize: 20
    },
    body: {
      fontSize: 20
    },
  }))(TableCell);
  
const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
    
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Leaderboard = () => {
    const [currentId, setCurrentId] = useState(0);
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    const dispatch = useDispatch();
    const classes = useStyles();
    const query = useQuery();
    const history = useHistory();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const [ creators, setCreators ] = useState('')
    const [loadingUser, setLoadingUser] = useState(true);

    const data = async () => {
        const { data } = await fetchUsers()
        setCreators(data)
        console.log(data)
        setLoadingUser(false)
    }

    useEffect(() => {
        data()
    },[]);


    const handleAdd = (tag) => setTags([...tags, tag]);
    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));

    const getPosts = () => {
        history.push('/posts');
    }

    const getChallenges = () => {
        history.push('/challenges');
    }

    return (
        <>
        <Grow in>
            <Container maxWidth='xl' className={classes.container}>
                <Grid className={classes.gridContainer} container justifyContent='space-between' alignItems='stretch' spacing={3}>
                    <Grid item xs={12} sm={6} md={9}>
                        <Typography variant="h4" align="center">LEADERBOARD</Typography>
                        <Divider className={classes.divider}/>
                        {loadingUser === false && (
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                <TableRow>
                                    <StyledTableCell>Name</StyledTableCell>
                                    <StyledTableCell align="center">Total Points</StyledTableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {creators?.map((creator) => (
                                    <StyledTableRow key={creator.name}>
                                    <StyledTableCell component="th" scope="row">
                                        <Link to={`/creator/${creator.name}`} className={classes.userName}>
                                            {creator.name}
                                        </Link>
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{creator.totalScore}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </Grow>
        <Footer/>
        </>
    );
}

export default Leaderboard;
