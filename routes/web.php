<?php

use App\Http\Controllers\ProfileController;
use App\Models\Order;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    $orders = Order::with(['muestras_aguas.identificacionMuestra', 'cliente'])
    ->where('aguas_alimentos', 'Aguas')
    ->orderBy('folio', 'desc')
    ->where('numero_muestras', '>', '0')
    ->paginate(40);
    $lessParamsOrders = [];
    foreach ($orders as $order) {
        array_push($lessParamsOrders, [
            'key' => $order->folio,
            'folio' => $order->folio,
            'numero_muestras' => $order->numero_muestras,
            'aguas_alimentos' => $order->aguas_alimentos,
        ]);
    }
    return Inertia::render('Dashboard', ['lessParamsOrders' => $orders]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
