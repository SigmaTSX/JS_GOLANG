import React from 'react';
import WarehouseTable from './Warehouse/WarehouseTable';
import { Layout } from 'antd';

const { Footer } = Layout;


const App = () => {

  return (
    <Layout>
      <WarehouseTable  />
      
      <Footer style={{ backgroundColor: "#AFEEEE", display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>
        <div>
          Выполнил: Башкиров Денис Владимирович
          <div>
            Группа: ЗКТ-45-21
          </div>
        </div>
        
        <div style={{ justifySelf: 'end' }}>
          Реализация проекта по теме РГР: 
          <div>
            "53.Разработка технического задания на информационную систему складского учета продукции"
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default App;
