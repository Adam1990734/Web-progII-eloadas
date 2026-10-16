<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Seeder;
use App\Models\Invention;
class InventionSeeder extends Seeder
{
    public function run()
    {
        $path = storage_path('plainSeedFiles/talalmany.txt');
        $lines = explode(
            PHP_EOL,
            trim(file_get_contents($path))
        );

        array_shift($lines);

        foreach ($lines as $line) {
            if (empty(trim($line))) {
                continue;
            }

            [$tkod, $name] = preg_split('/\t+/', trim($line));

            Invention::create([
                'id' => (int) $tkod,
                'name' => trim($name),
            ]);
        }
    }
}
