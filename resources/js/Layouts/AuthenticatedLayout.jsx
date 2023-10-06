import { Link } from '@inertiajs/react';
import styles from './AuthenticatedLayout.module.css';
import logo from '../assets/img/logo.png';
import { Button, Menu } from 'antd';

const menuItems = [
    {
        label: 'Opciones principales',
        key: 'principal',
        children: [
            {
                label: (
                    <Link href='/clients'>
                        Clientes
                    </Link>
                ),
                key: 'clients'
            },
            {
                label: (
                    <Link href='/orders'>
                        Ordenes
                    </Link>
                ),
                key: 'orders'
            },
            {
                label: (
                    <Link href='/results'>
                        Resultados
                    </Link>
                ),
                key: 'results'
            },
        ]
    },

    {
        label: 'Catalogos',
        key: 'catalogs',
        children: [
            {
                label: (
                    <Link href='/parameters'>
                        Parametros
                    </Link>
                ),
                key: 'parameters'
            },
            {
                label: (
                    <Link href='/rules'>
                        Normas
                    </Link>
                ),
                key: 'rules'
            },
        ]
    },
    {
        label: 'Otras operaciones',
        key: 'others',
        children: [
            {
                label: (
                    <Link href='/cesavedac_files_upload'>
                        Archivos Cesavedac
                    </Link>
                ),
                key: 'cesavedac_files_upload'
            },
            {
                label: (
                    <Link href='/polls'>
                        Encuestas
                    </Link>
                ),
                key: 'polls'
            },
        ]
    },
    {
        key: 'logout',
        label: (<Link 
            className=''
            method='post' 
            href={route('logout')}>
            Logout
        </Link>)
    }
];
export default function Authenticated({ auth, children }) {

    return (
        <div className="min-h-screen bg-gray-100">
            <header className={styles['main-header']}>
            <div className={styles['logo-title-container']}>
                <img 
                    src={logo}
                    className={styles.logo}
                    alt='Logo'/>
                <Link
                    className={styles['main-header__title']}
                    to='/'>
                    Laboratorio de Analisis Industriales del Guadiana S. A. de C. V.
                </Link>
            </div>
            <Menu
                mode='horizontal' 
                items={menuItems}
                className={styles.menu}/>
        </header>

            <main>{children}</main>
        </div>
    );
}
