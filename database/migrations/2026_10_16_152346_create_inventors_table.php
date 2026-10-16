<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('inventors', function (Blueprint $table) {
            $table->id();
            $table->string('name', 40);
            $table->integer('bornat');
            $table->integer('diedat')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('inventors');
    }
};
