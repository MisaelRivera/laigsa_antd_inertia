<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FoodSample extends Model
{
    protected $table = 'muestras_alimentos';
    protected $timestamps = false;
    use HasFactory;
    public function orden ()
    {
        return $this->belongsTo(Order::class, 'id_orden');
    }
}
