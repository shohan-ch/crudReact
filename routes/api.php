<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register', function (Request $request) {
    // $data = [1, 2, 3];
    return response()->json(["message" => $request->all()], 200);
});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});