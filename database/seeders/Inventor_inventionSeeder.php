<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Seeder;

class Inventor_inventionSeeder extends Seeder
{
    public function run(): void
    {
        $path = storage_path('plainSeedFiles/kapcsol.txt');

        $lines = explode(
            PHP_EOL,
            trim(file_get_contents($path))
        );

        array_shift($lines);

        $records = [];

        foreach ($lines as $line) {
            if (empty(trim($line))) {
                continue;
            }

            [$tkod, $fkod] = preg_split('/\t+/', trim($line));

            $records[] = [
                'invention_id' => (int) $tkod,
                'inventor_id'  => (int) $fkod,
            ];
        }
        DB::table('inventor_invention')->insert($records);
    }
}
