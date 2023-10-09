<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Siralab extends Model
{
    protected $table = "siralab";
    protected $timestamps = false;
    use HasFactory;

    public function orden () {
        return $this->belongsTo(Order::class, 'id_orden');
    }
}
