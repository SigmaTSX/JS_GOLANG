import React, { useState } from 'react';
import WarehouseDetailsTabs from './WarehouseDetailsTabs';
import warehouses from './warehouse.json';
import './WarehouseTable.css';

const WarehouseTable = () => {
    const [showDetails, setShowDetails] = useState(false);
    const [selectedWarehouse, setSelectedWarehouse] = useState(null);

    const handleWarehouseClick = (warehouse) => {
        if (warehouse !== selectedWarehouse) {
            setSelectedWarehouse(warehouse);
            setShowDetails(true);
        } else if (warehouse === selectedWarehouse) {
            setShowDetails(!showDetails);
        }
    };

    const handleSaveChanges = (updatedWarehouseData) => {
        // Handle saving changes to the selected warehouse
        console.log(updatedWarehouseData);
    };

    return (
        <div className="warehouse-table-container">
            <div className="warehouse-table">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Название</th>
                            <th>Адрес</th>
                            <th>Телефон</th>
                            <th>Владелец</th>
                            <th>Статус</th>
                        </tr>
                    </thead>
                    <tbody>
                        {warehouses.map((warehouse) => (
                            <tr
                                key={warehouse.id}
                                className={selectedWarehouse === warehouse ? 'selected-row' : ''}
                                onClick={() => handleWarehouseClick(warehouse)}
                            >
                                <td>{warehouse.id}</td>
                                <td>{warehouse.name}</td>
                                <td>{warehouse.address}</td>
                                <td>{warehouse.phone_number}</td>
                                <td>{warehouse.owner_company}</td>
                                <td>{warehouse.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showDetails && (
                <div className="warehouse-details">
                    <WarehouseDetailsTabs warehouse={selectedWarehouse} onSaveChanges={handleSaveChanges} />
                </div>
            )}
        </div>
    );
};

export default WarehouseTable;
