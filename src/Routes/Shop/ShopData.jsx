import {Routes,Route} from 'react-router-dom'
import CategoriesPreview from '../Categories-preview/CategoriesPreview.component';
import Category from '../Category/Category.component';
const ShopData = () => {

  return (
   <Routes>
    <Route index element={<CategoriesPreview/>}/>
    <Route path=':category' element={<Category/>}></Route>
   </Routes>
  );
};

export default ShopData;
