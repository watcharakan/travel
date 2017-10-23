<?php

namespace App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Socialite;
use App\User;
use Auth;

class FacebookController extends Controller
{
     /**
     * Redirect the user to the GitHub authentication page.
     *
     * @return Response
     */
    public function checkloginTrue(){
        return Auth::user();
    }
  
    public function redirectToProvider()
    {
        return Socialite::driver('facebook')->redirect();
    }

    /**
     * Obtain the user information from GitHub.
     *
     * @return Response
     */
    public function handleProviderCallback()
    {
        $user = Socialite::driver('facebook')->user();


         $authUser = $this->findOrCreateUser($user);
         Auth::login($authUser, true);
         return redirect()->to('/login/true');
       
    }
     public function findOrCreateUser($user)
    {
        $authUser = User::where('provider_id', $user->id)->first();
        if ($authUser) {
            return $authUser;
        }
        return User::create([
            'name'     => $user->name,
            'email'    => $user->email,
            'provider' => 'facebook',
            'provider_id' => $user->id,
            'avatar' =>$user->avatar,
        ]);
    }
   
}
