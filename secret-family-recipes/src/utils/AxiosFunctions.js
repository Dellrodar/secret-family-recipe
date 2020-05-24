import AxiosWithAuth from './AxiosWithAuth';

function getRecipe(id) {
  AxiosWithAuth()
    .get(`/recipes/${id}`)
    .then(res => setRecipe(res.data))
    .catch(err => console.log('RecipeError:', err));
}
const getUsers = e => {
  e.preventDefault();
  axios
    .get('users/1')
    .then(res => console.log(res))
    .catch(err => console.log('User Get Err:', err));
};
