<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $table = 'clientes_muestreo';
    public $timestamps = false;
    protected $guarded = [];
    use HasFactory;

    public function identificaciones_muestra ()
    {
        return $this->hasMany(SampleIdentification::class, 'id_cliente');
    }

    public function nombreIdentificacionesMuestra()
{
    return $this->hasMany(SampleIdentification::class, 'id_cliente')
        ->where('obsoleta', 0)
        ->select('identificacion_muestra'); // Replace 'some_field' with the actual field name you want to retrieve
}


    public function ordenes ()
    {
        return $this->hasMany(Order::class, 'id_cliente');
    }

    public function filteredIdentificacionesMuestra () {
        return $this->identificaciones_muestra()->where('obsoleta', 0);
    }
}
