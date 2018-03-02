var express = require('express'),
  router = express.Router(),
  productCtrl = require('../controllers/ProductController');
  hproductCtrl = require('../controllers/hadeerController');

  const authentication = require('../controllers/authentication')(router);
  app = express();
	memberCtrl = require('../controllers/MemberController');


//-------------------------------Product Routes-----------------------------------
router.get('/hadeer/getProducts', hproductCtrl.getProducts);
router.get('/hadeer/getProduct/:productId', hproductCtrl.getProduct);
router.get('/hadeer/getProductsBelowPrice/:price',hproductCtrl.getProductsBelowPrice
);
router.post('/hadeer/createProduct', hproductCtrl.createProduct);
router.patch('/hadeer/updateProduct/:productId', hproductCtrl.updateProduct);
router.delete('/hadeer/deleteProduct/:productId', hproductCtrl.deleteProduct);


app.use('/authentication' , authentication);

//-------------------------------Member Routes-----------------------------------
router.get('/member/getMembers', memberCtrl.getMembers);
router.post('/member/createMember', memberCtrl.createMember);
router.patch('/member/updateMember/:memberId', memberCtrl.updateMember);
router.delete('/member/deleteMember/:memberId', memberCtrl.deleteMember);

//------------------------------User Routes-----------------------------------


module.exports = router;
