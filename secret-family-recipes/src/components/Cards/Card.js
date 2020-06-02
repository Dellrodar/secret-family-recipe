import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Modal,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../../css/Card.css';
import AxiosWithAuth from '../../utils/AxiosWithAuth';

const getModalStyle = () => {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "27%",
    margin: "1%",
  },
  media: {
    height: 300,
    width: "auto",
  },
  paper: {
    position: 'absolute',
    overflow: 'scroll',
    width: 800,
    height: 800,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function RecipeCard(props) {
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const [recipeDetails, setRecipeDetails] = useState({
    ...props.recipe,
    ingredients: [
      {
        ingredient: '',
        unit: '',
        quantity: '',
        ingredient_id: 0,
      },
    ],
    instructions: [
      {
        step_no: '',
        instruction: '',
        id: 0,
      },
    ],
  });
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
    AxiosWithAuth()
      .get(`/recipes/${props.recipeData.recipe_id}`)
      .then((res) => {
        setRecipeDetails(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log('User Get Err:', err));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cardModal = (
    <div style={modalStyle} className={classes.paper}>
      <div>
        <CardMedia
        className={classes.media}
        image={recipeDetails.image_link === null ? 'https://baconmockup.com/800/600/': recipeDetails.image_link}
        title={recipeDetails.title}
      />
      <CardHeader className='subHeaders' title={recipeDetails.title} />
      <p className='subHeaders'>{recipeDetails.source}</p>
      <h2 className='subHeaders'>Ingredients</h2>
      <CardContent>
      {recipeDetails.ingredients.map((ingredient) => (
        <div className="ingredientContainer">
          <div key={ingredient.ingredient_id} className='ingredient'>
            <p className='ingredientList'>{`${ingredient.quantity} ${ingredient.unit} ${ingredient.ingredient}`}</p>
            </div>
          </div>
        ))}
      <h2 className='subHeaders'>Instructions</h2>
      <div className='instructionsContainer'>
        {recipeDetails.instructions.map((instruction) => (
          <div key={instruction.id} className='instruction'>
            <div className='step-no'>{instruction.step_no}</div>
            <div className='detal'>{instruction.instruction}</div>
          </div>
        ))}
      </div>
    </CardContent>
    </div>
    </div>
  );

  return (
    <>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='fullCard'
        aria-describedby='fullCard'>
        {cardModal}
      </Modal>
    <Card className={classes.root} variant='outlined' onClick={handleOpen}>
      <CardMedia
        className={classes.media}
        image={props.recipeData.image_link === null ? 'https://baconmockup.com/800/600/': props.recipeData.image_link}
        title={props.recipeData.title}
      />
      <CardHeader className='subHeaders' title={props.recipeData.title} />
      <CardContent>
        <p>{props.recipeData.description}</p>
      </CardContent>
      <p>{props.recipeData.category_name}</p>
    </Card>
    </>
  );
}
export default RecipeCard;