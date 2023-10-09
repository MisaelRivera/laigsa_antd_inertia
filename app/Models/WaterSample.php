<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WaterSample extends Model
{
    protected $table = 'muestras_orden';
    public $timestamps = false;
    use HasFactory;

    public function orden ()
    {
        return $this->belongsTo(Order::class, 'id_orden');
    }

    public function identificacionMuestra ()
    {
        return $this->hasOne(SampleIdentification::class, 'id', 'id_identificacion_muestra');
    }

}
