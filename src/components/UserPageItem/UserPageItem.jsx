//MUI
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function UserPageList({ recipe }) {

    //MUI
    const Item = styled(Paper)(({ theme }) => ({
        // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        // padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    //MUI
    const useStyles = makeStyles({
        root: {
            // flexGrow: 1,
            background: '#fff8e1',
            border: 0,
            borderRadius: 3,
            // color: 'white',
            padding: '5px 5px',
        },
    });
    //MUI
    const classes = useStyles();


    const dispatch = useDispatch();
    const history = useHistory();

    //image click function
    const handleClick = (id) => {
        console.log('Recipe ID of:', id);

        dispatch({ type: 'FETCH_RECIPE_DETAIL', payload: recipe.id });
        dispatch({ type: 'FETCH_INGREDIENT', payload: recipe.id });
        dispatch({ type: 'FETCH_INSTRUCTION', payload: recipe.id });

        history.push(`/view/${recipe.id}`)
    }

    return (
        <Grid  item xs={3} sm={3} md={3} key={recipe.id} onClick={handleClick}>
            <Item className={classes.root}>
                <img className='recipe' src={recipe.poster} />
                <p>{recipe.title}</p>
            </Item>

        </Grid>

    )
}

export default UserPageList;