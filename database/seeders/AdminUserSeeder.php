<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Tauseef Shah',
            'email' => 'ts@tauseefsshah.com',
            'password' => \bcrypt(Str::random()),
            'verified_at' => \now(),
        ]);
    }
}
