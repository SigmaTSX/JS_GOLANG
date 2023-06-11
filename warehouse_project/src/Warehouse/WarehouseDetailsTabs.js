import React, { useState, useEffect } from 'react';
import { Tabs, Input, Button } from 'antd';

const { TabPane } = Tabs;

const WarehouseDetailsTabs = ({ warehouse, onSaveChanges }) => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    setFormData({ ...warehouse });
  }, [warehouse]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSaveChanges(formData);
  };

  if (!formData) {
    return <div>Loading...</div>;
  }

  return (
    <Tabs>
      <TabPane tab="General Information" key="general">
        <div>
          <label>ID:</label>
          <Input name="id" value={formData.id} disabled />
        </div>
        <div>
          <label>Название:</label>
          <Input name="name" value={formData.name} disabled />
        </div>
        <div>
          <label>Адрес:</label>
          <Input name="address" value={formData.address} onChange={handleInputChange} />
        </div>
        <div>
          <label>Телефон склада:</label>
          <Input name="phone_number" value={formData.phone_number} onChange={handleInputChange} />
        </div>
        <div>
          <label>Тип склада:</label>
          <Input name="type" value={formData.type} disabled />
        </div>
        <div>
          <label>Фирма:</label>
          <Input name="owner_company" value={formData.owner_company} disabled />
        </div>
        <div>
          <label>Телефон ответственного за склад:</label>
          <Input
            name="warehouse_phone_number"
            value={formData.warehouse_phone_number}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Владелец склада:</label>
          <Input
            name="warehouse_owner"
            value={formData.warehouse_owner}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Номер владельца:</label>
          <Input
            name="owner_phone_number"
            value={formData.owner_phone_number}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Статус:</label>
          <Input name="status" value={formData.status} disabled />
        </div>
        <Button type="primary" onClick={handleSave}>
          Save
        </Button>
      </TabPane>
      <TabPane tab="Products" key="products">
        {/* Add your product content here */}
      </TabPane>
    </Tabs>
  );
};

export default WarehouseDetailsTabs;
