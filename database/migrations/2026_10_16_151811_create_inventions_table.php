<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('inventions', function (Blueprint $table) {
            $table->id();
            $table->string('name', 80)->unique("NameIndex");
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('inventions');
    }
};
