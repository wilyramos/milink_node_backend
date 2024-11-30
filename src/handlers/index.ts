import { Request, Response } from "express";
import slug from "slugify";
import User from "../models/User";
import { hashPassword, comparePasswords } from "../utils/auth";
import { validationResult } from "express-validator";
import { createToken } from "../utils/jwt";

export const createUser = async (req: Request, res: Response) => {

    // Errors Management
    let errors = validationResult(req)
    if(!errors.isEmpty()){
        res.status(400).json({errors: errors.array()});
        return;
    }

    // verify email is unique
    const { email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
        const error = new Error("Email already exists");
        res.status(409).json({error: error.message });   
        return;
    }

    const handle = slug(req.body.handle, "");
    const handleExists = await User.findOne({handle});
    if(handleExists){
        const error = new Error("Handle already exists");
        res.status(409).json({error: error.message });
        return;
    }

    console.log(handle);

    const user = new User(req.body);

    // hash password
    user.password = await hashPassword(password);
    // handle is a slugified version of the user's name
    user.handle = handle;

    try {
        await user.save();
        res.status(201).json({message: "User created successfully"});
    } catch (error) {
        res.status(400).json({error: error.message });
    }
   
}

export const login = async (req: Request, res: Response) => {

    // verify email exists
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if ( !user ) {
        const error = new Error("User not found");
        res.status(404).json({error: error.message });
        return;
    }

    // verify password

    const passwordMatch = await comparePasswords(password, user.password);
    if (!passwordMatch) {
        const error = new Error("Invalid password");
        res.status(401).json({error: error.message });
        return;
    }

    // generate JWT

    const token = createToken({id: user._id});
    res.send(token);
    
}
