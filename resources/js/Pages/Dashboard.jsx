import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import { Table, Checkbox, Button, Popover} from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
const {Column} =  Table;
  export default function Dashboard(props) {
    const [supervisionColor, setSupervisionColor] = useState('bg-red-500');
    const supervisionClickHandler = (ev) => {
      const el = ev.target;
      console.log(el);
      const id = el.id,
            supervision = el.getAttribute('supervisionValue');
      console.log(supervision);
    };
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                </div>
            </div>
      <div>
        <div style={{ marginBottom: 16 }}>
          <h3>Column Visibility</h3>
        </div>
        <Table
          dataSource={props.lessParamsOrders.data}
          className='w-11/12 mx-auto'
        >
          <Column
            title={(
              <div>
                <label htmlFor="search-by-folio">Folio</label>
                <input type="text" id='search-by-folio' />
              </div>
            )}
            dataIndex="folio"
            key="folio"
            render={(folio, record) => {
            return (<Popover 
                placement='bottom'
                content={record.muestras_aguas.map( muestra =>
                (<ul className='mt-4'>
                  <li><b>MFQ-{folio} - {muestra.numero_muestra}</b></li>
                  <li>
                    <b>Identificacion de la muestra: </b> 
                    {muestra.identificacion_muestra.identificacion_muestra}
                  </li>
                  <li>
                    <b>Caracteristicas: </b> 
                    {muestra.caracteristicas}
                  </li>
                  <li>
                    <b>Muestreador: </b>
                     {muestra.muestreador}
                  </li>
                  <li>
                    <b>pH: </b>
                     {muestra.pH}
                  </li>
                  <li>
                    <b>Parametros: </b>
                     {muestra.parametros}
                  </li>
                  <li>
                    <b>Cloro: </b>
                     {muestra.cloro}
                  </li>
                  <li>
                    <b>Valor de cloro: </b>
                     {muestra.valor_cloro}
                  </li>
                </ul>)
                )}>
                <Button>
                  {folio}
                </Button>
              </Popover>)
            }}/>
            <Column
              dataIndex="numero_muestras"
              key="numero_muestras"
              title="No."/>
              <Column
              dataIndex="aguas_alimentos"
              key="aguas_alimentos"
              title={(
                <Button>
                  <ArrowDownOutlined />
                </Button>
              )}/>
              <Column
                dataIndex="fecha_recepcion"
                key="fecha_recepcion"
                title="Fecha de recepcion"/>
              <Column
                dataIndex="hora_recepcion"
                key="hora_recepcion"
                title="Hora de recepcion"/>
                <Column
                  title={(
                    <div>
                      <label htmlFor="search-by-client">Cliente</label>
                      <input type="text" id='search-by-client' />
                    </div>
                  )}
                  dataIndex="cliente"
                  key="cliente"
                  render={(_, record) => {
                    return <p>{record.cliente.cliente}</p>
                  }}/>
              <Column
                dataIndex="cesavedac"
                key="cesavedac"
                title="Cesavedac"
                render={(cesavedac) => {
                  if (cesavedac === false) {
                    return <></>;
                  }
                  return <div className={`w-5 h-5 bg-blue-500 rounded-full`}></div>;
                }}/>

                <Column
                  dataIndex="supervision"
                  key="supervision"
                  title="Supervision"
                  render={(supervision, record) => {
                    if (supervision === false) {
                      return <></>;
                    }
                    if (supervision === 1) {
                      console.log(supervision)
                      setSupervisionColor('bg-green-500');
                    } else {
                      console.log(supervision)
                      setSupervisionColor('bg-red-500');
                    }
                    return (<div 
                      className={`w-5 h-5 ${supervisionColor} rounded-full`}
                      onClick={supervisionClickHandler}
                      id={record.id}
                      key={record.id}
                      supervisionValue={supervision}></div>);
                }}/>
        </Table>
      </div>
        </AuthenticatedLayout>
    );
}
