<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        User::create([
            'name' => 'test',
            'email' => 'test@test.test',
            'password' => Hash::make('test')
        ]);
        User::create([
            'name' => 'emmanuel',
            'email' => 'emmanuelabona@gmail.com',
            'password' => Hash::make('test')
        ]);
    }
}
