<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'ordenes';
    protected $timestaps = false;
    use HasFactory;

    public function cliente ()
    {
        return $this->belongsTo(Client::class, 'id_cliente', 'id');
    }

    public function siralab () {
        return $this->hasOne(Siralab::class, 'id_orden');
    }

    public function muestras_aguas () {
        return $this->hasMany(WaterSample::class, 'id_orden');
    }

    public function muestras_alimentos () {
        return $this->hasMany(FoodSample::class, 'id_orden');
    }
}
