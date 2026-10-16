<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('inventor_invention', function (Blueprint $table) {
            $table->foreignId("invention_id")->constrained()->restrictOnDelete();
            $table->foreignId("inventor_id")->constrained()->restrictOnDelete();
            $table->primary(["invention_id", "inventor_id"]);
        });
    }

    public function down()
    {
        Schema::dropIfExists('inventor_invention');
    }
};
