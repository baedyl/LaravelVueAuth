<?php

namespace App\Http\Controllers;

use Auth;
use App\User;
use JWTAuth;
use Illuminate\Http\Request;
use App\Http\Requests\RegisterFormRequest;

class AuthController extends Controller
{
    // Registration process
    public function register(RegisterFormRequest $request) 
    {
        $user = new User;
        $user->email = $request->email;
        $user->name = $request->name;
        $user->password = bcrypt($request->password);
        $user->save();

        return response([
            'status' => 'success',
            'data' => $user
        ], 200);
    }

    // Login process
    public function login(Request $request) 
    {
        $credentials = $request->only('email', 'password');

        if( !$token = JWTAuth::attempt($credentials)) 
        {
            return response([
                'status' => 'error',
                'error' => 'invalid.credentials',
                'msg' => 'Email or password incorrect!'
            ], 400);
        }
        return response([
            'status' => 'success'
        ])->header('Authorization', $token);
    }

    // Fetch a specific user's informations
    public function user(Request $request) 
    {
        $user = User::find(Auth::user()->id);

        return response([
            'status' => 'success',
            'data' => $user
        ]);
    }

    // Check if the current token is still valid
    public function refresh() {
        return response([
            'status' => 'success'
        ]);
    }


}
