<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SampleIdentification extends Model
{
    protected $table = 'identificacion_muestras';
    public $timestamps = false;
    use HasFactory;

    public function cliente ()
    {
        return $this->belongsTo(Client::class, 'id_cliente');
    }

    public function muestra ()
    {
        return $this->belongsTo(Sample::class, 'id_identificacion_muestra');
    }

}
