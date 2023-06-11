const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try{
    const result = await Tag.findAll();
    res.json(result);
  } catch (err){
    console.log(err)
  }
  // find all categories
  // be sure to include its associated Products
});


router.get('/:id',async (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  try{
    const result = await Tag.findAll({
      where: {id: req.params.id}
    });
    res.json(result);
  } catch (err){
    console.log(err)
  }
});


router.post('/', async (req, res) => {
  try {

   const result = await Tag.create({
      tag_name: req.body.tag_name
  })

  res.json(result)


  } catch (err){
    console.log(err);
  }
  // create a new tag
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value

  try{
      const result = await Tag.update(req.body, {
    where: {id: req.params.id},
    
  })


  res.json(result);

}catch (err){
  console.log(err)
}



});

router.delete('/:id',async  (req, res) => {
  // delete on tag by its `id` value

  try{
    const result = await Tag.destroy( {
  where: {
    id: req.params.id,
  },
})


res.json(result);

}catch (err){
console.log(err)
}



});

module.exports = router;
