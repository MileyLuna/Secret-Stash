// //MUI
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';

// function MyStashItem({ recipe }) {

//     //MUI
//     const Item = styled(Paper)(({ theme }) => ({
//         backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//         ...theme.typography.body2,
//         padding: theme.spacing(1),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//     }));

//     const dispatch = useDispatch();
//     const history = useHistory();

//     //image click function
//     const handleclick = (id) => {
//         console.log('Recipe ID of:', id);

//         dispatch({ type: 'FETCH_RECIPE_DETAIL', payload: recipe.id});
//         dispatch({ type: 'FETCH_INGREDIENT', payload: recipe.id});
//         dispatch({ type: 'FETCH_INSTRUCTION', payload: recipe.id});

//         history.push(`/view/${recipe.id}`)
//     }

//     return (
//         <Grid item xs key={recipe.id} onClick={handleclick}>
//             <Item>
//                 <p>{recipe.title}</p>
//                 <img src={recipe.poster} />
//             </Item>

//         </Grid>

//     )
// }

// export default MyStashItem;