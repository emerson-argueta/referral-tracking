import express from 'express';
import { JWTClaims } from '../../../domain/JWTClaims';


export interface DecodedExpressRequest extends express.Request {
    decoded: JWTClaims
}