<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Seeder;
use App\Models\Inventor;
class InventorSeeder extends Seeder
{
    public function run()
    {
        $path = storage_path('plainSeedFiles/kutato.txt');
        $lines = explode(
            "\n",
            trim(file_get_contents($path))
        );

        array_shift($lines);

        foreach ($lines as $line) {
            if (empty(trim($line))) {
                continue;
            }

            $data = preg_split('/\t+/', trim($line));

            Inventor::create([
                'id'     => (int) $data[0],
                'name'   => trim($data[1]),
                'bornat' => (int) $data[2],
                'diedat' => !empty($data[3]) ? (int) $data[3] : null,
            ]);
        }
    }
}
