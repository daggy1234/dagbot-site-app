import express, { Request, Response, NextFunction } from "express";

module.exports = function IsAuth(req:Request,res:Response,next:NextFunction) {
    var _ = require('underscore')
      , nonSecurePaths = ['/', '/home', '/demo','/feedback','/commands'];
    if (_.contains(nonSecurePaths,req.path)){
        next();
    }
    else if (req.path.endsWith('js') || req.path.endsWith('html') || req.path.endsWith('css') || req.path.endsWith('map')) { next();}
    else if (req.header('Token') === process.env.REACT_APP_SECRET) {
        next();
    } else {
        res.status(401)
        res.send('Unautorised')
    }
}   