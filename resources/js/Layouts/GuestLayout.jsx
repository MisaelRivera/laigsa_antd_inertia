import { useState, useReducer } from 'react';
import { Link } from '@inertiajs/react';
import styles from './GuestLayout.module.css';
import logo from '../assets/img/logo.png';
import { Modal, Menu, Button } from 'antd';
const MODALS_INITIAL_STATE = {
    isOpenWater: false,
    isOpenFood: false,
    isOpenWaste: false,
}

const MODALS_ACTIONS = {
    TOGGLE_MODAL: 'TOGGLE_MODAL',
};

const MODALS_MUTATORS = {
    TOGGLE_WATER: {
        type: MODALS_ACTIONS.TOGGLE_MODAL,
        payload: 'water' 
    },
    TOGGLE_FOOD: {
        type: MODALS_ACTIONS.TOGGLE_MODAL,
        payload: 'food' 
    },
    TOGGLE_WASTE: {
        type: MODALS_ACTIONS.TOGGLE_MODAL,
        payload: 'waste' 
    }
}
const modalsReducer = (state, action) => {
    if (action.type === MODALS_ACTIONS.TOGGLE_MODAL) {
        switch (action.payload) {
            case 'water':
                return {...state, isOpenWater: !state.isOpenWater};
            case 'food':
                return {...state, isOpenFood: !state.isOpenFood};
            case 'waste':
                return {...state, isOpenWaste: !state.isOpenWaste};
        }
    }
};


export default function Authenticated({ children }) {
   /* const [isOpenAguas, setIsOpen] = useState(false);
    const isOpenAguasHandler = () => {
        setIsOpen((prev) => !prev);
    };

    const okAguasHandler = (ev) => {
        setIsOpen((prev) => !prev);
    };*/
    const [modalsState, modalsDispatcher] = useReducer(modalsReducer, MODALS_INITIAL_STATE); 
    const menuItems = [
        {
            label: (<Link to="/nosotros">
                Nosotros
            </Link>),
            key: 'nosotros',
        },
    
        {
            label: 'Servicios',
            key: 'services',
            children: [
                {
                    label: (
                        <Button
                            onClick={() => modalsDispatcher(MODALS_MUTATORS.TOGGLE_WATER)}>
                            Analisis de aguas
                        </Button>
                    ),
                    key: 'water_analysis'
                },
                {
                    label: (
                        <Button
                            onClick={() => modalsDispatcher(MODALS_MUTATORS.TOGGLE_FOOD)}>
                            Analisis de alimentos
                        </Button>
                    ),
                    key: 'food_analisis'
                },
                {
                    label: (
                        <Button
                            onClick={() => modalsDispatcher(MODALS_MUTATORS.TOGGLE_WASTE)}>
                            Analisis de residuos
                        </Button>
                    ),
                    key: 'waste_analysis'
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
                href={route('logout')}
                as='button'>
                Logout
            </Link>)
        }
    ];

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
        <Modal 
            title="Analisis de aguas"
            open={modalsState.isOpenWater}
            onOk={() => modalsDispatcher(MODALS_MUTATORS.TOGGLE_WATER)}
            onCancel={() => modalsDispatcher(MODALS_MUTATORS.TOGGLE_WATER)}>
                <h1>Modal de Aguas yey! n.n</h1>
        </Modal>
        <Modal 
            title="Analisis de alimentos"
            open={modalsState.isOpenFood}
            onOk={() => modalsDispatcher(MODALS_MUTATORS.TOGGLE_FOOD)}
            onCancel={() => modalsDispatcher(MODALS_MUTATORS.TOGGLE_FOOD)}>
                <h1>Modal de Alimentos yey! n.n</h1>
        </Modal>
        <Modal 
            title="Analisis de residuos"
            open={modalsState.isOpenWaste}
            onOk={() => modalsDispatcher(MODALS_MUTATORS.TOGGLE_WASTE)}
            onCancel={() => modalsDispatcher(MODALS_MUTATORS.TOGGLE_WASTE)}>
                <h1>Modal de Residuos yey! n.n</h1>
        </Modal>
        </div>
    );
}
