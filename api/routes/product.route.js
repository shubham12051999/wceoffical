const express = require('express');  
const app = express(); 
const productRoutes = express.Router();  

productRoutes.route('/Tests/:type').get(function(req,res){
  type=req.params.type;
  console.log(type);
});

productRoutes.route('/Internship/:city').get(function(req,res){
  city=req.params.city;
  console.log(city);
});

productRoutes.route('/StudyAbroad/:cityA').get(function(req,res){
  cityA=req.params.cityA;
  console.log(cityA);
});
  

productRoutes.route('/StudyTour/:cityt').get(function(req,res){
  cityt=req.params.cityt;
  console.log(cityt);
});

productRoutes.route('/ELab/:info').get(function(req,res){
  info=req.params.info;
  console.log(info);
});
// ELab/Elabprogram

module.exports = productRoutes;  